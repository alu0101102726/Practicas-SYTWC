import React from "react"

function Event({name, date, description}) {
    return (
        <div style={{
            border: "10px solid #3EC483",
            background: "#5DEAA8",
            padding: "10px",
            margin: "10px"
        }}>
            <p id="text">
                {name}: {date}
            <br/>
            <hr/>
                Descripcion: {description} 
            
            </p>            
        </div>
    )
}


export default Event