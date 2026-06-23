CREATE DATABASE studentdb;
USE studentdb;
CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    enrollment_number VARCHAR(50),
    email VARCHAR(100),
    mobile_number VARCHAR(20),
    branch VARCHAR(50)
);