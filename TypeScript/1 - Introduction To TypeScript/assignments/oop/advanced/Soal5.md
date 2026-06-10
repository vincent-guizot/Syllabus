# Exercise 5 — Smart School Management System

## Summary

Ini adalah final challenge Meeting 2.

Peserta harus menggabungkan seluruh konsep OOP lanjutan ke dalam satu sistem.

---

## Outline

Materi yang digunakan:

- Abstract Class
- Inheritance
- Interface
- Encapsulation
- Private Field
- Method Overriding
- Validation

---

## Tasks

Buat abstract class:

`Person`

---

### Properties

- name
- age

---

### Abstract Method

`performRole()`

---

Buat interface:

`Loginable`

Method:

`login()`

---

Buat 3 class turunan:

- Student
- Teacher
- Admin

Semua class harus:

- extends Person
- implements Loginable

---

## Encapsulation Requirement

Setiap class harus memiliki private field:

`#id`

---

Buat method:

`getId()`

---

## Override Method

Setiap class harus memiliki implementasi berbeda untuk:

`performRole()`

---

## Create Object

Buat:

- 1 Student
- 1 Teacher
- 1 Admin

---

## Output

Tampilkan:

- Login process
- Role action
- Private ID via getter

---

## Challenge Rules

Tidak boleh mengakses `#id` secara langsung dari luar class.
