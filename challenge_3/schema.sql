DROP DATABASE IF EXISTS Checkout;

CREATE DATABASE Checkout;

USE Checkout;

CREATE TABLE Account (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR (50) NOT NULL,
  email VARCHAR (50),
  userPassword VARCHAR (50),
  PRIMARY KEY (id)
);

CREATE TABLE Shipping (
  shipId INT NOT NULL AUTO_INCREMENT,
  lineOne VARCHAR (90) NOT NULL,
  lineTwo VARCHAR (90),
  city VARCHAR (50) NOT NULL,
  state VARCHAR (50) NOT NULL,
  zipCode INT NOT NULL,
  PRIMARY KEY (shipId)
);

CREATE TABLE Payment (
  creditId INT NOT NULL AUTO_INCREMENT,
  creditCardNumber INT NOT NULL,
  expirationDate VARCHAR (50),
  cVV INT NOT NULL,
  billingZipCode INT NOT NULL,
  PRIMARY KEY (creditId)
);

INSERT INTO Account (userName, email, userPassword) VALUES ("BoatyBoy", "boaty@mcboatface.boat", "YellowSub");

INSERT INTO Shipping (lineOne, lineTwo, city, state, zipCode) VALUES ("944 Market Street", "", "San Francisco", "California", 94102);

INSERT INTO Payment (creditCardNumber, expirationDate, cVV, billingZipCode) VALUES (1234567890, "07/24", 499,  94129);
