DROP DATABASE IF EXISTS art_pieces_dev;

CREATE DATABASE art_pieces_dev;

\c art_pieces_dev;

CREATE TABLE art_pieces (
    id SERIAL PRIMARY KEY, 
    title TEXT,
    artist VARCHAR(255),
    medium VARCHAR(255),
    year_created INT,
    image_url TEXT,
    is_favorite BOOLEAN DEFAULT false,
    description TEXT
);