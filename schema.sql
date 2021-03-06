DROP DATABASE IF EXISTS discord;
CREATE DATABASE discord;

USE discord;

CREATE TABLE schedules (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, startDate VARCHAR(255) NOT NULL, endDate VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, userName VARCHAR(255) NOT NULL);

CREATE TABLE users (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, discordId VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NUll, discriminator VARCHAR(255) NOT NULL, accessToken VARCHAR(255) NOT NULL);
