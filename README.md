# rental-car-website

Website rental mobil dengan server Node.js sebagai challenge dalam fullstack web develompent course Binar Academy.

# Figma Design

https://www.figma.com/file/vpEJOzXUNdQn7pSQEwfXhs/BCR---Binar-Car-Rental-(Copy)?node-id=2%3A703

# `Binar` class

Class ini berisi 1 static method saja, yang berfungsi untuk mengambil data mobil dari internet.

```typescript
interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

interface Binar {
  listCars(filterer: (car: Car) => boolean): Array<Car>;
}
```

Method `listCars` ini akan menerima fungsi yang mana harus mengembalikan `boolean` sebagai nilainya.
Fungsi ini akan dijalankan untuk masing-masing item di dalam list of cars, yang mana jika nilainya `true`,
maka akan ditampilkan di dalam list tersebut.
