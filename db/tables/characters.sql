create table characters(
id serial primary key,
char_name varchar(40),
powers varchar(40),
story_id int references story(id) on delete cascade,
team varchar(40),
side varchar(40),
leader bool default false
);