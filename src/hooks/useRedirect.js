import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuthContext } from "../context/AuthContext";


export const useRedirect = () => {

  const redirect = () => {
    const { user } = useAuthContext();

    const navigate = useNavigate();
  
    // Redirect
    useEffect(() => {
      if (!user) {
        return navigate('/');
      }
    }, [user]);

  }


  return {
    redirect
  }
}