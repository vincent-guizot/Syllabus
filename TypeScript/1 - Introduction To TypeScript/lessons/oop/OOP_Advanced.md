# Meeting 2 — Advanced OOP with TypeScript

## Objective

Memahami konsep lanjutan Object Oriented Programming.

---

# Learning Outcomes

Setelah pertemuan ini peserta mampu:

- Menggunakan access modifier
- Mengimplementasikan encapsulation
- Menggunakan inheritance
- Menggunakan interface
- Menggunakan abstract class
- Menggunakan static method

---

# Materials

## 1. Access Modifier

### Public

```ts
public name: string;
```

### Private

```ts
private password: string;
```

### Protected

```ts
protected salary: number;
```

---

## 2. Encapsulation

```ts
class BankAccount {
  private balance: number = 0;
}
```

---

## 3. Getter & Setter

```ts
getBalance(): number {
  return this.balance;
}

setBalance(amount: number): void {
  this.balance = amount;
}
```

---

## 4. Inheritance

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Admin extends User {}
```

---

## 5. Method Overriding

```ts
login(): void {
  console.log("Admin Login");
}
```

---

## 6. Interface

```ts
interface Loginable {
  login(): void;
}
```

Implementation:

```ts
class User implements Loginable
```

---

## 7. Abstract Class

```ts
abstract class Employee {
  abstract work(): void;
}
```

---

## 8. Static Method

```ts
static generateId(): number {
  return Math.floor(Math.random() * 1000);
}
```

---

# Practice Project

## School Management System

### Classes

- Person
- Student
- Teacher
- Admin

### Features

- Register user
- Display profile
- Different role behavior

---

# Challenge

## Inventory System

### Classes

- Product
- FoodProduct
- ElectronicProduct

### Requirements

Implement:

- Inheritance
- Interface
- Encapsulation
- Static method

---

# Deliverable

School Management System CLI
