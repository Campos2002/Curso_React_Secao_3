const ShowUserName = (props) => {

  return (
    <div>
      <h2>Nome do usuário: {props.name}</h2>
      <h2>Idade: {props.age}</h2>
      <h2>Profissão: {props.profession}</h2>
    </div>
  );
};

export default ShowUserName