import { useEffect } from "react";
import { useParams } from "react-router";
import { useShortCode } from "@/hooks/useShortCode";

const Redirect = () => {
  const { code } = useParams();

  const { data } = useShortCode(code);

  useEffect(() => {
    if (data?.original) {
      window.location.replace("https://" + data.original);
    }
  }, [data]);

  return null;
};

export default Redirect;
