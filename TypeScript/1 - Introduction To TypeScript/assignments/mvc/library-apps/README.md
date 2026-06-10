# Exercise 2 — Library Apps

## Summary

Ini adalah final challenge Meeting 3.

Peserta akan membangun aplikasi Library Management menggunakan kombinasi:

- MVC Architecture
- Inheritance
- Abstract Class
- Interface
- Encapsulation

Latihan ini menggabungkan seluruh materi dari Meeting 1 sampai Meeting 3.

---

## Outline

Materi yang digunakan:

- MVC
- Abstract Class
- Inheritance
- Interface
- Encapsulation
- Private Field
- TypeScript
- prompt-sync

---

## Tasks

Buat aplikasi CLI bernama **Library Apps**.

---

## Folder Structure

```txt
src/
├── models/
│   ├── LibraryItem.ts
│   ├── Book.ts
│   ├── Magazine.ts
│   └── Journal.ts
│
├── interfaces/
│   └── Borrowable.ts
│
├── views/
│   └── LibraryView.ts
│
├── controllers/
│   └── LibraryController.ts
│
└── app.ts
```

---

## Abstract Class

Buat abstract class:

`LibraryItem`

### Properties

- id
- title
- author

---

### Abstract Method

`showDetail()`

---

## Interface

Buat interface:

`Borrowable`

Method:

- borrow()
- returnItem()

---

## Encapsulation

Gunakan private field:

`#isBorrowed`

Buat getter:

`getBorrowStatus()`

---

## Inheritance

Buat class turunan:

### Book

Tambahan:

- totalPages

---

### Magazine

Tambahan:

- edition

---

### Journal

Tambahan:

- publicationYear

---

Semua class harus:

- extends LibraryItem
- implements Borrowable

---

## View

Buat class `LibraryView`.

Method:

- showMenu()
- showItems()
- showMessage()

---

## Controller

Buat class `LibraryController`.

Method:

- addItem()
- showItems()
- searchItem()
- deleteItem()
- borrowItem()
- returnItem()

---

## Main App Menu

```txt
1. Add Item
2. Show Items
3. Search Item
4. Borrow Item
5. Return Item
6. Delete Item
7. Exit
```

---

## Features

### Add Item

User memilih jenis item:

- Book
- Magazine
- Journal

---

### Borrow Item

Ubah status item menjadi borrowed.

---

### Return Item

Ubah status item menjadi available.

---

### Search Item

Cari berdasarkan title.

---

### Delete Item

Hapus item berdasarkan ID.

---

## Challenge Rules

- Tidak boleh mengakses `#isBorrowed` secara langsung dari luar class
- Gunakan getter
- Setiap subclass wajib override `showDetail()`

---

## Expected Output

Aplikasi Library Management modular dengan implementasi penuh seluruh pilar OOP dan MVC.
