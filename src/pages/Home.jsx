import React, { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) navigate("/profile");

  return <Navigate to={"/login"} />;
};

export default Home;
