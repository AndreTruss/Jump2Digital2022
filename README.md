[![CodeFactor](https://www.codefactor.io/repository/github/andretruss/jump2digital2022/badge)](https://www.codefactor.io/repository/github/andretruss/jump2digital2022)

# Jump2Digital 2022 | Backend

## About the project

Task 1 => "Crear un base de datos (PostgreSQL, MySQL, Mongo, Firebase,etc) y guardar toda la [LISTA de compañías](https://github.com/AndreTruss/Jump2Digital2022/tree/main/src/database/companies.json) utilizado siguiendo el esquema del JSON"

Task 2 => "Crear un endpoint que devuelva las compañías ordenadas por tamaño"

Task 3 => "Crear un endpoint que devuelva las compañías ordenadas por fecha de creación"

Task 4 => "Crear un endpoint que devuelva los siguientes datos: Número de empresas que hay en cada industria, Número de empresas que hay por cada rango de tamaños, Número de empresas que hay en cada año de creación"

## Instalación

Para que el proyecto funcione tenemos que instalar previamente: 
- [Node.js y npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)

Podemos clonar el proyecto del siguiente enlace:
```
    npm clone https://github.com/AndreTruss/Jump2Digital2022.git
```
Una vez clonado el proyecto, ejecutar el siguiente comando para instalar los modulos:
```
    npm install
```

## Ejecutar

Ejecutar el comando: 
```
    npm start
```
Esto nos inicializa el servidor y la base de datos.

Ejecutar este comando para utilizar Nodemon:
```
npm run dev
```


## Rutas

[Collección POSTMAN](https://github.com/AndreTruss/Jump2Digital2022/tree/main/POSTMAN)

_Obtener compañías ordenadas por tamaño - GET_
```
http://localhost:3000/company/size
```

_Obtener compañías ordenadas por fecha de creación - GET_
```
http://localhost:3000/company/founded
```

_Obtener número de empresas de cada industria, rango de tamaños y año de creación - GET_
```
http://localhost:3000/company/numbers
```

## Modulos utilizados

* Express - Framework de node.js
* Mongoose - Dependencia que nos ayuda a gestionar datos con MongoDB.
* Nodemon - Dependencia para el development.


## Autor

* Github [Andrea Trussardi](https://github.com/AndreTruss)  |  Email andrea.trussardi@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)