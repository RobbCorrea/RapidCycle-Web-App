import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersActiveApi } from "../../../api/user";
import ListUsers from "../../../components/Collector/Users/ListUsers";

import "../../../scss/Users.scss";

export default function Users() {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  /* const [reloadUsers, setReloadUsers] = useState(false); */
  const token = getAccessTokenApi();

  /* console.log("Active users: ", usersActive);
  console.log("Inactive users: ", usersInactive); */

  useEffect(() => {
    getUsersActiveApi(token, true).then(response => {
      setUsersActive(response.users);
    });
    getUsersActiveApi(token, false).then(response => {
      setUsersInactive(response.users);
    });
    //setReloadUsers(false);
  }, [token]);

  return (
    <div className="users">
      <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
    </div>
  );
}
