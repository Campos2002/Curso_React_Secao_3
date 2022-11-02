import './App.css';
import { useState } from 'react';
import ImgAssets from './assets/imgAssets.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = 'João';

  const [userName] = useState('Guilherme');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log('Evento do componente pai!')
  };

  const [message, setMessage] = useState('A msg será exbida aqui')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* IMAGENS EM PUBLIC */}
      <div className='img'>
        <img src="/imgs/imgPublic.jpg" alt="Paisagem" />
      </div>
      {/* IMAGENS EM ASSETS */}
      <div className='img'>
        <img src={ImgAssets} alt="" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* PROPS */}
        <ShowUserName
          name={name}
          age='23'
          father={userName}
          profession='Programador'
        />
        {/* DESTRUCTURING */}
        <CarDetails
          key={cars.id}
          brand='Volkswagen'
          km={100000}
          color='Azul'
          newCar={false}
        />
        {/* REAPROVEITAMENTO */}
        <CarDetails
          key={cars.id}
          brand='Ford'
          km={0}
          color='Vermelho'
          newCar={true}
        />
        <CarDetails
          key={cars.id}
          brand='Fiat'
          km={45000}
          color='Preto'
          newCar={false}
        />
        {/* LOOP EM ARRAY DE OBJETOS */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            newCar={car.newCar}
            km={car.km}
          />
        ))}
        {/* FRAGMENTS */}
        <Fragments
          propFragment='teste'
        />
        {/* CHILDREN PROP */}
        <Container myValue={12}>
          <p>Este é o container no App.js</p>
        </Container>
        {/* FUNÇÃO COMO PROP */}
        <ExecuteFunction myFunction={showMessage} />
        {/* STATE LIFT */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
    </div>
  );
}

export default App;
