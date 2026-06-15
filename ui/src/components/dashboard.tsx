import { useUser } from "@/hooks/useUser";

const Dashboard = () => {
  const { data, isLoading } = useUser();
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return <h1>Welcome {data?.name}</h1>;
};

export default Dashboard;
