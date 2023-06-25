CREATE DATABASE IF NOT EXISTS ejercicio4_2;

USE ejercicio4_2;

CREATE TABLE pais (
pais_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE provincia (
provincia_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
pais_id INT UNSIGNED,
FOREIGN KEY (pais_id) REFERENCES pais(pais_id)
);

CREATE TABLE localidad (
localidad_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
codigo_postal INT UNSIGNED,
provincia_id INT UNSIGNED,
FOREIGN KEY (provincia_id) REFERENCES provincia(provincia_id)
);

CREATE TABLE empleado (
empleado_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
dni VARCHAR(50) NOT NULL,
telefono VARCHAR(50),
nombre VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
fecha_alta DATE NOT NULL,
localidad_id INT UNSIGNED,
FOREIGN KEY (localidad_id) REFERENCES localidad(localidad_id)
);

CREATE TABLE telefono_empleado (
telefono VARCHAR(50),
empleado_id INT UNSIGNED,
PRIMARY KEY (telefono, empleado_id),
FOREIGN KEY (empleado_id) REFERENCES empleado(empleado_id)
);

INSERT INTO pais VALUES (1, 'Arentina');
INSERT INTO pais VALUES (2, 'Paraguay');
INSERT INTO pais VALUES (3, 'Uruguay');

INSERT INTO provincia VALUES (1, 'Misiones', '1');
INSERT INTO provincia VALUES (2, 'Boqueron', '2');
INSERT INTO provincia VALUES (3, 'Durazno', '3');

INSERT INTO localidad VALUES (1, 'Posadas', 3300, '1');
INSERT INTO localidad VALUES (2, 'Filadelfia',9300, '2');
INSERT INTO localidad VALUES (3, 'Durazno', 97000, '3');

INSERT INTO empleado VALUES (1, '37885727', '+5493765987264', 'Martinez Raul', 'martinezraul@gmail.com', '2000-05-11', 1);
INSERT INTO empleado VALUES (2, '36407480', '+595916247550', 'Villalba Juan', 'ejuan@gmail.com', '2002-01-23', '2');
INSERT INTO empleado VALUES (3, '37704638', '+59843684522', 'Diaz Mariana', 'diazmarian@gmail.com','2020-03-02', '3');

INSERT INTO telefono_empleado VALUES ('+5493765987264', 1);
INSERT INTO telefono_empleado VALUES ('+5493769745826', 1);
INSERT INTO telefono_empleado VALUES ('+59843698262', 3);