CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('unassigned'), ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorite" (
    id SERIAL PRIMARY KEY,
    url VARCHAR(200) NOT NULL,
    alt_text VARCHAR(200),
    category_id INT DEFAULT 1
);

INSERT INTO "favorite" ("url", "alt_text")
VALUES ('https://media1.giphy.com/media/KpLPyE3D6HJPa/200_d.gif?cid=aa0989470ffmrtqvhlpr8y1b03j83ppzgevma2jnb79otraa&rid=200_d.gif', 'mcdonalds GIF');