
use techtogeth;

DROP TABLE IF EXISTS tasks; 
create table tasks 
(
task_id INT primary key auto_increment,
task_text VARCHAR(250));

insert into tasks values 
(1, "go to the gym"),
(2, "do cs homework"),
(3, "email grandma");


DROP TABLE IF EXISTS subtasks;
create table subtasks
(
sub_id INT PRIMARY KEY auto_increment,
sub_text VARCHAR(250),
task_id INT NOT NULL,
constraint foreign key (task_id) references tasks(task_id) 
);

DROP TABLE IF EXISTS reinforcements;
create table reinforcements (
aff_id int primary key auto_increment,
aff varchar(250));


DROP TABLE IF EXISTS user;
create table user (
name varchar(250),
score INT);


insert into subtasks values
(1, "get work out clothes", 1),
(2, "fill up water bottle", 1),
(3, "text partner", 2);

insert into reinforcements values 
(1, "You did the thing!!"),
(2, "You can do anything you put your mind to. And you did!"),
(3, "You are so much stronger than you think"),
(4, "Well done, high five!"),
(5, "You did it! Be proud of your accomplishment"),
(6, "Congrats buddy! You're doing great :)"),
(7, "Your dedication to getting things done is inspiring"),
(8, "Time to revel in your accomplishments"),
(9, "Congratulations on making us all envious of your success"),
(10, "Getting things done, so proud of ya bud!");

insert into user values
("you", 365);

select *
from subtasks;

select *
from user;

select task_text, subtasks.sub_text
from tasks
left join subtasks using (task_id);



-- create user 'techtogether-2019'@'localhost' identified by 'techtogether!';
-- grant all privileges on techtogeth.* to 'techtogether-2019'@'localhost' 
-- with grant option;

-- create user 'techtogether-2019'@'%%' identified by 'techtogether!';
-- grant all privileges on techtogeth.* to 'techtogether-2019'@'%%' 
-- with grant option;
