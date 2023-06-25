
SELECT apellido FROM empleados;                                                                                 --a)

SELECT DISTINCT apellido FROM empleados;                                                                       --b)

SELECT * FROM empleados;                                                                                        --c)

SELECT nombre, apellido FROM empleados;                                                                       --d)

SELECT cuil_cuit FROM empleados e INNER JOIN departamentos d ON e.departamento = d.departamento_id;            --e)

SELECT CONCAT(nombre, ' ', apellido) as 'Nombre y Apellido' FROM empleados;                                     --f) 

SELECT UPPER(CONCAT(nombre, ' ', apellido)) as 'Nombre y Apellido' FROM empleados;                               --g)      

SELECT LOWER(CONCAT(nombre, ' ', apellido)) as 'Nombre y Apellido' FROM empleados;                                 --h) 

SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto asc;                                               --i)

SELECT nombre FROM departamentos ORDER BY nombre asc;                                                                 --j) 

SELECT nombre FROM departamentos ORDER BY nombre desc;                                                                --k)

SELECT apellido, nombre FROM empleados ORDER by apellido asc, nombre;                                                --l)

SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto desc LIMIT 3;                                     --m)

SELECT nombre, presupuesto FROM departamentos WHERE presupuesto <> 0 ORDER BY presupuesto asc LIMIT 3;               --n) 

SELECT nombre, presupuesto FROM departamentos WHERE presupuesto > 150000 ORDER by presupuesto asc;                  --o)

SELECT nombre, presupuesto FROM departamentos WHERE presupuesto > 100000 AND presupuesto < 200000;                  --p) 

SELECT nombre FROM departamentos WHERE presupuesto < 100000 OR presupuesto > 200000; 

SELECT nombre FROM departamentos WHERE NOT(presupuesto >= 100000 AND presupuesto <= 200000);                        --q) 

SELECT nombre FROM departamentos WHERE presupuesto BETWEEN 100000 AND 200000;                                        --r) 


SELECT CONCAT(e.nombre, ' ', e.apellido) as 'Nombre y Apellido', d.nombre as 'Departamento donde trabaja' 
FROM empleados e inner join departamentos d on e.emplaedo_id = d.departamento_id;                                    --s) 


SELECT CONCAT(e.apellido, ' ', e.nombre) as 'Apellido y Nombre', d.nombre as 'Departamento donde trabaja' 
FROM empleados e inner join departamentos d on e.emplaedo_id = d.departamento_id ORDER BY d.nombre asc, e.apellido;     --t) 


SELECT d.departamento_id as 'Código', d.nombre as 'Departamentos', e.nombre as 'Nombres'
FROM departamentos d inner join empleados e on d.departamento_id = e.departamento ORDER BY d.departamento_id asc;       --u) 


SELECT d.nombre as 'Departamento', e.cuil_cuit, CONCAT(e.nombre, ' ', e.apellido) as 'Nombre y Apellido'
FROM departamentos d join empleados e on d.departamento_id = e.departamento WHERE cuil_cuit = '27-38382980-3';                       --v)


SELECT d.nombre as 'Departamento', CONCAT(e.nombre, ' ', e.apellido) as 'Nombre y Apellido'
FROM departamentos d join empleados e on d.departamento_id = e.departamento WHERE e.nombre = 'Pepe' AND e.apellido = 'Ruiz';          --w) 


SELECT d.nombre as 'Departamento', CONCAT(e.apellido, ' ', e.nombre) as 'Apellido y Nombre'
FROM departamentos d join empleados e on d.departamento_id = e.departamento WHERE d.nombre = 'I+D'  ORDER BY e.apellido asc;         --x)


SELECT d.nombre as 'Departamento', e.*
FROM departamentos d join empleados e on d.departamento_id = e.departamento 
WHERE d.nombre = 'I+D' OR d.nombre = 'Sistemas' OR d.nombre = 'Contabilidad'  ORDER BY d.nombre asc, e.apellido asc;                --y) 


SELECT e.nombre 
FROM departamentos d join empleados e on d.departamento_id = e.departamento  
WHERE presupuesto < 100000 OR presupuesto > 200000;                                                                                 --z)
