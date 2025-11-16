# M-PLOYEE Apps

## Learning Competencies

1. Students understands about WEB API
2. Students can apply REST API Architecture
3. Students can apply MVC concept in WEB API
4. Students understands how to use Postman
5. Students able to make API Documentation

---

## Summary

**M-PLOYEE** adalah aplikasi Human Resource modern yang dirancang untuk membantu perusahaan mengelola data karyawan, posisi pekerjaan, struktur perusahaan, hingga fasilitas yang diterima karyawan. Melalui aplikasi ini, mahasiswa dapat mempelajari bagaimana membangun REST API profesional dengan arsitektur **MVC**, mengelola database relasional menggunakan **PostgreSQL**, serta membuat dokumentasi API seperti aplikasi nyata di dunia kerja.

Aplikasi ini mencakup lima entitas utama:

- **Employees** → data karyawan
- **Jobs** → posisi pekerjaan
- **Employers** → perusahaan / organisasi
- **Departments** → divisi tempat employee bekerja
- **Benefits** → fasilitas seperti BPJS, asuransi, bonus, dll

Semua data dikelola melalui API berbasis **Express.js**.

---

## Tasks

> Untuk mengerjakan lebih baik buat dari awal dan jangan copy paste ya.

---

# TASK 1 — DATABASE TABLES (5 Tabel)

Buat 5 tabel berikut:

---

## 1. Employees

| key           | type                          | keterangan        |
| ------------- | ----------------------------- | ----------------- |
| id            | SERIAL                        | primary key       |
| name          | VARCHAR(100)                  | NOT NULL          |
| age           | INTEGER                       | CHECK (age >= 18) |
| city          | VARCHAR(100)                  | NOT NULL          |
| email         | VARCHAR(150) UNIQUE           | NOT NULL          |
| phone         | VARCHAR(20)                   |                   |
| employer_id   | INTEGER (FK → Employers.id)   | NOT NULL          |
| job_id        | INTEGER (FK → Jobs.id)        | NOT NULL          |
| department_id | INTEGER (FK → Departments.id) | NOT NULL          |

---

## 2. Jobs

| key        | type         | keterangan                       |
| ---------- | ------------ | -------------------------------- |
| id         | SERIAL       | primary key                      |
| name       | VARCHAR(100) | NOT NULL                         |
| category   | VARCHAR(50)  | NOT NULL                         |
| max_salary | INTEGER      | NOT NULL CHECK (max_salary > 0)  |
| min_salary | INTEGER      | NOT NULL CHECK (min_salary >= 0) |

---

## 3. Employers

| key            | type         | keterangan  |
| -------------- | ------------ | ----------- |
| id             | SERIAL       | primary key |
| name           | VARCHAR(150) | NOT NULL    |
| type           | VARCHAR(50)  | NOT NULL    |
| city           | VARCHAR(100) | NOT NULL    |
| total_employee | INTEGER      | DEFAULT 0   |

---

## 4. Departments (NEW)

| key         | type                        | keterangan  |
| ----------- | --------------------------- | ----------- |
| id          | SERIAL                      | primary key |
| name        | VARCHAR(100)                | NOT NULL    |
| floor       | INTEGER                     |             |
| employer_id | INTEGER (FK → Employers.id) | NOT NULL    |

---

## 5. Benefits (NEW)

| key         | type         | keterangan  |
| ----------- | ------------ | ----------- |
| id          | SERIAL       | primary key |
| name        | VARCHAR(100) | NOT NULL    |
| description | TEXT         |             |

---

# TASK 1B — RELATIONSHIPS (HARUS DIBUAT DI DATABASE)

Aplikasikan relasi berikut:

### 1️⃣ One to Many

- **Employer → Employees**  
  Satu employer memiliki banyak employee.
- **Job → Employees**  
  Satu job memiliki banyak employee.
- **Employer → Departments**  
  Satu employer memiliki banyak department.

### 2️⃣ One to One

- **Employee → BenefitProfile** _(optional jika ingin menambah bonus table lain)_  
  Tetapi untuk tugas ini boleh di-skip.

### 3️⃣ Many to Many

- **Employee ↔ Benefits**  
  (Satu employee bisa punya banyak benefit, satu benefit bisa dipakai banyak employee)  
  Buat tabel pivot:

#### Table: EmployeeBenefits

| key         | type         |
| ----------- | ------------ |
| employee_id | INTEGER (FK) |
| benefit_id  | INTEGER (FK) |

Primary key kombinasi: _(employee_id, benefit_id)_

---

# TASK 2 — ERD

Buat ERD berdasarkan tabel & relasi di atas:

Minimal berisi relasi berikut:

1. Employer **1 — N** Employees
2. Job **1 — N** Employees
3. Employer **1 — N** Departments
4. Employees **M — N** Benefits
5. Department **1 — N** Employees

Silakan buat di **dbdiagram.io**, lalu export PNG / PDF dan masukkan ke folder **docs/**.

---

# TASK 3 — ROUTES (ENDPOINTS)

Buat routes berikut untuk setiap resource:

| Method | Endpoints             | Keterangan                    |
| ------ | --------------------- | ----------------------------- |
| GET    | /                     | Home page API                 |
| GET    | /employees            | Menampilkan semua employees   |
| GET    | /jobs                 | Menampilkan semua jobs        |
| GET    | /employers            | Menampilkan semua employers   |
| GET    | /departments          | Menampilkan semua departments |
| GET    | /benefits             | Menampilkan semua benefits    |
| POST   | /employees/create     | Menambah employee             |
| POST   | /jobs/create          | Menambah job                  |
| POST   | /employers/create     | Menambah employer             |
| POST   | /departments/create   | Menambah department           |
| POST   | /benefits/create      | Menambah benefit              |
| GET    | /employees/delete/:id | Hapus employee                |
| GET    | /jobs/delete/:id      | Hapus job                     |
| GET    | /employers/delete/:id | Hapus employer                |
| POST   | /employees/update/:id | Update employee               |
| POST   | /jobs/update/:id      | Update job                    |
| POST   | /employers/update/:id | Update employer               |

---

## NOTE

A. Gunakan Postman untuk test API  
B. Perhatikan penamaan variabel, indentation, & struktur MVC  
C. Buat respon JSON yang rapi dan konsisten
