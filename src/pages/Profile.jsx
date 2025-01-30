import React, { useContext } from "react";
import { AuthContext } from "../context";

const Profile = () => {
  const { user, handelLogout } = useContext(AuthContext);
  return (
    <div className="max-w-sm mx-auto bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center text-white">
      <h2 className="text-xl font-semibold">{user.displayName}</h2>
      <p className="text-gray-400 text-sm">{user.email}</p>
      <button
        onClick={handelLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
