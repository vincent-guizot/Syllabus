# Meeting 1 — TypeScript OOP Fundamental

## Objective

Memahami dasar Object Oriented Programming menggunakan TypeScript.

---

# Learning Outcomes

Setelah pertemuan ini peserta mampu:

- Memahami perbedaan JavaScript dan TypeScript
- Menggunakan type annotation
- Membuat class
- Membuat constructor
- Membuat method
- Membuat object instance
- Membuat aplikasi CLI sederhana

---

# Tools

- Node.js
- TypeScript
- ts-node
- prompt-sync

---

# Installation

```bash
npm init -y
npm install prompt-sync
npm install -D typescript ts-node @types/node @types/prompt-sync
npx tsc --init
```

Run project:

```bash
npx ts-node app.ts
```

---

# Materials

## 1. Introduction to TypeScript

### JavaScript

```js
let name = "Budi";
```

### TypeScript

```ts
let name: string = "Budi";
```

### Why TypeScript?

- Static typing
- Error detection
- Better maintainability
- Professional development standard

---

## 2. Primitive Types

### String

```ts
let name: string = "Budi";
```

### Number

```ts
let age: number = 20;
```

### Boolean

```ts
let isActive: boolean = true;
```

---

## 3. Array Types

```ts
let scores: number[] = [90, 85, 88];
```

---

## 4. Class

```ts
class Student {}
```

---

## 5. Constructor

```ts
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## 6. Methods

```ts
study(): void {
  console.log(`${this.name} is studying`);
}
```

---

## 7. Object Instance

```ts
const student = new Student("Budi", 20);
student.study();
```

---

## 8. Optional Property

```ts
nickname?: string
```

---

# Practice Project

## Student Profile CLI

### Features

- Input student name
- Input age
- Input major
- Display student profile

---

# Assignment

## Create Class: Car

### Properties

- brand: string
- year: number
- color?: string

### Method

- showDetail()

---

# Deliverable

Student Profile CLI using TypeScript + prompt-sync
