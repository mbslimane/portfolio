import React, { useContext } from "react";

export const InfoContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  setFirstName: (firstName) => {},
  setLastName: (lastName) => {},
  setEmail: (email) => {},
  setPhoneNumber: (phoneNumber) => {},
});

export const useInfo = () => {
  return useContext(InfoContext);
};
export const InfoProvider = InfoContext.Provider;
