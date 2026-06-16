import { useUser } from "@/hooks/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const { data, isLoading } = useUser();
  if (isLoading || !data) return <p>Loading...</p>;
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage src={data.image} alt={data.name} />
        <AvatarFallback>{data.name}</AvatarFallback>
      </Avatar>
      <div>{data.name.split(" ")[0]}</div>
    </div>
  );
};

export default Profile;
