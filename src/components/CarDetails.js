
const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h3>Detalhes do Carro</h3>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar === true ? <p>Este carro é novo.</p> : <p>Este carro é usado.</p>}
    </div>
  );
};

export default CarDetails