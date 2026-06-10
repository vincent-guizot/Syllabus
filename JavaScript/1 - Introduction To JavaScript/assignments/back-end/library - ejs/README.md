# Library Application

## Learning Competencies

- Mampu mengembangkan aplikasi CRUD dengan Node.js + Express.js
- Mampu menggunakan Sequelize ORM
- Mampu membuat relasi antar tabel (One-to-One, One-to-Many)
- Mampu membuat tampilan menggunakan EJS + Bootstrap
- Mampu membuat routing dan controller sesuai endpoint

---

## Summary

Kembangkan sebuah aplikasi Web **Books Store** menggunakan teknologi berikut:

- **Node.js + Express.js**
- **Sequelize**
- **PostgreSQL**
- **EJS**
- **Bootstrap**

---

# Tasks

---

# TASK 1 — DATABASE DESIGN

Aplikasi memiliki **5 tabel** berikut:

---

## 1. Authors

| Field     | Data Type    | Description            |
| --------- | ------------ | ---------------------- |
| id        | integer (PK) | Auto Increment         |
| pen_name  | string       | NOT NULL               |
| age       | integer      | NOT NULL               |
| ProfileId | integer (FK) | Foreign Key to Profile |

**Relasi:**

- Author `belongsTo` Profile
- Author `hasMany` Books

---

## 2. Profile

| Field     | Data Type    | Description    |
| --------- | ------------ | -------------- |
| id        | integer (PK) | Auto Increment |
| full_name | string       | NOT NULL       |
| address   | text         | NOT NULL       |
| city      | string       | NOT NULL       |
| image     | string       | NOT NULL       |

**Relasi:**

- Profile `hasOne` Author

---

## 3. Books

| Field       | Data Type    | Description    |
| ----------- | ------------ | -------------- |
| id          | integer (PK) | Auto Increment |
| name        | string       | NOT NULL       |
| synopsis    | string       | NOT NULL       |
| pages       | integer      | NOT NULL       |
| price       | integer      | NOT NULL       |
| image       | string       | NOT NULL       |
| AuthorId    | integer (FK) | Foreign Key    |
| PublisherId | integer (FK) | Foreign Key    |
| GenreId     | integer (FK) | Foreign Key    |

**Relasi:**

- Books `belongsTo` Author
- Books `belongsTo` Publisher
- Books `belongsTo` Genre

---

## 4. Genres

| Field | Data Type    | Description    |
| ----- | ------------ | -------------- |
| id    | integer (PK) | Auto Increment |
| name  | string       | NOT NULL       |

**Relasi:**

- Genre `hasMany` Books

---

## 5. Publishers

| Field    | Data Type    | Description    |
| -------- | ------------ | -------------- |
| id       | integer (PK) | Auto Increment |
| name     | string       | NOT NULL       |
| location | string       | NOT NULL       |
| image    | string       | NOT NULL       |

**Relasi:**

- Publisher `hasMany` Books

---

# TASK 2 — ROUTING / ENDPOINTS

Implementasikan semua endpoints berikut:

| Method | Endpoint                    | Description                                  |
| ------ | --------------------------- | -------------------------------------------- |
| GET    | /                           | Home — list Books & Authors                  |
| GET    | /authors                    | Menampilkan Authors beserta Profile          |
| GET    | /books                      | Menampilkan semua Books                      |
| GET    | /publishers                 | Menampilkan semua Publishers                 |
| GET    | /genres                     | Menampilkan semua Genres                     |
| GET    | /authors/details/:id        | Detail 1 Author berdasarkan ID               |
| GET    | /books/synopsis/:id         | Detail 1 Book berdasarkan ID                 |
| GET    | /publishers/information/:id | Detail 1 Publisher berdasarkan ID            |
| GET    | /genres/:id/books           | Menampilkan semua Books dalam Genre tertentu |
| POST   | /authors/add                | Menambah Author                              |
| POST   | /books/add                  | Menambah Book                                |
| POST   | /publishers/add             | Menambah Publisher                           |
| POST   | /genres/add                 | Menambah Genre                               |

---

# TASK 3 — EJS VIEWS

Buat tampilan menggunakan **EJS + Bootstrap**.

---

## 1. Home Page

- Endpoint: `/`
- Isi halaman:
  - Menampilkan list **Books**
  - Menampilkan list **Authors**
  - Navbar berisi menu:
    - Authors
    - Publishers
    - Genres

---

## 2. Books Page

- Endpoint: `/books`
- Isi halaman:
  - Menampilkan daftar semua books
  - Tombol menuju detail (synopsis)
  - Tombol Add Book (form)

---

## 3. Authors Page

- Endpoint: `/authors`
- Isi halaman:
  - Menampilkan Author beserta Profile
  - Tombol menuju detail
  - Tombol Add Author (form)

---

## 4. Publishers Page

- Endpoint: `/publishers`
- Isi halaman:
  - Menampilkan semua Publishers
  - Tombol menu detail
  - Tombol Add Publisher

---

## 5. Genres Page

- Endpoint: `/genres`
- Isi halaman:
  - Menampilkan daftar Genres
  - Tombol lihat semua buku pada genre tsb
  - Tombol Add Genre

---

## 6. Detail Pages (EJS)

### a. Authors Detail

- Endpoint: `/authors/details/:id`
- Menampilkan:
  - Author pen_name, age
  - Profile full_name, address, city, image
  - Books yang ditulis oleh Author tersebut

### b. Books Synopsis

- Endpoint: `/books/synopsis/:id`
- Menampilkan:
  - Nama buku
  - Gambar
  - Synopsis
  - Harga, jumlah halaman
  - Author, Publisher, Genre

### c. Publishers Detail

- Endpoint: `/publishers/information/:id`
- Menampilkan:
  - Data publisher lengkap
  - Semua buku yang diterbitkan

### d. Genre Books

- Endpoint: `/genres/:id/books`
- Menampilkan:
  - Nama Genre
  - List Books dalam Genre tersebut

---

# FINAL OUTPUT

Hasil akhir berupa aplikasi lengkap:

- Struktur MVC
- Sequelize model + migrate + seed
- Routing lengkap
- Controller lengkap
- EJS pages rapi
- Bootstrap untuk tampilan
