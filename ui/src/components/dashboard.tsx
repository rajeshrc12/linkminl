import { useUser } from "@/hooks/useUser";

const Dashboard = () => {
  const { data, isLoading } = useUser();
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome {data?.name}</h1>
      <div>
        <input type="text" placeholder="enter url" />
        <button onClick={() => {}}>submit</button>
      </div>
    </div>
  );
};

export default Dashboard;
