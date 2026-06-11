# Fruit Veggies

## SUMMARY

Seorang pengusaha bernama Vincent mempunyai beberapa perkebunan buah dan sayuran. Tibalah hari di mana akan panen buah dan sayuran, buah yang dimiliki memiliki 3 jenis dan sayuran yang dimiliki juga 3 jenis. Masing-masing jenis memliki harga jual yang berbeda dan akan di panen dalam keranjang dan akan di jual.

## Outline

1. Peserta dapat paham tentang OOP
2. Peserta dapat mengaplikasikan teori OOP

## Task 1

Peserta ditugas untuk membuat `class` utama :

a. `Fruit`

Memiliki attributes berikut ini:

| Key         | Description                       |
| ----------- | --------------------------------- |
| id          | Nomor khusus tiap buah, increment |
| name        | Nama dari buah                    |
| type        | Jenis buah                        |
| price       | Harga buah                        |
| amount      | total buah yang di petik          |
| harvestedAt | waktu ketika di panen             |

b. `Vegetable`

Memiliki attributes berikut ini:

| Key         | Description                        |
| ----------- | ---------------------------------- |
| id          | Nomor khusus tiap sayur, increment |
| name        | Nama dari sayur                    |
| type        | Jenis sayur                        |
| price       | Harga sayur                        |
| amount      | total sayur yang di petik          |
| harvestedAt | waktu ketika di panen              |

- amount : random antara 1 - 100
- harvestedAt : menggunakan new Date()

## Task 2

Peserta membuat `inheritance class`:

a. `Apple`, `Orange`, dan `Banana` dari class utama `Fruit`

b. `Potato`, `Carrot`, dan `Cabbage` dari class utama `Vegetable`

## Task 3

Peserta membuat kelas factory `Warehouse` dengan attribute dan method berikut:

### Attributes

---

- carts : berisi buah dan sayuran hasil panen
- totalPrice : berisi total dari seluruh harga buah dan sayuran yang di jual
  panen.
- shippedGoods : berisi buah dan sayuran yang sudah di jual

Contoh isi dari _carts_:

```js
/*
[
    {
        id: 1,
        name: 'NZ Apple Sweet',
        type: 'Apple',
        price: 150000,
        amount: 10,
        harvestedAT: new Date()
    },
    {
        id: 2,
        name: 'Ponkan Mandarin',
        type: 'Orange',
        price: 100000,
        amount: 5,
        harvestedAt: new Date()
    }
]
*/
```

### Methods:

---

- harvest : memetik buah dan sayuran dan memasukan ke dalam cart.

```js
  harvest(name,type,price){
      // code here
  }

  // Feedback
  // "NZ Apple Sweet" has been harvested and have 10 fruits.
```

- ship : mengeluarkan buah dan sayuran dari cart dan mengirim ke penjualan

```js
  ship(id){
      // code here
  }

  // Feedback
  // "NZ Apple Sweet" has been shipped.

  // Feedback jika tidak ada
  // Id 1 is not in the cart.

  // Ketika sudah di jual harga buah atau sayur akan di total kan ke dalam key `totalPrice` dan dihapus dari carts lalu di pindah kan ke shippedGoods.
```

- showCarts: menampilkan seluruh buah dan sayuran yang ada dalam carts

```js
  showCarts(){
    // code here
  }
  /*
  There are 2 carts, which are:
  1. NZ Apple Sweet - Rp. 150000
  2. Ponkan Mandarin - Rp. 100000

  // Jika tidak ada carts
  There isn't any cart.
  */
```

- getRandomSample : mengambil salah 1 produk dari carts secara random

```js
  getRandomSample(){
    // code here
  }

  /*
  Apple - NZ Apple Sweet Rp. 150000

  // Jika tidak ada carts
  There is no product to sample
  */
```

- showFruits : menampilkan semua buah

```js
  showFruits(){
    // code here
  }

  /*
  Fruits in the cart:
  1. NZ Sweet Apple - Rp. 150000
  2. Cherry - Rp. 75000

  // Jika tidak ada fruit
  There is no fruit
  */
```

- showVeggies : menampilkan semua sayuran

```js
  showVeggies(){
    // code here
  }

  /*
  Veggies in the cart:
  1. NZ Sweet Apple - Rp. 150000
  2. Cherry - Rp. 75000

  // Jika tidak ada fruit
  There is no fruit
  */
```

## Task 4

Pisahkan file menjadi beberapa: `Warehouse.js`, `app.js`, `Fruit.js`, `Vegetable.js`, `utilities.js`

## Task 5 (Extra Challenge)

- rupiahFormatter(price)

```js
const rupiahFormatter = (price) => {
  // code here
};

// Rp. 150.000
```

- getMultipleSamples(total)

```js
getMultipleSamples(total){
  // code here
}

// Jika tidak ada carts
// There is no product in cart

// Random Samples:
// 1. Cavendish - Rp. 100000 , Banana
// 2. Jakarta Carrot - Rp. 50000, Carrot
```
