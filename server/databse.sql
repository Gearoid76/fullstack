CREATE DATABASE nodelogin;

CREATE TABLE Login_page (
	user_id SERIAL PRIMARY KEY,
	username  varchar ( 50 ) UNIQUE NOT NULL,
	password  varchar ( 50 ) NOT NULL	
);
CREATE TABLE Login_page (
	user_id SERIAL PRIMARY KEY,
	username  varchar ( 50 ),
	password  varchar ( 50 )
	);  -- used above table as the null was a pain.


INSERT INTO Login_page (username, password ) VALUES ('testtest22','pasq'); --user_id is automatic
--set up unique passwords putting in the same pw will give you duplicate key value... error

-- \c move into a database  here you can use the CREATE...see line 3 onwards dont forget the ;
-- \l show all tables in that database
-- \dt show tables 
-- \d lists the tables with the name of the table ie Login_page