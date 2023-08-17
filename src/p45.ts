// p45

interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...extras: any[]): CarInfo {
    const car: CarInfo = { manufacturer, model };
  
    for (let i = 0; i < extras.length; i += 2) {
      const key = extras[i];
      const value = extras[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  const car1 = createCar("Toyota", "Corolla", "color", "blue", "year", 2022);
  const car2 = createCar("Honda", "Civic", "color", "red", "optionalFeature", "sunroof");
  
  console.log(car1);
  console.log(car2);