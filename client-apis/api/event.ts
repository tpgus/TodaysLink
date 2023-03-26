import { db } from "../../lib/firestore";
import { Session } from "next-auth";
import { dateParser } from "../../utils/parser-utils";
import { fieldOptionBuilder } from "../../utils/query-utils";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  orderBy,
  limit,
  startAfter,
  Query,
  DocumentData,
  getCountFromServer,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import type { QueryFieldFilterConstraint } from "firebase/firestore";
import type { EventType, MyEventType, SearchOptionType } from "../../types";
import { FirebaseError } from "firebase/app";

export const getEventRef = () => collection(db, "event");

export const getEventById = async (id: string) => {
  try {
    const eventRef = getEventRef();
    const docRef = doc(eventRef, id);
    const docSnap = await getDoc(docRef);
    const event = docSnap.data() as EventType;
    return {
      ...event,
      id,
    };
  } catch (error) {
    throw error;
  }
};

export const getEventIds = async () => {
  try {
    const eventRef = getEventRef();
    const q = query(eventRef, limit(8), orderBy("endDate"));
    const documents = await getDocs(q);
    const ids: string[] = [];
    documents.forEach((document) => {
      ids.push(document.id);
    });
    return ids;
  } catch (error) {
    throw error;
  }
};

export const getTotalLength = async (
  options: QueryFieldFilterConstraint[] = []
) => {
  try {
    const eventRef = getEventRef();
    const q = query(eventRef, ...options);
    const snapShot = await getCountFromServer(q);
    return snapShot.data().count;
  } catch (error) {
    throw error;
  }
};

export const getEventList = async (
  options: SearchOptionType,
  beforeDocumentId: string | null
) => {
  try {
    const eventRef = getEventRef();
    const fieldOptions = await fieldOptionBuilder(options);
    const totalLength = await getTotalLength(fieldOptions);

    let q: Query<DocumentData>;
    if (beforeDocumentId) {
      //페이지 네이션
      const docRef = doc(eventRef, beforeDocumentId);
      const docSnap = await getDoc(docRef);
      q = query(
        eventRef,
        ...fieldOptions,
        orderBy("numOfWinner"),
        startAfter(docSnap),
        limit(8)
      );
    } else {
      q = query(eventRef, ...fieldOptions, orderBy("numOfWinner"), limit(8));
    }

    const documents = await getDocs(q);
    const lastDocumentId = documents.docs[documents.docs.length - 1]?.id;
    const eventList: EventType[] = [];
    documents.forEach((document) => {
      eventList.push({
        ...(document.data() as EventType),
        id: document.id,
      });
    });

    return { eventList, totalLength, lastDocumentId };
  } catch (error) {
    throw error;
  }
};

//정렬 함수
const compare = (key: "announcementDate", subKey: "year" | "month" | "day") => {
  return (a: EventType, b: EventType) =>
    a[key][subKey] > b[key][subKey]
      ? 1
      : a[key][subKey] < b[key][subKey]
      ? -1
      : 0;
};

//특정 유저의 document 반환 함수
const getUserDocument = async (userId: string) => {
  const usersRef = collection(db, "users");
  const docRef = doc(usersRef, userId);
  const docSanp = await getDoc(docRef);
  return docSanp;
};

//특정 유저의 참여한 이벤트 목록
export const getMyEventHistory = async (session: Session) => {
  const { user } = session;

  try {
    const userDocument = await getUserDocument(user.id);
    const myEventList = userDocument.data()!.myEvent as MyEventType[];
    myEventList.sort(compare("announcementDate", "day"));
    myEventList.sort(compare("announcementDate", "month"));
    myEventList.sort(compare("announcementDate", "year"));
    return myEventList;
  } catch (error) {
    throw error;
  }
};

//특정 유저의 특정 이벤트 참여 여부
export const checkIsParticipatedEvent = async (
  session: Session,
  targetEventId: string
) => {
  const { user } = session;

  try {
    const userDocument = await getUserDocument(user.id);
    const myEvent = userDocument.data()!.myEvent as MyEventType[];

    if (myEvent.find((event) => event.id === targetEventId)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

//이벤트 참여 목록 추가
export const addMyEventHistory = async (session: Session, event: EventType) => {
  const { user } = session;

  try {
    //이미 참여했는지 확인
    const isParticipated = await checkIsParticipatedEvent(session, event.id);
    if (isParticipated) {
      return { success: false, message: "이미 참여한 이벤트입니다." };
    }

    const usersRef = collection(db, "users");
    const docRef = doc(usersRef, user.id);
    const docSanp = await getDoc(docRef);
    const prevMyEvent = docSanp.data()!.myEvent as MyEventType[];

    const newMyEvent = {
      ...event,
      participationDate: Timestamp.fromDate(new Date()),
    };

    await updateDoc(docRef, {
      myEvent: [...prevMyEvent, newMyEvent],
    });

    return { success: true, message: "참여 완료!!!" };
  } catch (error) {
    throw error;
  }
};
