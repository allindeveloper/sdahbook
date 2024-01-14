import { useQuery } from "@tanstack/react-query";
import { getAllHymnsApiService } from "../services/hymn";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { saveOfflineHymn } from "../redux/reducers/hymnReducer";
type UseHymnsPayload = {
  searchQuery: string;
};
const useHymns = (payload?: UseHymnsPayload) => {
  const { offlineHymn } = useAppSelector((state) => state.hymnReducer);
  const { language } = useAppSelector((state) => state.settingsReducer);
  const dispatch = useAppDispatch();

  const hymns = useQuery(
    ["allhymns", payload?.searchQuery, language],
    () =>
      getAllHymnsApiService({
        searchQuery: payload?.searchQuery,
        locale: language,
      }),
    {
      select: (data) => data.data,
      staleTime: 60 * 1000,
      retry: true,
    },
  );

  useEffect(() => {
    if (hymns.isSuccess && hymns.data) {
      dispatch(saveOfflineHymn(hymns.data));
    }
  }, [hymns.isSuccess]);

  return {
    offlineHymn,
    hymns,
  };
};

export default useHymns;
