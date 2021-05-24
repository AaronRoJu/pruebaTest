#crea base de datos
CREATE DATABASE prueba2;
#crea tabla logDial
Create table logDial(
	idLlamada varchar(10),
    fechaDeLlamada dateTime,
    tiempoDialogo smallint,
    telefono varchar(10),
    tipoDeLlamada varchar(15)
);
#crea tabla costos
Create table costos(
	tipoDeLlamada varchar(15),
    costo decimal(10,4)
);
#para insertar datos se pueden ingresar manualmente como
insert into logDial values(197463,'2020-01-01',60,8000000001,'Cel LD');
#o tambien usando estas sentencias, el archivo debe ser un excel guardado con extension .csv
load data infile "prueba/testdevjr/Prueba_2" into table logDial
fields terminated by ','
lines terminated by '\n';

#sentencias para resolver primer punto
select * from logdial WHERE month(fechaDeLlamada)=02 and tipoDeLlamada='Cel LD';
#sentencias para resolver segundo punto
Select AVG (`tiempoDialogo`) FROM`logdial` where tipoDeLlamada='Cel LD' and month(fechaDeLlamada)=02;
#sentencias para resolver tercer punto

#sentencias de los puntos pedidos
#*************primer sentencia************
select * from logdial WHERE month(fechaDeLlamada)=02 and tipoDeLlamada='Cel LD';
 
#*************segunda sentencia************
Select AVG (`tiempoDialogo`) FROM`logdial` where tipoDeLlamada='Cel LD' and month(fechaDeLlamada)=02;
 
#*************tercer sentencia************
select (sum(`tiempoDialogo`)/60)  as `MINUTOS Cel LD` from `logdial`   where tipoDeLlamada='Cel LD' and month(fechaDeLlamada)=01;
select (sum(`tiempoDialogo`)/60)*0.5  as `COSTO POR MINUTOS Cel LD` from `logdial`   where tipoDeLlamada='Cel LD' and month(fechaDeLlamada)=01;

#MOSTRAR MINUTOS LD nacional
select (sum(`tiempoDialogo`)/60)  as `MINUTOS LD nacional` from `logdial`   where tipoDeLlamada='LD nacional' and month(fechaDeLlamada)=01;
select (sum(`tiempoDialogo`)/60)*0.12  as `COSTO POR MINUTOS LD nacional` from `logdial`   where tipoDeLlamada='LD nacional' and month(fechaDeLlamada)=01;

#MOSTRAR MINUTOS LD nacional
select (sum(`tiempoDialogo`)/60)  as `MINUTOS Cel` from `logdial`   where tipoDeLlamada='Cel' and month(fechaDeLlamada)=01;
select (sum(`tiempoDialogo`)/60)*0.4  as `COSTO POR MINUTOS Cel` from `logdial`   where tipoDeLlamada='Cel' and month(fechaDeLlamada)=01;
