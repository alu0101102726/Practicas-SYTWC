import React from "react"
import PropTypes from "prop-types"
import * as containerStyles from "./container.module.css"

function GoodCat({name, planeta_natal, especie, estatura, afiliacion, imagen}) {
    return (
        <div className={containerStyles.card}>
            <img src={imagen} alt={name}></img>
            <div className={containerStyles.container}>
                <h2> {name} </h2>
                <p> {name} es un {especie} y nacío en {planeta_natal}. Tiene una estatura de {estatura}  y 
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