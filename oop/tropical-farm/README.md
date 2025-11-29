# Tropical Farm — OOP Exercises

## Summary

Latihan OOP bertema **Tropical Farm** yang berfokus pada inheritance, polymorphism, abstract class, interface, dan factory pattern. Kamu akan membuat 2 parent class dengan total 10 turunan tanaman, lalu membuat factory dan simulasi farm sederhana tanpa loop.

---

## Outline

1. Dua parent class:

   - `FruitPlant`
   - `HerbPlant`

2. Masing-masing punya 5 inheritance:

   - **FruitPlant:** Banana, Mango, Papaya, Pineapple, Coconut
   - **HerbPlant:** Lemongrass, Ginger, Turmeric, Basil, Mint

3. Semua class punya:

   - property: `id`,`name`,`type`,`category`, `growthRate`, `waterNeeds`
   - method: `grow()`, `harvest()`
   - method polymorphic: `specialAbility()` hanya console.log saja

4. Buat **TropicalPlantFactory** dengan banyak method utilitas (5–10 method total).

5. Buat simulasi farm sederhana tanpa loop.

---

## Tasks

### Task 1 — Parent Class

Buat dua parent class: `FruitPlant` dan `HerbPlant` dengan:

- constructor
- method umum: `grow()`, `harvest()`
- method polymorphic: `specialAbility()` (kosong/abstract)

---

### Task 2 — 10 Class Turunan

Buat 10 turunan dari kedua parent class.  
Override `specialAbility()` dengan kemampuan unik (misal: Banana cepat tumbuh, Mint cepat regenerasi).

---

### Task 3 — Polymorphism Test (Tanpa Loop)

Buat beberapa instance:

```js
new Banana();
new Ginger();
new Mint();
new Mango();
```

Panggil:

- `grow()`
- `specialAbility()`
- `harvest()`

---

### Task 4 — TropicalPlantFactory (Wajib 5–10 Method)

Buat **factory class** dengan **minimal 5 dan maksimal 10 method**, misalnya:

**Wajib ada:**

1. `createPlant(name)` → return instance berdasarkan nama.
2. `getAllPlantNames()` → return daftar semua tanaman yang tersedia.
3. `isFruit(name)` → cek apakah nama termasuk fruit.
4. `isHerb(name)` → cek apakah nama termasuk herb.
5. `generateRandomPlant()` → return 1 tanaman random.

**Tambahan opsional (pilih 0–5 untuk total 5–10 method):**

6. `generateMultipleRandomPlants(count)` → return array tanaman random.
7. `createFruit(name)` → khusus buat fruit saja.
8. `createHerb(name)` → khusus buat herb saja.
9. `getPlantCategory(name)` → return `"fruit"` atau `"herb"`.
10. `exists(name)` → return true/false jika plant tersedia.

**Contoh:**

```js
const p = TropicalPlantFactory.createPlant("pineapple");
const random = TropicalPlantFactory.generateRandomPlant();
```

---

### Task 5 — Simulasi Farm (Tanpa Loop)

- buat 3–5 tanaman dari factory
- panggil `grow()` pada tiap tanaman
- panggil `specialAbility()`
- panggil `harvest()`
- tampilkan output console

---

## Extra Challenge

### Challenge 1 — Abstract / Interface

Buat interface `IPlant`:

- `grow()`
- `harvest()`
- `specialAbility()`

Parent class harus implement interface tersebut.

---

### Challenge 2 — Water System

Buat `WaterManager`:

- jika tanaman tidak disiram → `growthRate` turun
- `Mint` dan `Basil` lebih tahan kering

---

## Tips and Trick

- Parent berisi method umum agar turunan tidak duplikasi.
- Polymorphism sangat terlihat pada override `specialAbility()`.
- Factory mempermudah pembuatan banyak object.
- Tambah fitur sedikit demi sedikit.

---

```

```
