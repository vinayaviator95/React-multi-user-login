import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { users } from "../api/UserList";
const Admin = ({ loggedUser }) => {
  const [userData, setUserData] = useState([]);
  useEffect(async () => {
    let allData = [];
    if (loggedUser.type === "admin") {
      const normalUsers = users.filter((user) => user.type !== "admin");
      for (let item of normalUsers) {
        const data = await fetchData(item.id);
        allData.push(...data);
      }
    } else {
      const data = await fetchData(loggedUser.id);
      allData.push(...data);
    }

    setUserData(allData);
  }, []);

  return (
    <div>
      <div className="main-header">
        <div>Techify Task</div>
        <div>
          {loggedUser.type === "admin" ? "Admin" : "User"}: {loggedUser.name}
        </div>
      </div>

      {userData.map((item, index) => {
        return (
          <div className="title-card" key={index}>
            <div className="card-content">
              <div>User:</div>
              <div>{item.userId}</div>
            </div>
            <div className="card-content">
              <div>Title:</div>
              <div>{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
