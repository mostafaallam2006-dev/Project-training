import { useContext } from "react";
import { UsernameContext } from "../../App";

const Button = () => {
  const username = useContext(UsernameContext);
  return <h1>My username is {username}</h1>;
};

export default Button;
