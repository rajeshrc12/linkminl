import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import shortenerApi from "@/api/shortener";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Url } from "@repo/db";

import {
  HiOutlineCheck,
  HiOutlineClipboardDocument,
  HiOutlineLink,
} from "react-icons/hi2";
import { env } from "@/config/env";

const UrlForm = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("Untitled");
  const [url, setUrl] = useState<Url>();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${env.WEB_URL}/${url?.shortCode}`);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const sendUrl = async () => {
    setLoading(true);
    const response = await shortenerApi.post("/url", {
      url: value,
      title,
    });
    if (response.status === 200) {
      setUrl(response.data);
      setValue("");
    }
    setLoading(false);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-3 w-175 pt-20 gap-5">
        <h3 className="text-3xl">Create new link</h3>
        <div className="flex flex-col bg-white p-3 shadow rounded-2xl">
          <form action={sendUrl} className="flex flex-col gap-2">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="enter title"
              required
            />
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
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create your link"}
              </Button>
            </div>
          </form>
        </div>
        {!!url && (
          <Dialog open={!!url} onOpenChange={() => setUrl(undefined)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Your link is ready
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Copy your link or use the quick-share buttons below.
                </p>

                <div className="flex items-center justify-between gap-3 rounded-lg border bg-muted/40 p-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <HiOutlineLink className="h-5 w-5 text-blue-600 shrink-0" />

                    <a
                      href={`${env.WEB_URL}/${url.shortCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline truncate"
                    >
                      {env.WEB_URL}/{url.shortCode}
                    </a>
                  </div>

                  <Button variant="outline" size="icon" onClick={handleCopy}>
                    {copied ? (
                      <HiOutlineCheck className="h-4 w-4" />
                    ) : (
                      <HiOutlineClipboardDocument className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default UrlForm;
