import Profile from "@/routes/dashboard/profile";

const Navbar = () => {
  return (
    <div className="h-14 flex justify-between px-5 py-2">
      <div></div>
      <Profile />
    </div>
  );
};

export default Navbar;
