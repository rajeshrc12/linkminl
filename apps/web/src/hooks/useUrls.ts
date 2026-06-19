// hooks/useUser.ts

import shortenerApi from "@/api/shortener";
import { useQuery } from "@tanstack/react-query";

const getAllUrls = async () => {
  const res = await shortenerApi.get("/url");
  return res.data;
};

export const useUrls = () => {
  return useQuery({
    queryKey: ["urls"],
    queryFn: getAllUrls,
  });
};
