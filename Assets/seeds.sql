-- drop database if exists empTrackerDb;
-- create database empTrackerDb;

use empTrackerDb;

create table department(
id INT auto_increment NOT NULL,
primary key(id),
name VARCHAR(30) NOT NULL
)

create table role(
id INT auto_increment NOT NULL,
primary key(id),
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2),
department_id INT NOL NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
)


create table employee(
id INT auto_increment NOT NULL,
primary key(id),
first_name VARCHAR(100) NULL,
last_name VARCHAR(100) NULL,
role_id INT NOT NULL,
FOREIGN KEY (role_id) REFERENCES role(id),
manager_id INT NULL,
FOREIGN KEY (manager_id) REFERENCES role(id)
)

select * from department;

insert into deparment (name) values ('it', 'logistics', 'legal', 'production', 'r&d','procurement', 'marketing','hr','finance','security');
insert into role (title, salary, department_id) values ('associate_it', 50000,1),('senior_r&d',70000,5);
insert into role (title, salary, department_id) values ('senior_legal', 90000,3),('entry_hr',30000,8), ('senior_hr',70000,8),('entry_finance',50000,9),('senior_finance',100000,9),('middle_security',60000,10);
-- insert into role (title, salary, values
insert into role (title, salary, department_id) values ('entry_logistics',40000,2),('senior_production',60000,4);
DELETE FROM role WHERE id =3;
select * from role;

insert into role (title, salary, department_id) values ('entry_marketing',20000,7),('senior_marketing',90000,7), ('senior_procurement',50000,6);



 **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager


  insert into employee (first_name,last_name,role_id,manager_id) values ('John','Smith', 1);



  insert into employee (first_name,last_name,role_id) values ('Peter','Parker',4), ('Some', 'Guy',5), ('Dwayne','Richardson',7),('Scrudge','McDuck',9),('Iam','Bodyguard',10),('Jack','Nickolson',11),('Henry','Ford',12),('Random','Person',14),('Mr','Buyer',15);


insert into employee (first_name,last_name,role_id,manager_id) VALUES ('Donald','Carrot',6,7), ('Looney','Tunes',8,9),('Gwen','Stefany',13,14);


  select * from employee;