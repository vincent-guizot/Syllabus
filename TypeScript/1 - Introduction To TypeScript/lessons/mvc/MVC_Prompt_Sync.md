# Meeting 3 — MVC Architecture with TypeScript

## Objective

Membangun aplikasi CLI terstruktur menggunakan MVC Pattern.

---

# Learning Outcomes

Setelah pertemuan ini peserta mampu:

- Memahami MVC
- Memisahkan concern antar layer
- Membuat aplikasi modular
- Membangun CLI application scalable

---

# MVC Introduction

## Why MVC?

Tanpa MVC:

- Code berantakan
- Sulit maintenance
- Sulit scaling

Dengan MVC:

- Structured
- Maintainable
- Reusable

---

# MVC Components

## Model

Mengelola data

---

## View

Menampilkan output

---

## Controller

Mengatur business logic

---

# Folder Structure

```txt
src/
├── models/
├── views/
├── controllers/
├── interfaces/
└── app.ts
```

---

# Project

## Book Management System

---

# Menu

```txt
1. Add Book
2. Show Books
3. Search Book
4. Delete Book
5. Exit
```

---

# Model Layer

## Book.ts

Responsibilities:

- Define data structure
- Validation

Example:

```ts
export class Book {}
```

---

# Interface Layer

## IBook.ts

```ts
export interface IBook
```

---

# View Layer

## BookView.ts

Methods:

- showMenu()
- showBooks()
- showMessage()

---

# Controller Layer

## BookController.ts

Methods:

- addBook()
- getBooks()
- searchBook()
- deleteBook()

---

# Main App

## app.ts

Responsibilities:

- Menu looping
- User interaction
- Application flow

---

# Final Challenge

## Library Management System

### Features

- Add book
- Edit book
- Delete book
- Search book
- Borrow book
- Return book

---

# Deliverable

Book Management System using TypeScript MVC

---

# Final Outcome

Setelah 3 meeting peserta mampu:

- Menguasai TypeScript OOP
- Menerapkan architecture pattern
- Membuat project modular
- Siap lanjut ke backend / React TypeScript
