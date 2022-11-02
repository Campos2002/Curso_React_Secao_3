import { useState } from "react";

const ListRender = () => {

  const [users] = useState([
    { id: 1, name: 'João', age: 31 },
    { id: 2, name: 'Luiz', age: 28 },
    { id: 3, name: 'Pedro', age: 45 }
  ]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender