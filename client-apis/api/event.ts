import { baseURL } from "../config/index";
import type { EventListType, SearchOptionType } from "../../types/commonType";

interface ParamsType {
  pageOffset: number;
  searchOption: SearchOptionType;
}

export const eventAPI = {
  getEventList: async ({ pageOffset, searchOption }: ParamsType) => {
    const { flatform, numOfWinner, searchValue, tag } = searchOption;
    const response = await baseURL.get<EventListType>(
      `/event?offset=${pageOffset}&tag=${"현금"}&flatform=${flatform}&numOfWinner=${numOfWinner}&searchValue=${searchValue}`
    );
    return response.data;
  },
};
