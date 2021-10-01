import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Account";
import "./Dashboard.css";

const Dashboard = () => {
  const [session, setSession] = useState();

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      <a>Dashboard content ...</a>
    </div>
  );
};
export default Dashboard;