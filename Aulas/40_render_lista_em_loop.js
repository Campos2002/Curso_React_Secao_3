// No app.js

const cars = [
  { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
  { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343 },
  { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
];

return (
  <div className="App">
    {/* LOOP EM ARRAY DE OBJETOS */}
    {cars.map((car) => (
      <CarDetails
        brand={car.brand}
        color={car.color}
        newCar={car.newCar}
        km={car.km}
      />
    ))}
  </div>
);
