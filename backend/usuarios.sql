CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(100),
  password VARCHAR(255)
);

INSERT INTO usuarios (usuario, password)
VALUES ('francisco', MD5('frangomez'));
