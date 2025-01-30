import React, { useContext } from "react";
import { AuthContext } from "../context";

const Profile = () => {
  const { user, handelLogout } = useContext(AuthContext);
  return (
    <div>
      <h1>Name: {user.displayName}</h1>
      <h2>{user.email}</h2>
      <button className="border-2" onClick={handelLogout}>
        LogOut
      </button>
    </div>
  );
};

export default Profile;
