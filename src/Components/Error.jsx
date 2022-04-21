import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/login");
  }, []);

  return <h1>Something Went Wrong</h1>;
};