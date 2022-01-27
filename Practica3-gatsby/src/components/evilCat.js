import React from "react"
import PropTypes from "prop-types"
import {card, container} from "./container.module.css"

function EvilCat({name, planeta_natal, especie, estatura, afiliacion, imagen}) {
    const imageName = "imagen" + name
    return (
        <div className={card} tabIndex="0" aria-label="Gato Malvado">
            <img src={imagen} alt={imageName}></img>
            <div className={container}>
                <p tabIndex="0"> Es un {especie} y nacío en {planeta_natal}. Tiene una estatura de {estatura}  y 
                    su afiliación es {afiliacion}
                </p>
                <br/>
            </div>
            <br/>
        </div>
    )
}

EvilCat.propTypes = {
    name: PropTypes.string,
    planeta_natal: PropTypes.string,
    especie: PropTypes.string,
    estatura: PropTypes.string,
    afiliacion: PropTypes.string,
    image: PropTypes.string
}

export default EvilCat;