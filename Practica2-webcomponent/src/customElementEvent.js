class customElementName extends HTMLElement {

    static get observedAttributes() {
        return ['style'];
    }

    constructor() {
        
        super();
        this.style = "red";

        document.getElementById("INFO").innerHTML="";
        
        const shadow = this.attachShadow({ mode: 'open' });

        fetch('http://jsonstub.com/cursos', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "JsonStub-User-Key": '9ba215cc-e27e-4fac-9d92-691e42bbe4c7',
                "JsonStub-Project-Key": '67e794d4-7b2e-4bb8-ac3c-db50bdb9796d'
            }
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                var newDiv = document.createElement("div");
                newDiv.className = "section";
                newDiv.style = "margin: 1rem; padding: 1rem; text-align: center; border: 1px solid #ccc; border-radius: 25px; background-color: #515c66; box-shadow: 3px 7px;";
                for (const key in element) {
                    if(key == "image") {
                        let img = document.createElement("img");
                        img.src = element[key]
                        newDiv.appendChild(img);
                    }
                    else {
                        let title = document.createElement("h2");
                        title.innerHTML = key ;
                        title.style = "color: orange;";
                        let nameCur = document.createElement("p");
                        nameCur.innerHTML = element[key];
                        nameCur.style = "color: white;";
                        newDiv.appendChild(title);
                        newDiv.appendChild(nameCur);
                    }
                }
                shadow.appendChild(newDiv);
            });           
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    connectedCallback() {
        console.log("Adjuntado al DOM");
    }

    disconnectedCallback() {
        console.log("Separado del DOM");
    }

    attributeChangedCallback(name) {
        console.log('attribute changed callback being executed now');
        if (name === 'style') {
            console.log("Atribute changed");
        }
    }

};

let addNameCur = document.getElementById("addWebcomp");
addNameCur.innerHTML = "Añadir webcomponent";
addNameCur.style = "color: black;";
addNameCur.onclick = function () {
    webcomp = new customElementName();
    document.getElementById("INFO").appendChild(webcomp);
}
customElements.define('custom-element-event', customElementName);
console.log("Script cargado");
