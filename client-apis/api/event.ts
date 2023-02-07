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
} from "firebase/firestore";
import { db } from "../../helpers/firestore";
import { EventListType, EventType, SearchOptionType } from "../../types";

export const getRef = () => collection(db, "event");

export const getEventList = async (
  options: SearchOptionType,
  beforeDocumentId?: string
) => {
  try {
    const eventRef = getRef();
    let q: Query<DocumentData>;
    if (beforeDocumentId) {
      //페이지 네이션
      const docRef = doc(eventRef, beforeDocumentId);
      const docSnap = await getDoc(docRef);
      q = query(eventRef, limit(4), orderBy("endDate"), startAfter(docSnap));
    } else {
      q = query(eventRef, limit(4), orderBy("endDate"));
    }

    const documents = await getDocs(q);
    if (documents.size === 0) return { eventList: [] };
    const lastDocumentId = documents.docs[documents.docs.length - 1].id;
    const eventList: EventListType = [];
    documents.forEach((document) => {
      eventList.push({
        ...(document.data() as EventType),
        startDate: document.data().startDate.toDate().toString(),
        endDate: document.data().endDate.toDate().toString(),
        announcementDate: document.data().announcementDate.toDate().toString(),
        id: document.id,
      });
    });

    return { eventList, lastDocumentId };
  } catch (error) {
    throw error;
  }
};

export const getEventById = async (id: string) => {
  try {
    const eventRef = getRef();
    const docRef = doc(eventRef, id);
    const docSnap = await getDoc(docRef);
    const event = docSnap.data() as EventType;
    return {
      ...event,
      startDate: event.startDate.toDate().toString(),
      endDate: event.endDate.toDate().toString(),
      announcementDate: event.announcementDate.toDate().toString(),
    };
  } catch (error) {
    throw error;
  }
};

export const getEventIds = async () => {
  try {
    const eventRef = getRef();
    const q = query(eventRef, limit(4), orderBy("endDate"));
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

//51,222,1,50,999999999,999999999,54
