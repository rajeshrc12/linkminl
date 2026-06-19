import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";
import { HiOutlineLink } from "react-icons/hi2";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      name: "Links",
      href: "/dashboard/list",
      icon: HiOutlineLink,
    },
  ];

  return (
    <aside className="w-64 border-r bg-background h-screen p-4">
      <div className="mb-8 flex items-center gap-2 px-2">
        <Link to={"/"}>
          <h1 className="text-xl font-bold">LinkMinl</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <Link to={"/dashboard/create"}>
          <Button className="w-full">Create link</Button>
        </Link>
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = location.pathname === link.href;

            return (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
