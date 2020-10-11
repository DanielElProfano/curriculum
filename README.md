# Proyecto-Js | My Cv

Hola upgraders! ha llegado el momento de aplicar todo el conocimiento adquirido a lo largo de estas tres sesiones. Para ello realizaremos un proyecto guiado en el que desarrollaremos un Cv totalmente interactivo.

Para ello vamos a explicaros el proceso que vamos a seguir:

1. Lo primero como siempre será **clonarnos** el **proyecto** base en gitlab:
2. Crearemos una **rama** con nuestro nombre algo como '**nombre_apellido**'.
3. Este proyecto tiene una base con Webpack que nos permitirá hacer **uso de imports e exports, ES6, SASS**... **No** entraremos en **explicar** con profundidad **Webpack** pero si tenéis interés no dudéis en preguntar.
4. Tendremos varios **ficheros**:
    1. **Index.html** → será el **html de nuestra aplicación**.
    2. La carpeta **Styles** → fichero con **estilos global**.
    3. **Index.js** → Será nuestro **controlador**, en el que añadiremos los **eventos** y la **interacción** definida en los **diferentes ficheros .js**.
    4. Carperta **Scripts** → Que contiene toda la lógica de nuestra aplicación.
        1. Personal-Info: **Objeto** con la información personal.
        2. Experience: **Array de Objetos** con nuestra experiencia laboral.
        3. Studies: **Array de Objetos** con nuestros estudios.
        4. Skills: **Array de Objetos**  con las habilidades adquiridas a lo largo del Bootcamp.
        5. Languages: **Array de Objetos** con los idiomas que hablamos.

Una vez entendida la estructura de la aplicación empezaremos definiendo los **objetos** con los que vamos a trabajar y después importarlos en el fichero **index.js**. Será algo como:

```jsx
var languages = [
  {
    nameEstudies: "Inglés",
    certification: "Universidad de Cambridge",
    knowledge: ["ABC", "ABC", "ABC"],
    start: 2015,
    end: 0,
  },
  {
    nameEstudies: "Inglés",
    certification: "Universidad de Cambridge",
    knowledge: ["ABC", "ABC", "ABC"],
    start: 2019,
    end: 2020,
  },
];
// Aquí los eventos o métodos asociados a los idiomas
export { languages };
```

y para importarlo en el **index.js**:

```jsx
import { languages } from './scripts/languages';
```

De tal modo que si hacemos un ***console.log(languages)*** en el **index.js** pintaría por consola languages. Pero no vayamos tan rápido...

Para arrancar nuestro proyecto debemos hacer lo siguiente → Ejecutar estos comando ene la consola posicionados en el proyecto:

```bash
npm i 
// Instala las dependencias -> Node modules
npm run build
// Nos compila el código en la carpeta Build
npm run dev
// Abre nuestro proyecto en Chrome -> localhost:4000
```

Vale ahora podemos continuar con las especificaciones de nuestro proyecto:

1. Una vez definido los objetos → vamos a empezar a pintar la información. En cada uno de los ficheros tendremos una función onLoad...'nombreFichero' para pintar en el Dom desde el **index.js.**
2. Una vez que tengamos toda la información añadiremos varios eventos en una navbar → cuando clickes en alguno de los elementos de la navbar hará scroll hasta el contenido anteriormente pintado.

```jsx
//Index.js

var addListeners = () =>{
    document.getElementById('goToExperience').addEventListener('click', scrollToExperience);
}

window.onload = function () {
	scrollToExperience();
	addListeners();
}
```

```jsx
var scrollToExperience = () => {
  let elementExperience = document.getElementById('container-experience');
  elementExperience.scrollIntoView();
}
```

Además de estos eventos os animamos a que uséis algunos como el mouseover, mouseout, change...  Pero como os hemos dicho este proyecto está guiado, no os dejaremos solos en esta andadura sino que junto a vosotros iremos resolviendo todos los problemas que nos vayamos encontrado en cada sesión.

Espero que no os conforméis con los ejemplos de clase y le deis caña añadiendo nueva funcionalidad a nuestro Cv.

A tope chic@s! Ya solamente nos queda decir **Happy Coding!** 

![https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/source.gif](https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/source.gif)