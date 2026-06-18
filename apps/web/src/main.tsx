import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import Dashboard from "@/routes/dashboard/page.tsx";
import UrlForm from "@/routes/dashboard/url-form.tsx";
import UrlList from "@/routes/dashboard/url-list.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        element: <Navigate to="list" replace />,
      },
      {
        path: "create",
        Component: UrlForm,
      },
      {
        path: "list",
        Component: UrlList,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
