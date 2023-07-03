CREATE DATABASE IF NOT EXISTS clinica;

USE clinica;

CREATE TABLE medico (
matricula INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30),
apellido VARCHAR(30),
especialidad VARCHAR(20),
observaciones TEXT
);

CREATE TABLE paciente (
nss BIGINT(20) NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
domicilio VARCHAR(30),
codigo_postal SMALLINT(6),
telefono VARCHAR(16),
nro_historial_clinico INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
observaciones TEXT
);

CREATE TABLE ingreso (
id_ingreso INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
fecha_ingreso DATE NOT NULL,
nro_habitacion SMALLINT(6),
nro_cama SMALLINT(6),
observaciones TEXT,
nro_historial_paciente INT(11) UNSIGNED,
matricula_medico INT(11) UNSIGNED,
FOREIGN KEY (nro_historial_paciente) REFERENCES paciente(nro_historial_clinico),
FOREIGN KEY (matricula_medico) REFERENCES medico(matricula)
);