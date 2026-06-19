import resolverApi from "@/api/resolver";
import { useQuery } from "@tanstack/react-query";

const getShortCode = async (code: string) => {
  const res = await resolverApi.get(`/url/${code}`);
  return res.data;
};

export const useShortCode = (code?: string) => {
  return useQuery({
    queryKey: ["short-code", code],
    queryFn: () => getShortCode(code!),
    enabled: !!code,
  });
};
