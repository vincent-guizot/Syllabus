# Library Application

## Learnning Competencies

## Summary

Kembangkan sebuah Web tentang `Books Store`, yang menggunakan teknologi berikut:

a. Node.js + Express.js

b. Sequelize

c. DBMS : Pg

d. EJS

e. Bootstrap

## Tasks

### Tasks 1

Aplikasi memiliki 3 table:

a. `Authors` yang berisi :

| Field     | Data Type    | Description |
| --------- | ------------ | ----------- |
| id        | integer (PK) | Increment   |
| pen_name  | string       | NOT NULL    |
| age       | integer      | NOT NULL    |
| ProfileId | integer      | Foreign Key |

b. `Profile` yang berisi :

| Field     | Data Type    | Description |
| --------- | ------------ | ----------- |
| id        | integer (PK) | Increment   |
| full_name | string       | NOT NULL    |
| address   | text         | NOT NULL    |
| city      | string       | NOT NULL    |
| image     | string       | NOT NULL    |

c. `Books` yang berisi :

| Field    | Data Type    | Description |
| -------- | ------------ | ----------- |
| id       | integer (PK) | Increment   |
| name     | string       | NOT NULL    |
| synopsis | string       | NOT NULL    |
| pages    | integer      | NOT NULL    |
| price    | integer      | NOT NULL    |
| image    | strng        | NOT NULL    |

| AuthorId | integer | Foreign Key |
| PublisherId | integer | Foreign Key |
| GenreId | integer | Foreign Key |

d. `Genres` yang berisi:

| Field | Data Type    | Description |
| ----- | ------------ | ----------- |
| Id    | integer (PK) | Increment   |
| name  | string       | NOT NULL    |

e. `Publishers` yang berisi:

| Field    | Data Type    | Description |
| -------- | ------------ | ----------- |
| id       | integer (PK) | Increment   |
| name     | string       | NOT NULL    |
| location | string       | NOT NULL    |
| image    | string       | NOT NULL    |

Buatlah ke 5 table tersebut, jika dirasa ada yang kurang dari _field_ nya boleh di t ambahkan

### Task 2

Aplikasikan _endpoints_ yang di berikan :

| method | Endpoints                   | Descritption                              |
| ------ | --------------------------- | ----------------------------------------- |
| GET    | /                           | Berisi Home                               |
| GET    | /authors                    | Berisi data dari `Authors` dan `Profiles` |
| GET    | /books                      | Berisi data dari `Books`                  |
| GET    | /publishers                 | Berisi data dari `Publishers`             |
| GET    | /genres                     | Berisi data dari `Genres`                 |
| GET    | /authors/details/:id        | Berisi keterangan `Author` dari _id_      |
| GET    | /books/synopsis/:id         | Berisi keterangan `Books` dari _id_       |
| GET    | /publishers/information/:id | Berisi keterangan `Publisher` dari _id_   |
| GET    | /genres/:id/books           | Berisi keterangan `Genrres` dari _id_     |
| POST   | /authors/add                | Menambahkan data                          |
| POST   | /books/add                  | Menambahkan data                          |
| POST   | /publishers/add             | Menambahkan data                          |
| POST   | /gennres/add                | Menambahkan data                          |

### Task 3

Aplikasi kan views dengan menggunakan _EJS_, buatlah pages berikut ini:

1. Home pages

   - Endpoints: `/`
   - Keterangan :

     - Menampilkan list `Books` dan `Authors`.
     - Terdapat menu navbar : Authors, Publishers, Genres

2. Books page

   - Endpoints : `/books`
