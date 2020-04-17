//Provider for creating functions to refresh and create users.
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default () => useContext(AuthContext);
