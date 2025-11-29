# Explanation — Tropical Farm OOP Attributes (No Code)

## 1. growthRate

**Apa itu?**  
Kecepatan tanaman bertumbuh setiap hari.

**Contoh:**

- Banana → growthRate **8** (sangat cepat)
- Coconut → growthRate **4** (lebih lambat)

**Makna:**  
Kalau Banana ditanam 3 hari, progresnya lebih besar dibanding Coconut.

---

## 2. waterNeeds

**Apa itu?**  
Jumlah air yang dibutuhkan tanaman agar tumbuh optimal.

**Contoh:**

- Mint → waterNeeds **7** (butuh air banyak)
- Pineapple → waterNeeds **3** (tahan kering)

**Makna:**  
Kalau tidak disiram sesuai waterNeeds, tanaman tumbuh lebih lambat.

---

## 3. grow()

**Apa itu?**  
Aksi tanaman bertumbuh.  
Menggambarkan bahwa tanaman bertambah tinggi, besar, atau matang.

**Contoh nyata:**

- Banana tumbuh 8% setiap hari.
- Coconut tumbuh 4% setiap hari.
- Mint tumbuh 6% setiap hari.

Ketika grow() dipanggil, artinya tanaman melewati 1 “hari pertumbuhan”.

---

## 4. specialAbility()

**Apa itu?**  
Kemampuan unik tiap tanaman sesuai karakter aslinya.  
Digunakan untuk **polymorphism**—tiap subclass punya versi berbeda.

**Contoh kemampuan tanaman:**

- **Banana** → sangat cepat tumbuh di cuaca lembap.
- **Coconut** → kuat terhadap tanah asin.
- **Ginger** → aroma kuat yang mengusir serangga.
- **Mint** → bisa tumbuh kembali dengan sangat cepat setelah dipanen.

**Makna:**  
Walaupun semua tanaman punya specialAbility(), isi kemampuannya berbeda-beda.

---

## Kesimpulan Singkat

- **growthRate** → seberapa cepat tanaman tumbuh
- **waterNeeds** → seberapa banyak air yang dibutuhkan
- **grow()** → proses pertumbuhan tanaman
- **specialAbility()** → kemampuan unik tiap tanaman (polymorphism)

```

```
