// hooks/useUser.ts
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const getUser = async () => {
  const res = await api.get("/user");
  return res.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5,
    retry: false, // important (explained below)
  });
};