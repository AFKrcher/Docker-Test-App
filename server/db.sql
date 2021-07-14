CREATE DATABASE appdb;
\c appdb

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    comment VARCHAR(255)
)

--Test data
INSERT INTO items(comment) VALUES ('this is a test');
INSERT INTO items(comment) VALUES ('and so is this');