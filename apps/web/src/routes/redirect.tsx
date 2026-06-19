import { useParams } from "react-router";

const Redirect = () => {
  const { code } = useParams();

  console.log(code); // "abcd" for /abcd

  return <div>Code: {code}</div>;
};

export default Redirect;
