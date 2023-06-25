CREATE DATABASE IF NOT EXISTS ejercicio4_1;

USE ejercicio4_1;

CREATE TABLE alumno (
cod_matricula INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
dni VARCHAR(50) NOT NULL,
fecha_nac DATE NOT NULL,
email VARCHAR(100) NOT NULL
);


CREATE TABLE curso (
cod_curso INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL
);

CREATE TABLE profesor (
profesor_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
especialidad VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);

CREATE TABLE alumnoxcurso (
cod_matricula INT UNSIGNED, 
cod_curso INT UNSIGNED,
PRIMARY KEY (cod_matricula,cod_curso),
FOREIGN KEY (cod_matricula) REFERENCES alumno(cod_matricula),
FOREIGN KEY (cod_curso) REFERENCES curso(cod_curso)
);

CREATE TABLE cursoxprofesor (
cod_curso INT UNSIGNED,
profesor_id INT UNSIGNED,
PRIMARY KEY (cod_curso, profesor_id),
FOREIGN KEY (cod_curso) REFERENCES curso(cod_curso),
FOREIGN KEY (profesor_id) REFERENCES profesor(profesor_id)
);


INSERT INTO alumno VALUES (1, 'Gimenez Raul', '35842966', '1993-05-11', 'raul-gimenez@gmail.com');
INSERT INTO alumno VALUES (2, 'Sosa Paulina', '37548885', '2000-01-26', 'pausosa@gmail.com');
INSERT INTO alumno VALUES (3, 'Martinez Matias', '33589624', '1999-06-30', 'mati-m@gmail.com');

INSERT INTO curso VALUE (1, 'Introduccion a REACT Native');
INSERT INTO curso VALUE (2, 'Aplicacion web fullstack con Angular y .NET');
INSERT INTO curso VALUE (3, 'Deteccion de distancia con arduino');

INSERT INTO profesor VALUES (1, 'Abramov Dan', 'React', 'Abramov-dan@meta.com');
INSERT INTO profesor VALUES (2, 'D Angelo Adam', '.NET', 'd-adam@meta.com');
INSERT INTO profesor VALUES (3, 'de Oliveira Suzana', 'Arduino', 'suzana.do@gmail.com');

INSERT INTO alumnoxcurso VALUES (1,2);
INSERT INTO alumnoxcurso VALUES (2,3);
INSERT INTO alumnoxcurso VALUES (3,1);

INSERT INTO cursoxprofesor VALUES (1,1);
INSERT INTO cursoxprofesor VALUES (2,2);
INSERT INTO cursoxprofesor VALUES (3,3);