import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "@/components/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UrlForm from "@/components/url-form";
import UrlList from "@/components/url-list";

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
