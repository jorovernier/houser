CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(64) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip INTEGER NOT NULL
);

INSERT INTO houses (name, address, city, state, zip)
VALUES
('Trailer', '14583 Mobile Home Lane', 'Purple', 'VD', 12345),
('Mansion', '58665 Fancy Shmancy Road', 'Richtowm', 'CA', 98764),
('Regular House', '12345 Normal Place', 'Boring', 'AZ', 19543);