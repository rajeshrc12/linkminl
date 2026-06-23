import { env } from "@/config/env";
import { useUrls } from "@/hooks/useUrls";
import type { Url } from "@repo/db";
import { HiOutlineArrowTurnDownRight } from "react-icons/hi2";

const UrlList = () => {
  const { data, isLoading } = useUrls();

  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <div className="h-full flex flex-col p-5">
      <div className="flex justify-between mb-4">
        <div className="text-xl font-semibold">URLs</div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">
        {data.length} links
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col gap-3">
          {data.map((url: Url) => (
            <div
              key={url.id}
              className="bg-white rounded-lg border p-4 flex flex-col gap-2 shadow-sm"
            >
              <div className="font-medium text-gray-900">{url.title}</div>
              <a
                href={`${env.WEB_URL}/${url.shortCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {env.WEB_URL}/{url.shortCode}
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <HiOutlineArrowTurnDownRight className="shrink-0" />
                <span className="truncate">{url.original}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrlList;
