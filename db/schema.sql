CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);