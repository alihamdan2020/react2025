import { useEffect, useState } from "react";

export default function USeEffectApi() {
  const [allUsers, setAllUsers] = useState([]); // original list
  const [users, setUsers] = useState([]);       // filtered list

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setAllUsers(data);
        setUsers(data); // show full list at first
      });
  }, []);

  function handleChange(e) {
    const value = e.target.value.toLowerCase();
    const filter = allUsers.filter((user) =>
    {
    return    user.name.toLowerCase().includes(value)
    }
    );
    setUsers(filter);
  }

  const userList=users.map(user => (
        <p style={{ border: "2px solid green" }} key={user.id}>
          {user.id} - {user.name}
        </p>
      ))

  return (
    <div
      style={{
        border: "2px solid black",
        width: "800px",
        margin: "20px auto",
        padding: "20px"
      }}
    >
      <h1 style={{ textAlign: "center" }}>list of users</h1>
      <p style={{ textAlign: "center" }}>
        <input
          style={{ padding: "5px" }}
          type="text"
          onChange={handleChange}
        />
      </p>
      {userList}
    </div>
  );
}
