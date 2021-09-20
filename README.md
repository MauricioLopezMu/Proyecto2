# Proyecto 2 User - Agents
 - López Muñoz Mauricio
 
 Áplicación de comunicación con una end point usando diversos user agets.


## DESARROLLO

### FRONTEND

1. Paquetes utilizados

```npm i axios boostrap react react-dom react-router-dom react-scripts sweetalert```
					
2. Inicio de la aplicación
    - Proyecto2/Frontend/ npm start
    - URL: http://localhost:3000
				
3. Funcionalidades
    - "Seleccionar": Permite realizar la petición a un end point haciendo de uno de los User-Agent proporcionados.
    

### BACKEND

1. Paquetes utilizados

```npm i axios cors dotenv express morgan nodemon path```
					
2. Inicio de la aplicación
    - Proyecto2/Backend/ npm start

3. End Points

### Enviar clave de user - Agent
> **GET** /api/users/:id

```
Request


Response
   "data": ['message':[]]
```

### Obtener el user - Agent
> **GET** /api/data

```
Request


Response
   "data": ['message':[]]
```