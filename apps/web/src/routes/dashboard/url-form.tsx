import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import shortenerApi from "@/api/shortener";

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
          <form action={sendUrl}>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="enter url"
              pattern="[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}"
              title="Enter a valid domain name like example.com or sub.example.org"
              required
            />
            <div className="flex justify-end">
              <Button type="submit">Create your link</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrlForm;
