import { useState } from "react";

const ListRender = () => {

  const [users, setUsers] = useState([
    { id: 1, name: 'João', age: 31 },
    { id: 2, name: 'Luiz', age: 28 },
    { id: 3, name: 'Pedro', age: 45 }
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete um Usuário</button>
    </div>
  )
}

export default ListRender