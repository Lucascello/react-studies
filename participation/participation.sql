DROP TABLE IF EXISTS participation;

CREATE TABLE participation(
    id SERIAL PRIMARY KEY,
    participation VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);