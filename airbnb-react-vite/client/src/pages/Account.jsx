import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";

const Account = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  const { subpage } = useParams();

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (!ready) {
    return "Loading";
  }

  if (redirect) {
    return <Navigate to={redirect}></Navigate>;
  }
  return (
    <div>
      <AccountNav />
      {subpage === undefined && (
        <div className="text-center max-w-lg mx-auto ">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}

      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default Account;
