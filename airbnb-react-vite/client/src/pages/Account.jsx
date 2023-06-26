import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Account = () => {
  const { user } = useContext(UserContext);
  return <div>Account {user.name}</div>;
};

export default Account;
