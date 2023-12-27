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
  const dispatch = useAppDispatch();
  const hymns = useQuery(
    ["allhymns"],
    () =>
      getAllHymnsApiService({
        searchQuery: payload?.searchQuery,
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
  };
};

export default useHymns;