# rental-car-website

Website rental mobil dengan server Node.js sebagai challenge dalam fullstack web develompent course Binar Academy. Website memiliki aplikasi dengan fungsi search mobil sesuai fungsi filter dengan mengolah data mobil yang telah disediakan oleh Binar Academy.

# Notes untuk Penilaian

**Lokasi File Penting:**  

Binar.js, Car.js, App.js *(App.js memiliki nama SearchCarApp.js)*

    public/script/components
    
Server  

    server/index.js  
    
Kelas abstract Component dan turunannya DropdownInput  

    public/script/components

# Run Aplikasi

    npm start
    
# Rute Aplikasi

Landing Page

    http://localhost:8000/
    
Search Car Page

    http://localhost:8000/cars

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
