class customElementName extends HTMLElement {

    static get observedAttributes() {
        return ['style'];
    }

    constructor() {
        super();

        document.getElementById("INFO").innerHTML="";

        let nameCur = document.createElement("p");
        nameCur.innerHTML = "Nombre del curso: ";
        nameCur.style = "color: white;";

        let nameEvent = document.createElement("p");
        nameEvent.innerHTML = "Nombre del evento: ";
        nameEvent.style = "color: white;";

        let dateEvent = document.createElement("p");
        dateEvent.innerHTML = "Fecha del evento: ";
        dateEvent.style = "color: white;";

        let descEvent = document.createElement("p");
        descEvent.innerHTML = "Descripcion del evento: ";
        descEvent.style = "color: white;";

        let timeEvent = document.createElement("p");
        timeEvent.innerHTML = "Duración del evento: ";
        timeEvent.style = "color: white;";


        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(nameEvent);
        shadow.appendChild(nameCur);
        shadow.appendChild(dateEvent);
        shadow.appendChild(descEvent);
        shadow.appendChild(timeEvent);
    }

    connectedCallback() {
        console.log("Adjuntado al DOM");
    }

    disconnectedCallback() {
        console.log("Separado del DOM");
    }

    adoptedCallback() {
        console.log("Creado");
    }

    attributeChangedCallback() {
        console.log("Atributo cambiado");
    }

};

var addNameCur = document.getElementById("addWebcomp");
addNameCur.innerHTML = "Añadir webcomponent";
addNameCur.style = "color: black;";
addNameCur.onclick = function () {
    webcomp = document.createElement('custom-element-event');
    document.getElementById("INFO").appendChild(webcomp);
}
customElements.define('custom-element-event', customElementName);
console.log("Script cargado");
