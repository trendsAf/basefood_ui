import React, { createContext, useContext } from "react";

interface RoleContextType {
  isProducer: (role: string) => boolean;
}

interface RoleProviderProps {
  children: React.ReactNode;
}
const RoleContext = createContext<RoleContextType | undefined>(undefined);

const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const isProducer = (role: string) => role === "producer";

  return (
    <RoleContext.Provider value={{ isProducer }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};

export default RoleProvider;
