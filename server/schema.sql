SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS Message;
DROP TABLE IF EXISTS User;

CREATE TABLE Message (
  `id` INTEGER(32) NOT NULL AUTO_INCREMENT,
  `userId` INTEGER(32) NOT NULL ,
  `text` VARCHAR(160) NOT NULL DEFAULT '',
  `roomname` VARCHAR(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);

CREATE TABLE User (
  `id` INTEGER(32) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);

ALTER TABLE Message ADD FOREIGN KEY (userId) REFERENCES User (`id`);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

