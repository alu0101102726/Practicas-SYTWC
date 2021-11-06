const axios = require('axios').default;

class customElementName extends HTMLElement {

    static get observedAttributes() {
        return ['style'];
    }

    constructor() {
        
        super();

        const options = {
            uri: 'http://jsonstub.com/cursos',
            json: true,
            data: {
               JsonStubUserKey: '9ba215cc-e27e-4fac-9d92-691e42bbe4c7',
               JsonStubProjectKey: '67e794d4-7b2e-4bb8-ac3c-db50bdb9796d'
            }
        }

        document.getElementById("INFO").innerHTML="";
        const shadow = this.attachShadow({ mode: 'closed' });

        axios.get(options.uri)
            .then(function (response) {
                response.forEach(element => {
                    for (const key in element) {
                        let nameCur = document.createElement("p");
                        nameCur.innerHTML = element.name;
                        nameCur.style = "color: white;";
                        shadow.appendChild(nameCur);
                    }
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

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
