drop database if exists empTrackerDb;
create database empTrackerDb;

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
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
 ON DELETE CASCADE
)


create table employee(
id INT auto_increment NOT NULL,
primary key(id),
first_name VARCHAR(100) NULL,
last_name VARCHAR(100) NULL,
role_id INT NOT NULL,
FOREIGN KEY (role_id) REFERENCES role(id)  ON DELETE CASCADE,
manager_id INT NULL
)



insert into department (id, name) values ('99','no_department');
insert into department (name) values ('it'),('logistics'),('legal'),('production'),('r&d'),('procurement'),('marketing'),('hr'),('finance'),('security');

insert into role (id,title, salary, department_id) values (99,'no_role','99','99');
insert into role (title, salary, department_id) values ('associate_it', '50000','100'),('senior_r&d','70000','104'),('senior_legal', '90000','102'),('entry_hr','30000','107'),('senior_hr','70000','107'),('entry_finance','50000','108'),('entry_finance','55000','108'),('senior_finance','100000','108'),('middle_security','60000','109'),('entry_logistics','40000','101'),('senior_production','60000','103'),('entry_marketing','20000','106'),('senior_marketing','90000','106'), ('senior_procurement','50000','105');



insert into employee (id, first_name,last_name,role_id,manager_id) values ('99','No_Manager','No_Manager','99','99');
insert into employee (first_name,last_name,role_id) values ('John','Smith', '100'),('Peter','Parker','104'), ('Some', 'Guy','105'), ('Dwayne','Richardson','107'),('Scrudge','McDuck','109'),('Iam','Bodyguard','108'),('Jack','Nickolson','101'),('Henry','Ford','106'),('Random','Person','100'),('Mr','Buyer','102');
insert into employee (first_name,last_name,role_id,manager_id) VALUES ('Donald','Carrot','103','107'), ('Looney','Tunes','101','109'),('Gwen','Stefany','102','106');


select * from department;
select * from role;
select * from employee;

