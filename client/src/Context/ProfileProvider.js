import React from "react";
export const ProfileContext = React.createContext();

const ProfileProvider = ({ children }) => {
  const [state, setState] = React.useState(null);
  return (
    <ProfileContext.Provider value={{ state, setState }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
