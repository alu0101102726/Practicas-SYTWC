import React from "react"

function EvilCats() {

    fetch('http://jsonstub.com/evilCats', {
        method: "GET", 
        "headers": {
            'Content-Type': 'application/json',
            'JsonStub-User-Key': '9ba215cc-e27e-4fac-9d92-691e42bbe4c7',
            'JsonStub-Project-Key': '67e794d4-7b2e-4bb8-ac3c-db50bdb9796d'
        }
    })
    .then(response => response.json())
    .then(data => {
        return (
            <div style={{
                border: "10px solid #3EC483",
                background: "#5DEAA8",
                padding: "10px",
                margin: "10px"
            }}>
                <p id="text">
                    {data}
                <br/>
                <hr/>
                
                </p>            
            </div>
        )
    })
}


export default EvilCats