import React, { useContext } from "react";
import { UserContext } from "./userContext";

function UseContext() {
  //  useContext is used to pass data through the component tree without having to pass props down manually at every level.
  //  It is similar to the Provider/Consumer pattern in React.
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>useContext</h1>
      <h2>Welcome, {user}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UseContext;
