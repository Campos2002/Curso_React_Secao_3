import { useState } from 'react'

const ManageData = () => {

  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Variável: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar Variável</button>
      </div>
    </div>
  )
};

export default ManageData;