-- migrate:up
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);


-- migrate:down
DROP TABLE users;
