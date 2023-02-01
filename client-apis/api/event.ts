import { baseURL } from "../config/index";
import type { EventListType, SearchOptionType } from "../../types";

interface ParamsType {
  pageOffset: number;
  searchOption: SearchOptionType;
}

export const eventAPI = {
  getEventList: async ({ pageOffset, searchOption }: ParamsType) => {
    const { platforms, numOfWinner, searchValue, tags } = searchOption;
    //tags는 '공유 & 초대'로 인해 '&'문자가 필요하다. 따라서 encoding 과정이 필요하다
    const response = await baseURL.get<EventListType>(
      `/event?tags=${encodeURIComponent(
        tags
      )}&platforms=${platforms}&numOfWinner=${numOfWinner}&searchValue=${searchValue}&pageOffset=${pageOffset}`
    );
    return response.data;
  },
};
