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
import { db } from "../../helpers/firestore";
import { fieldOptionBuilder } from "../../helpers/query-utils";
import type { QueryFieldFilterConstraint } from "firebase/firestore";
import type { EventListType, EventType, SearchOptionType } from "../../types";

export const getRef = () => collection(db, "event");

export const getEventById = async (id: string) => {
  try {
    const eventRef = getRef();
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

export const getTotalLength = async (
  options: QueryFieldFilterConstraint[] = []
) => {
  try {
    const eventRef = getRef();
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
    const eventRef = getRef();
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
        limit(4)
      );
    } else {
      q = query(eventRef, ...fieldOptions, orderBy("numOfWinner"), limit(4));
    }

    const documents = await getDocs(q);
    const lastDocumentId = documents.docs[documents.docs.length - 1]?.id;
    const eventList: EventListType = [];
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
