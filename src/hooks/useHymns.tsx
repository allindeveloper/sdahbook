import { useQuery } from "@tanstack/react-query";
import { getAllHymnsApiService } from "../services/hymn";
type UseHymnsPayload = {
  searchQuery: string;
};
const useHymns = (payload?: UseHymnsPayload) => {
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
  return {
    hymns,
  };
};

export default useHymns;
