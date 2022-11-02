import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false)
  const [name] = useState('João');

  return <div>
    <h1>Isso será exibido?</h1>
    {!x && <p>Se x for true, sim!</p>}
    {name === 'João' ? <p>Sim!</p> : <p>Não!</p>}
  </div>;
};

export default ConditionalRender