# 🚀 JavaScript Learning Journey

Welcome to my JavaScript learning repository. This folder contains the programs and exercises I completed while building a strong JavaScript foundation for Playwright Automation Testing.

## 🎯 Learning Objective

- Understand JavaScript fundamentals.
- Build problem-solving skills through coding exercises.
- Prepare for TypeScript and Playwright Automation Framework development.

---

# 📚 Topics Completed

## ✅ Day 1 - Variables

**File:** `variables.js`

### Overview

Variables are containers used to store data in JavaScript. JavaScript provides three keywords to declare variables:

- `var`
- `let`
- `const`

### Concepts Covered

#### `var`
- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted with `undefined`
- Avoided in modern JavaScript due to scope-related issues

#### `let`
- Block scoped
- Cannot be redeclared
- Can be reassigned
- Hoisted but cannot be accessed before initialization (Temporal Dead Zone)

#### `const`
- Block scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized during declaration

### Practice Tasks

- ✅ Store student information using variables
- ✅ Swap two variables using a temporary variable
- ✅ Declare variables without initialization
- ✅ Reassign variable values
- ✅ Understand constant variables

### Key Takeaways

- Difference between declaration and initialization
- Difference between reassignment and redeclaration
- Scope of `var`, `let`, and `const`
- Variable hoisting
- Best practices for variable declaration

---

## ✅ Day 2 - Data Types

**File:** `datatypes.js`

### Overview

JavaScript supports two categories of data types:

### Primitive Data Types

- Number
- String
- Boolean
- BigInt
- Undefined
- Null
- Symbol

### Non-Primitive (Reference) Data Types

- Object
- Array
- Function
- Date
- Map
- Set

### Topics Practiced

- ✅ `typeof` operator
- ✅ Primitive data types
- ✅ Non-primitive data types
- ✅ String to Number conversion using `Number()`
- ✅ Understanding `typeof(null)`

### Key Takeaways

- Identify JavaScript data types using `typeof`
- Difference between primitive and reference data types
- Convert string values into numbers
- Understand why `typeof(null)` returns `"object"` (historical JavaScript behavior)

---

## ✅ Day 3 - Operators

**File:** `operators.js`

### Overview

Operators are symbols used to perform operations on variables and values in JavaScript.

This module covers the most commonly used JavaScript operators with examples and hands-on practice tasks. Understanding operators is essential for writing conditions, performing calculations, making decisions, and building automation scripts in Playwright.

---

### Concepts Covered

#### 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Description |
|----------|-------------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (Remainder) |

**Example**

```javascript
let a = 12;
let b = 7;

console.log(a + b);
console.log(a % b);
```

---

#### 2. Assignment Operators

Used to assign values to variables.

| Operator | Description |
|----------|-------------|
| `=` | Assignment |
| `+=` | Add and Assign |
| `-=` | Subtract and Assign |
| `*=` | Multiply and Assign |
| `/=` | Divide and Assign |
| `%=` | Modulus and Assign |

---

#### 3. Comparison Operators

Used to compare two values and return a Boolean result (`true` or `false`).

| Operator | Description |
|----------|-------------|
| `==` | Equal (checks only value) |
| `===` | Strict Equal (checks value and datatype) |
| `!=` | Not Equal |
| `!==` | Strict Not Equal |
| `>` | Greater Than |
| `<` | Less Than |
| `>=` | Greater Than or Equal |
| `<=` | Less Than or Equal |

**Example**

```javascript
let a = 5;
let b = "5";

console.log(a == b);   // true
console.log(a === b);  // false
```

---

#### 4. Logical Operators

Used to combine multiple conditions.

| Operator | Description |
|----------|-------------|
| `&&` | Logical AND |
| `||` | Logical OR |
| `!` | Logical NOT |

**Example**

```javascript
let age = 22;
let citizen = "Indian";

if (age >= 18 && citizen === "Indian") {
    console.log("Eligible to vote");
}
```

---

#### 5. String Operator

Used to concatenate strings using the `+` operator.

**Example**

```javascript
let firstName = "Praveen";
let lastName = "V";

console.log(firstName + " " + lastName);
```

---

#### 6. Unary Operators

Unary operators perform operations on a single operand.

- `++` Increment
- `--` Decrement
- `!` Logical NOT
- Unary `+`
- Unary `-`

**Example**

```javascript
let count = 5;

count++;

console.log(count); // 6
```

---

#### 7. Ternary Operator

A shorthand version of the `if...else` statement.

**Syntax**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

**Example**

```javascript
let number = 44;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);
```

---

#### 8. Type Operators

Used to determine the type of a variable or object.

| Operator | Description |
|----------|-------------|
| `typeof` | Returns the datatype of a variable |
| `instanceof` | Checks whether an object belongs to a specific class or constructor |

---

### Practice Tasks

- ✅ Perform arithmetic operations on two numbers.
- ✅ Find the greater number between two numbers using conditional statements.
- ✅ Check whether a number is even or odd using the modulus operator.
- ✅ Compare values using `==` and `===`.
- ✅ Determine voting eligibility using logical operators.
- ✅ Use the OR (`||`) operator to evaluate multiple conditions.
- ✅ Use the ternary operator to identify even and odd numbers.
- ✅ Practice string concatenation using the `+` operator.

---

### Key Takeaways

- Understand the purpose of different JavaScript operators.
- Perform arithmetic calculations using arithmetic operators.
- Assign and update variable values using assignment operators.
- Compare values accurately using comparison operators.
- Combine multiple conditions using logical operators.
- Write concise conditional statements using the ternary operator.
- Use the modulus operator to determine even and odd numbers.
- Identify variable data types using `typeof`.
- Apply operators effectively while solving JavaScript problems.
- Build a strong JavaScript foundation for Playwright Automation Testing.

## ✅ Day 4 - Conditional Statements

**File:** `conditionalStatements.js`

### Concepts Covered

- if
- if...else
- if...else if
- Nested if
- switch

### Practice Tasks

- ✅ Positive or Negative Number
- ✅ Grade Calculator
- ✅ Leap Year
- ✅ Login Validation
- ✅ Day of the Week using switch

### Key Takeaways

- Execute code based on conditions.
- Handle multiple decision paths.
- Use switch for cleaner conditional logic.

## ✅ Day 5 - Loops

**File:** `loops.js`

### Concepts Covered

- for loop
- while loop
- do...while loop

### Practice Tasks

- ✅ Print numbers from 1–10
- ✅ Print even numbers
- ✅ Print odd numbers
- ✅ Multiplication table
- ✅ Sum of numbers from 1 to 100
- ✅ ATM PIN validation using do...while

### Key Takeaways

- Understand loop execution flow.
- Know when to use for, while, and do...while.
- Solve common looping problems.

## ✅ Day 6 - Functions

**File:** `functions.js`

### Overview

Functions are reusable blocks of code that perform a specific task. They improve code reusability, readability, and maintainability.

### Concepts Covered

- Function Declaration
- Function Call
- Function Parameters
- Return Functions
- Void Functions
- Anonymous Functions
- Arrow Functions (ES6)

### Practice Tasks

- ✅ Function without parameters
- ✅ Function with parameters
- ✅ Function with return value
- ✅ Employee Salary Calculation
- ✅ Anonymous Function
- ✅ Arrow Function
- ✅ Return values
- ✅ Function arguments

### Key Takeaways

- Understand function declaration and invocation.
- Learn the difference between void and return functions.
- Pass values using parameters and arguments.
- Write anonymous and arrow functions.
- Improve code reusability using functions.

# 📈 Learning Progress

| Day | Topic | File | Status |
|-----|-------|------|--------|
| 1 | Variables | `variables.js` | ✅ Completed |
| 2 | Data Types | `datatypes.js` | ✅ Completed |
| 3 | Operators | `operators.js` | ✅ Completed |
| 4 | Conditional Statements | `conditionalStatements.js` | ✅ Completed  |
| 5 | Loops | `loops.js` | ✅ Completed  |
| 6 | Functions | `functions.js` & `arrowFunction.js` | ✅ Completed  |
| 7 | Arrays | `arrays.js` | ⏳ Upcoming |
| 8 | Objects | `objects.js` | ⏳ Upcoming |
| 9 | OOP Concepts | `oops.js` | ⏳ Upcoming |
| 10 | ES6 Features | `es6.js` | ⏳ Upcoming |

---

# 🛠️ Tools Used

- JavaScript (ES6+)
- Visual Studio Code
- Git
- GitHub

---

# 🎯 Goal

Build a strong JavaScript foundation and progressively move to:

- TypeScript
- Playwright Automation
- Page Object Model (POM)
- API Testing
- Framework Development
- CI/CD Integration

---

## ⭐ About This Repository

This repository documents my JavaScript learning journey while preparing for Playwright Automation Testing. Each topic includes theory, hands-on coding exercises, and practice problems to strengthen my programming fundamentals before moving to TypeScript and advanced automation framework development.

I will continue updating this repository as I progress through JavaScript, TypeScript, and Playwright.