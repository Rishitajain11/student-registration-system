# Student Registration System

A simple full-stack web application that allows users to register students and store their information in a MySQL database. The application provides REST APIs to add student records and retrieve all registered students.

---

# Features

* Register a student using a form.
* Store student details in a MySQL database.
* Retrieve all student records using REST APIs.
* Clean and user-friendly interface.
* Separation of frontend, backend, and database layers.

---

# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MySQL

---

# Why These Technologies?

### HTML

HTML is used to create the structure of the webpage and design the student registration form.

### CSS

CSS is used to style the webpage and provide a clean and attractive user interface.

### JavaScript

JavaScript is used to handle form submission and communicate with the backend through API requests.

### Node.js

Node.js allows JavaScript to run on the server side, enabling both frontend and backend development using the same language.

### Express.js

Express.js provides a simple and efficient way to create REST APIs and handle HTTP requests.

### MySQL

MySQL is used to store student records because it is reliable and suitable for structured data.

### Architecture

The application follows a three-tier architecture:

**Frontend (HTML + CSS + JavaScript)**
↓
**Backend (Node.js + Express)**
↓
**Database (MySQL)**

This technology stack was selected because it is lightweight, easy to understand, and sufficient for implementing a basic full-stack application.

---

# Student Information Stored

The application stores the following details:

* Name
* Enrollment Number
* Email
* Mobile Number
* Branch

---

# Project Structure

```
student-registration-system
│
├── backend
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── screenshots
│
├── database.sql
├── README.md
└── demo-video.mp4
```

---

# Database Schema

## Database

```sql
CREATE DATABASE studentdb;
```

## Table

```sql
CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    enrollment_number VARCHAR(50),
    email VARCHAR(100),
    mobile_number VARCHAR(20),
    branch VARCHAR(50)
);
```

### Table Structure

| Column            | Data Type                         |
| ----------------- | --------------------------------- |
| id                | INT (Primary Key, Auto Increment) |
| name              | VARCHAR(100)                      |
| enrollment_number | VARCHAR(50)                       |
| email             | VARCHAR(100)                      |
| mobile_number     | VARCHAR(20)                       |
| branch            | VARCHAR(50)                       |

---

# REST APIs

## Add Student

### Endpoint

```
POST /students
```

### Description

Adds a new student to the database.

### Sample Request Body

```json
{
  "name": "Rishita Jain",
  "enrollment_number": "0801CS241115",
  "email": "rishita@gmail.com",
  "mobile_number": "9876543210",
  "branch": "CSE"
}
```

---

## Get All Students

### Endpoint

```
GET /students
```

### Description

Returns all student records stored in the database.

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Rishita Jain",
    "enrollment_number": "0801CS241115",
    "email": "rishita@gmail.com",
    "mobile_number": "9876543210",
    "branch": "CSE"
  }
]
```

---

# Installation and Setup

## Clone Repository

```bash
git clone <repository-url>
```

## Move to Backend Directory

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE studentdb;
```

Then run the queries provided in `database.sql`.

## Configure Database

Update `db.js` with your MySQL credentials:

```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "studentdb"
});
```

## Start Backend Server

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

## Run Frontend

Open:

```
frontend/index.html
```

in your browser.

---

# Screenshots

The screenshots folder contains:

* Registration Form
* Database Table
* GET API Output
* Project Structure

---

# Future Improvements

* Input validation
* Update student information
* Delete student records
* Search students by enrollment number
* Responsive design for mobile devices

---

# Author

**Rishita Jain**
B.Tech Computer Science Engineering
Shri Govindram Seksaria Institute of Technology and Science (SGSITS)

---

# Conclusion

This project demonstrates the implementation of a basic full-stack Student Registration System using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. It provides a simple example of how frontend, backend, and database components interact to perform CRUD-related operations through REST APIs.
