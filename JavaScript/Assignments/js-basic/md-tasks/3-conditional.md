# CONDITIONAL

## Durasi

- 5 hari, Di kumpulkan hari jumat malam

## Cara Mengerjakan

1. Clone repository

   ```
   git clone <link repository>
   ```

2. Buat branch masing - masing

   ```
   git checkout -b namabranch
   ```

3. Kerjakan dalam branch masing - masing

4. Add, Commit, Push

5. Push ke dalam branch masing - masing

   ```
   git push origin namabranch
   ```

## Tasks

### 1. Cek apakah Bilangan Ganjil atau Genap

- Buat lah pseudocode dan coding untuk cek apakah suatu bilangan genap atau ganjil

### 2. Status cairan

- Tingkat keasaman atau pH adalah sebuah ukuran untuk mengetahui bahwa suatu cairan adalah bersifat Asam atau Basa

  Jika pH di bawah 7 hingga 0 maka Larutan bersifat Asam
  Jika pH sama dengan 7 maka Larutan bersifat Netral
  Jika pH di atas 7 hingga 14 maka Larutan bersifat Basa

  Buatlah pseudocode dan codingan untuk cek tingkat keasaman.

### 3. Cek sebuah angka apakah kelipatan 3 dan 5

- Buatlah pseudocode dan coding untuk cek angka apakah kelipatan 3 dan 5

  ```js
  // test case

  15; // true
  8; // false
  3; // false
  ```

### 4. Harbolnas

- Sebuah website bernama "Maju Makmur", bergerak di bidang material. Memberikan diskon atau cashback dengan menggunakan promo code coupon tertentu. Buatlah pseudocode dan coding.

  1.  Promo code "Discount10%"

  - Jika pembelian di atas atau sama dengan 500000, maka akan diskon 10%
  - Jika pembelian di antara 300000 sd 500000, maka akan diskon 5%
  - Jika pembelian di bawah 300000, maka akan diskon 2.5%

  2.  Promo code "DiscountHarbolnas"

  - Jika pembelian di atas atau sama dengan 250000, maka akan diskon 15%
  - Jika pembelian di bawah 250000, maka akan diskon 0%

  Buatlah codingan dari persoalan tsb.

  Contoh:
  Total harga = 750000
  Menggunakan promo code "Discount10%",

  Result:
  Total yang harus di bayarkan adalah Rp. 675000.

### 5. Sistem jual beli mobil bekas

- PT Cartwright adalah sebuah perusahaan yang bergerak di bidang penjualan dan pembelian mobil bekas yang ber lokasi di daerah Jabodetabek. PT Cartwright membutuhkan sebuah aplikasi untuk mengecek kualitas dari mobil bekas yang akan di beli. Berikut adalah ketentuan nya:

1. Mobil bertipe LCGC, dengan syarat berikut:

   - Sudah bayar pajak dan Plat Genap, maka Layak Jual
   - Sudah bayar pajak dan Plat Ganjil, maka Layak Jual
   - Pajak tidak bayar, maka Tidak Layak Jual

2. Mobil bertipe MPV,

   - Sudah bayar pajak dan Plat Genap, maka Layak jual
   - Sudah bayar pajak dan Plat Ganjil, maka "Layak jual bersyarat"
   - Pajak tidak bayar, dapat Layak Jual jika dengan syarat:
     - Plat Genap, maka "Layak jual bersyarat"
     - Plat Ganjil, maka "Layak jual dengan Harga di Bawah rata2"

3. Mobil bertipe SPV,

   - Sudah bayar pajak, maka Layak Jual
   - Pajak tidak bayar, dapat Layak jual jika dengan syarat:
     - Mobil merk Honda dan Toyota, Layak jual
     - Mobil merk Daihatsu, maka "Layak jual bersyarat"
     - Mobil merk lain, maka "Layak jual dengan Harga di bawah rata2"

- Berikan solusi untuk analisis di atas di mulai dari Pseudocode lalu coding

> # SELAMAT BEKERJA
