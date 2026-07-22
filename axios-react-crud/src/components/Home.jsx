import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios.get("http://localhost:3005/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });

    setLoading(false);
  }, []);

  return (
    <div className="max-w-xl pb-8 mx-auto px-5 bg-slate-100">
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default Home;
