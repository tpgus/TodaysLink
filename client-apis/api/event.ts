import { baseURL } from "../config/index";
import type { EventListType, SearchOptionType } from "../../types/commonType";

interface ParamsType {
  pageOffset: number;
  searchOption: SearchOptionType;
}

export const eventAPI = {
  getEventList: async ({ pageOffset, searchOption }: ParamsType) => {
    const { platforms, numOfWinner, searchValue, tags } = searchOption;
    const response = await baseURL.get<EventListType>(
      `/event?offset=${pageOffset}&tags=${tags}&platforms=${platforms}&numOfWinner=${numOfWinner}&searchValue=${searchValue}`
    );
    return response.data;
  },
};
