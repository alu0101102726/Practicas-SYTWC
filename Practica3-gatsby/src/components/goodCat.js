import React from "react"
import PropTypes from "prop-types"
import {card, container} from "./container.module.css"

function GoodCat({name, planeta_natal, especie, estatura, afiliacion, imagen}) {
    const imageName = "imagen" + name
    return (
        <div className={card}>
            <img src={imagen} alt={imageName}></img>
            <div className={container}>
                <p> Es un {especie} y nacío en {planeta_natal}. Tiene una estatura de {estatura}  y 
                    su afiliación es {afiliacion}
                </p>
            </div>
            <br/>
        </div>
    )
}

GoodCat.propTypes = {
    name: PropTypes.string,
    planeta_natal: PropTypes.string,
    especie: PropTypes.string,
    estatura: PropTypes.string,
    afiliacion: PropTypes.string,
    image: PropTypes.string
}

export default GoodCat;