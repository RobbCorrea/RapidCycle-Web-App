import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi } from "../../../api/user";
//import ListUsers from "../../../components/Admin/Users/ListUsers";

import "../../../scss/Users.scss";

export default function Users() {
  const [users, setUsers] = useState([]);
  /*   const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false); */
  const token = getAccessTokenApi();

  useEffect(() => {
    getUsersApi(token).then(response => {
      console.log(response);
    });
    /*     getUsersActiveApi(token, true).then(response => {
      setUsersActive(response.users);
    });
    getUsersActiveApi(token, false).then(response => {
      setUsersInactive(response.users);
    });
    setReloadUsers(false); */
  }, [token]);

  return (
    <div className="users">
      {/*       <ListUsers
        usersActive={usersActive}
        usersInactive={usersInactive}
        setReloadUsers={setReloadUsers}
      /> */}
    </div>
  );
}
