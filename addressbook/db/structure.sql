CREATE TABLE Address (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    street TEXT NOT NULL,
    place TEXT NOT NULL,
    zip TEXT NOT NULL,
    country TEXT NOT NULL
);

INSERT INTO Address ( firstname, lastname, street, place, zip, country) VALUES ('William', 'Jones', '776 Jillian Turnpike Apt. 913', 'North Daveton', '43853', 'Estonia'), 
('William', 'Gallegos', '47609 Bill Circle', 'Kristiborough', '40306', 'Denmark'), 
('Catherine', 'Smith', '94753 Jennings Estate', 'Johnmouth', '63874', 'Hong Kong');
