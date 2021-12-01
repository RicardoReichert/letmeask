import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "../context/AuthContext";

export function useAuth(){
  const value = useContext(AuthContext)
 return value;
}