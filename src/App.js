import React, { useState, useEffect } from "react";
import API from "./utils/Api";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then(({ data }) => {
      setUsers(data.results);
      setAllUsers(data.results);
    });
  }, []);

  const submitText = (e) => {
    e.preventDefault();
  };

  const search = (event) => {
    const searchValue = event.target.value;

    const newUsers = allUsers.filter((user) => {
      if (user.name.first.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    });
    setUsers(newUsers);
  };

  const sort = () => {
    const sortedUsers = users.sort((a, b) => {
      if (a.dob.age < b.dob.age) {
        return -1;
      }
      if (a.dob.age > b.dob.age) {
        return 1;
      }
      return 0;
    });
    setUsers([...sortedUsers]);
  };

  console.log(users);

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0 text-center">
          <h1>Employee Directory</h1>
          <input onChange={search} />
          <button onClick={submitText}>Submit</button>
          <button onClick={sort}> Sort by age</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id.value}>
                <th>{user.name.first}</th>
                <th>{user.name.last}</th>
                <th>{user.email}</th>
                <th>{user.phone}</th>
                <th>{user.dob.age}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
