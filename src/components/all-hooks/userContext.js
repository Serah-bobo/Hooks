import { createContext, useState } from "react";
//  createContext is used to create a context object.
//  useState is used to manage state in a component.
//  It is similar to setState but is used for more complex state logic.
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    //  UserContext.Provider is used to provide data to child components.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
