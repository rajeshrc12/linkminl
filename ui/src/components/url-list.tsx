import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const UrlList = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-between">
        <div>URLs</div>
        <Link to={"/dashboard/create"}>
          <Button>Create link</Button>
        </Link>
      </div>
      <div>List</div>
    </div>
  );
};

export default UrlList;
