--a)
INSERT INTO
    paciente
VALUES
    (
        22558,
        'Antonio',
        'Magallanes',
        'Dos Pindo 260',
        3640,
        '',
        1932,
        ''
    );
--b)
UPDATE
    paciente
SET
    telefono = '3745-589174'
WHERE
    nro_historial_clinico = 1932;
--c)
SELECT
    CONCAT(nombre, ', ', apellido) as 'Paciente',
    observaciones as 'Observación registrada'
FROM
    paciente
WHERE
    observaciones <> '';
--d)
SELECT
    CONCAT(p.nombre, ', ', p.apellido) as 'Paciente',
    m.especialidad as 'Especialidad'
FROM
    paciente p
    JOIN ingreso i ON p.nro_historial_clinico = i.nro_historial_paciente
    JOIN medico m ON m.matricula = i.matricula_medico;
--e)
DELETE FROM
    medico
WHERE
    matricula NOT IN (
        SELECT
            matricula_medico
        FROM
            ingreso
    );
--f)
SELECT
    DISTINCT nro_cama as 'Número de camas',
    COUNT(nro_cama) as Usos
FROM
    ingreso
GROUP BY
    nro_cama
ORDER BY
    COUNT(nro_cama) desc;
--g)
SELECT
    CONCAT(p.nombre, ', ', p.apellido) as 'Paciente',
    COUNT(i.nro_historial_paciente) as 'Cantidad de ingresos'
FROM
    paciente p
    JOIN ingreso i ON p.nro_historial_clinico = i.nro_historial_paciente
GROUP BY
    nro_historial_paciente
HAVING
    COUNT(i.nro_historial_paciente) >= 4
ORDER BY
    nro_historial_paciente desc;
