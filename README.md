# Dev challenge - lucioles.io
## Angular (Front) + Node (Back)

Este reto es parte del repositorio:
https://github.com/engagetech/frontend-coding-challenge

> PD: No corrio el back en Java, asi que se realizó una API Dummy
que retorna los mismos datos que se esperaban desde el back de Java

## ⬆️ Highlights

- Se utilizó Angular Material para los componentes de la tabla
- Se consideró utilizar una información DEFAULT por si la llamada al back fallaba
- El aspecto de la vista se mantiene sin problemas hasta la vista en tablet

## ⬇️ Downlights

- Para el diseño solo se cuenta con 4 imagenes
- Por falta de la letra, se intentó ubicar la mas parecida (se utilizó LATO)
- No levantó el back según las instrucciones iniciales
- Por problemas con el sorting de materials para las tablas y los observables se programó una lógica funcional

## Tecnología

Dillinger uses a number of open source projects to work properly:

- Angular
- Angular Material
- node.js
- Express

## Instalación

Requiere tener [Node.js](https://nodejs.org/) v16.13.2 instalado o superior.

Requiere tener Angular instalado para hacer ejecuciones con comando `ng`.

### 🤖 Back 
Abriremos una consola dentro de la carpeta "Back - API - Node" y ejecutaremos:

```sh
npm install
node index.js
```

Si todo marcha bien deberíamos tener un mensaje en la consola que está corriendo el servicio en localhost:3000

### 🎨 Front
Abriremos una consola dentro de la carpeta "Front - Angular" y ejecutaremos:

```sh
npm install
ng serve
```

Si todo marcha bien deberíamos tener un mensaje satisfactorio y tendremos nuestro front corriendo en localhost:4200

##### Consideraciones y comentarios
Básicamente al levantar el front y el back, va a ocurrir muy rápido los cambios y las operaciones, así que una vez se vea el funcionamiento principal, pueden bajar la API y refrescar el front para ver cómo se comporta cuando no tiene una respuesta del servidor.

######  🌐 Página web http://leonelveliz.com/
