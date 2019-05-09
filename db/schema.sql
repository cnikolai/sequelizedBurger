DROP DATABASE IF EXISTS sequelizedBurger_db;

CREATE DATABASE sequelizedBurger_db;

use sequelizedBurger_db;

CREATE TABLE burgers (
	id integer primary key auto_increment, 
    burger_name varchar(100),
    devoured boolean default false
);
