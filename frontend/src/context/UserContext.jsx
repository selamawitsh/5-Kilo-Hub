import React, { createContext, useState } from "react";
import defaultAvatar from "../assets/avatar.png";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: "",
    department: "",
    bio: "",
    profileImage: defaultAvatar,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
