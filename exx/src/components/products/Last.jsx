import { UsernameContext } from "../../App";

const Last = () => {
  return (
    <UsernameContext.Consumer>
      {(username) => <h1>My username is {username}</h1>}
    </UsernameContext.Consumer>
  );
};

export default Last;
