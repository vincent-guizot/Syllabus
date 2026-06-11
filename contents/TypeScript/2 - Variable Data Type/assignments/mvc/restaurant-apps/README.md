# Exercise 1 — Restaurant Apps

## Summary

Pada latihan ini peserta akan membangun aplikasi Restaurant Management berbasis CLI menggunakan arsitektur MVC.

Fokus utama latihan ini adalah memahami bagaimana memisahkan tanggung jawab antar layer:

- Model
- View
- Controller

Latihan ini tidak menggunakan pilar OOP lanjutan seperti inheritance, interface, abstract class, maupun encapsulation kompleks.

Tujuannya agar peserta fokus memahami flow MVC terlebih dahulu.

---

## Outline

Materi yang digunakan:

- MVC Architecture
- Modular File Structure
- Class
- TypeScript
- prompt-sync
- CLI Menu Loop

---

## Tasks

Buat aplikasi CLI bernama **Restaurant Apps**.

---

## Folder Structure

```txt
src/
├── models/
│   └── Menu.ts
│
├── views/
│   └── RestaurantView.ts
│
├── controllers/
│   └── RestaurantController.ts
│
└── app.ts
```

---

## Model

Buat class `Menu`.

### Properties

- id → number
- name → string
- price → number
- category → string

---

## View

Buat class `RestaurantView`.

Method:

- showMenu()
- showAllMenus()
- showMessage()

---

## Controller

Buat class `RestaurantController`.

Method:

- addMenu()
- getMenus()
- searchMenu()
- deleteMenu()

---

## Main App

Gunakan `prompt-sync`.

Buat looping menu:

```txt
1. Add Menu
2. Show Menus
3. Search Menu
4. Delete Menu
5. Exit
```

---

## Features

### Add Menu

User input:

- menu name
- price
- category

---

### Show Menus

Tampilkan seluruh menu.

---

### Search Menu

Cari menu berdasarkan nama.

---

### Delete Menu

Hapus menu berdasarkan ID.

---

## Expected Output

Aplikasi restaurant management yang terstruktur menggunakan MVC.
