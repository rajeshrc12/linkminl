import shortenerApi from "@/lib/shorternerApi";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UrlForm = () => {
  const [value, setValue] = useState("");
  const sendUrl = async () => {
    const response = await shortenerApi.post("/url", {
      url: value,
    });
    console.log(response.data);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-3 w-175 pt-20 gap-5">
        <h3 className="text-3xl">Create new link</h3>
        <div className="flex flex-col bg-white p-3 shadow rounded-2xl gap-5">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="enter url"
          />
          <div className="flex justify-end">
            <Button onClick={sendUrl}>Create your link</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlForm;
