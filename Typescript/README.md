# 🚀 TypeScript Learning Journey

Welcome to my TypeScript Learning Repository.

This repository documents my journey of learning TypeScript while preparing for Playwright Automation Testing. It contains theory, coding examples, practice programs, interview questions, and real-world Playwright use cases.

---

# 🎯 Learning Objectives

- Learn TypeScript fundamentals.
- Understand static typing.
- Write maintainable and reusable code.
- Prepare for Playwright Automation.
- Build scalable automation frameworks.

---

# 📚 Topics Completed

---

# ✅ Day 1 - Data Types

**File:** `DataTypes.ts`

## 📖 Overview

TypeScript provides static typing to JavaScript, allowing developers to detect errors during compilation instead of runtime.

---

## 📘 Concepts Covered

### Primitive Types

- string
- number
- boolean
- null
- undefined
- any

### Non-Primitive Types

- Arrays
- Objects
- Functions

### Arrays

- Implicit Arrays
- Explicit Arrays
- Readonly Arrays
- Arrays of Objects

### Objects

- Nested Objects
- Optional Properties
- Strongly Typed Objects

---

## 💻 Program Practiced

- Primitive variables
- Arrays
- Objects
- Nested Objects
- Optional Properties
- Readonly Arrays
- Arrays of Objects

---

## 🌍 Real-Time Playwright Example

```ts
type LoginUser = {
    username: string;
    password: string;
};

let admin: LoginUser = {
    username: "admin",
    password: "admin123"
};
```

Used for

- Login Test Data
- API Payload
- JSON Files
- Configuration

---

## 🎤 Interview Questions

- What is TypeScript?
- Difference between JavaScript and TypeScript?
- What is Type Inference?
- What is Explicit Typing?
- Difference between any and unknown?

---

## 📝 Best Practices

✅ Prefer explicit typing.

✅ Avoid unnecessary use of any.

✅ Create reusable object types.

---

## ⚠ Common Mistakes

❌ Overusing any

❌ Forgetting optional properties

❌ Creating duplicate object types

---

## 🎯 Key Takeaways

- Strong typing
- Better IntelliSense
- Compile-time checking
- Better maintainability

---

# ✅ Day 2 - Functions

**File:** `Functions.ts`

## 📖 Overview

Functions are reusable blocks of code that can have typed parameters and return values.

---

## 📘 Concepts Covered

- Arrow Functions
- Return Types
- Optional Parameters
- Default Parameters
- Rest Parameters
- Function Signature
- Object Parameters
- Union Parameters

---

## 💻 Program Practiced

- Functions
- Arrow Functions
- Return Type
- Optional Parameter
- Default Parameter
- Rest Parameter
- Function Signature

---

## 🌍 Real-Time Playwright Example

```ts
let login = (
username:string,
password:string
):void=>{
console.log(username,password);
}
```

Used for

- Page Methods
- Utility Methods
- Validation

---

## 🎤 Interview Questions

- Difference between void and return?
- What is Function Signature?
- Difference between optional and default parameter?

---

## 📝 Best Practices

✅ Keep functions reusable.

✅ Return proper types.

✅ Keep functions small.

---

## ⚠ Common Mistakes

❌ Ignoring return types.

❌ Writing lengthy functions.

---

## 🎯 Key Takeaways

- Better reusability.
- Strong typing.
- Easy maintenance.

---

# ✅ Day 3 - Union Types

(Use same structure)

---

# ✅ Day 4 - Type Alias

(Use same structure)

---

# ✅ Day 5 - Type Casting

(Use same structure)

---

# ✅ Day 6 - Tuple

(Use same structure)

---

# ✅ Day 7 - Enums

## 🌍 Real-Time Playwright Example

```ts
enum BrowserType {
CHROME="chromium",
FIREFOX="firefox",
WEBKIT="webkit"
}

let browser=BrowserType.CHROME;
```

Used for

- Browser Selection
- Environment
- User Roles

---

## 🎤 Interview Questions

- Why Enum?
- Difference between Numeric and String Enum?
- Why not use string?

---

# 📈 Learning Progress

| Day | Topic | Status |
|-----|-------|--------|
|1|Data Types|✅|
|2|Functions|✅|
|3|Union Types|✅|
|4|Type Alias|✅|
|5|Type Casting|✅|
|6|Tuple|✅|
|7|Enums|✅|

---

# 📚 Topics to Learn Next

## Core TypeScript

- Interfaces
- Interface Extension
- Implements
- Classes
- Constructors
- Access Modifiers
- Readonly Properties
- Static Members
- Inheritance
- Method Overriding
- Abstract Classes
- Getters & Setters

---

## Advanced TypeScript

- Generics
- Generic Constraints
- Utility Types
- keyof
- typeof
- Mapped Types
- Conditional Types

---

## Modules

- import
- export
- Named Export
- Default Export

---

## Async TypeScript

- Promise
- async / await
- Error Handling

---

# 🚀 Future Playwright Topics

- Playwright Installation
- Playwright Architecture
- Page Object Model
- BasePage
- Fixtures
- Hooks
- Assertions
- Data-Driven Testing
- API Testing
- Environment Configuration
- Reports
- Parallel Execution
- CI/CD
- Docker

---

# 📂 Repository Structure

```text
TypeScript
│
├── DataTypes.ts
├── Functions.ts
├── UnionTypes.ts
├── TypeAlias.ts
├── TypeCasting.ts
├── Tuple.ts
├── Enums.ts
├── README.md
│
└── Practice
    ├── EmployeeManagement.ts
    ├── LoginValidation.ts
    ├── ProductSearch.ts
    └── BrowserConfiguration.ts
```

---

# 🛠 Tools Used

- TypeScript
- VS Code
- Node.js
- npm
- Git
- GitHub

---

# ⭐ About This Repository

This repository documents my TypeScript learning journey while preparing for Playwright Automation Testing. Each topic contains theory, coding examples, interview questions, best practices, common mistakes, and real-world Playwright examples. The goal is to build a strong TypeScript foundation before developing scalable automation frameworks using Playwright, Page Object Model (POM), API Testing, reporting, and CI/CD.