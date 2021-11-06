# Practicas-SYTWC

<br />
<p align="center">

  <h3 align="center">README PRÁCTICA WEB COMPONENT </h3>

  <p align="center">
    Readme de la práctica de gulp y landing page
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-sass"><strong>Práctica 1 - SASS »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-gulp"><strong>Práctica 1 - GULP »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica2-webcomponent"><strong>Práctica 2 - WEB COMPONENTS »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/issues">Issues</a>
    ·
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Ciclo-de-vida">Ciclo de vida</a></li>
    <li><a href="#Web Component">Web Component</a></li>
  </ol>
</details>

## Ciclo de vida
El objetivo de esta parte de la tarea es crear una página con un Web Component simple que permita verificar el ciclo de vida de una web component a través de la consola. En cada estado del web component mostrará un mensaje en consola cuando se active la función de callback pertinente: Adjuntado al DOM, Separado del DOM, cambio en los atributos. Mencionar que para ambos se usó el mismo Web Component. Para hacer esto posible, en la clase que va a definir nuestro custom element, se le ha añadido:
```js
    connectedCallback() {
        console.log("Adjuntado al DOM");
    }

    disconnectedCallback() {
        console.log("Separado del DOM");
    }

    attributeChangedCallback() {
        updateStyle(this);
        console.log("Atributo cambiado");
    }
```
Con estas funciones, se obtendrá la información de cuando se separa del DOM, o cuando se adjunta, incluso cuando se realiza un cambio en alguno de los atributos. Ya con esta parte tendríamos hecha la comprobación del ciclo de vida de nuestro web component.

## Web Component
Para poder realizar esta sección fue necesario ayudarse de Jsonstub y así poder pedir información almacenada ahí. Para ello se creó una response de tipo GET, con la que se iba a definir un array de 3 cursos diferentes. A continuación se muestra un ejemplo de un curso:
```json
{
    "name": "HTML, CSS, and Javascript for Web Developers",
    "event": "Curse",
    "level": "Mixed",
    "image": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
    "description": "bla bla bla...",
    "duration": "40 hours",
    "date": "6 November"
}
```
Ya con los datos ya creados, lo siguiente era poder hacer un fetch, para poder recoger dichos datos y mostrarlos en nuestro programa. Entonces se implementó lo siguiente:
```js
fetch('http://jsonstub.com/cursos', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "JsonStub-User-Key": '9ba215cc-e27e-4fac-9d92-691e42bbe4c7',
                "JsonStub-Project-Key": '67e794d4-7b2e-4bb8-ac3c-db50bdb9796d'
            }
        })
```
Ya con los datos, cuando la carga fuera correcta lo siguiente sería ir recorriendo cada curso dentro del array y sus propiedades, e ir insertándolas en un div que luego se añadiría cuando se pulsara un botón en nuestra página html. Se tuvo que comprobar si la propiedad que se había leido era una imagen para poder asignarla, dado que en nuestro json la imagen se daba a partir de un link. Lo que hubo que hacer para finalizar fue definir nuestro custom element y añadirlo:
```js
let addNameCur = document.getElementById("addWebcomp");
addNameCur.innerHTML = "Añadir webcomponent";
addNameCur.style = "color: black;";
addNameCur.onclick = function () {
    webcomp = new customElementName();
    document.getElementById("INFO").appendChild(webcomp);
}
customElements.define('custom-element-event', customElementName);
```

