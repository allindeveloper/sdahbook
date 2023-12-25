import { apiConstants } from "../constants/apiConstants";
import { HymnBook } from "../types/hymn";
import { AppResponse } from "../types/response";
import { NetworkRequest } from "../types/request";
import { getApiUrl } from "../utils/networkUtils";
import { Platform } from "react-native";
import Config from "react-native-config";

const baseURL = Platform.select({
  android: Config.API_ANDROID_URL,
  ios: Config.API_URL,
});

export const getAllHymnsApiService = async (
  payload: NetworkRequest,
): Promise<AppResponse<HymnBook[]>> => {
  const data = await fetch(`${baseURL}${getApiUrl(apiConstants.HYMNS, payload.searchQuery)}`);
  const response = await data.json();
  return response as AppResponse<HymnBook[]>;
};
