import { Button } from "@/components/ui/button";

const App = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={handleLogin}>Login with Google</Button>
    </div>
  );
};

export default App;
