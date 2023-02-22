import { db } from "../../lib/firestore";
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
} from "firebase/firestore";
import type { QueryFieldFilterConstraint } from "firebase/firestore";
import type { EventType, SearchOptionType } from "../../types";

export const getEventRef = () => collection(db, "event");

export const getEventById = async (id: string) => {
  try {
    const eventRef = getEventRef();
    const docRef = doc(eventRef, id);
    const docSnap = await getDoc(docRef);
    const event = docSnap.data() as EventType;
    return {
      ...event,
    };
  } catch (error) {
    throw error;
  }
};

export const getEventIds = async () => {
  try {
    const eventRef = getEventRef();
    const q = query(eventRef, limit(12), orderBy("endDate"));
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
