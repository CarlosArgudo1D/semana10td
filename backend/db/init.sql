CREATE TABLE IF NOT EXISTS hens (
  id SERIAL PRIMARY KEY,
  tag TEXT UNIQUE,
  name TEXT,
  age_months INT,
  weight_g INT,
  last_feeding TIMESTAMP,
  status TEXT
);

INSERT INTO hens (tag, name, age_months, weight_g, last_feeding, status) VALUES
('TAG001','Clara',12,1800, now() - INTERVAL '2 hours', 'ok'),
('TAG002','Rosita',8,1500, now() - INTERVAL '5 hours','hungry'),
('TAG003','Lola',20,2100, now() - INTERVAL '1 day','ok'),
('TAG004','Mora',6,1400, now() - INTERVAL '3 hours','ok'),
('TAG005','Pepa',15,1950, now() - INTERVAL '6 hours','hungry');
