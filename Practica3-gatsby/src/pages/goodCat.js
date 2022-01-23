import React from "react"
import GoodCat from "../components/goodCat"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as containerStyles from "../components/container.module.css"

import { StaticQuery, graphql } from "gatsby"

const GoodCatPage = () => (
    <Layout>
        <SEO title="Good Cats" />
        <h1> El lado luminoso de los gatos </h1>
        <div className={containerStyles.cards}>
            <div>
                <StaticQuery
                    query = { graphql`
                        query GoodCatQuery {
                            allDataJson {
                                edges {
                                    node {
                                        name
                                        planeta_natal
                                        especie
                                        estatura
                                        afiliacion
                                        imagen
                                    }
                                }
                            }
                        }
                    `            
                    }

                    render = { info => (
                        <div> { GetGoodCat(info) } </div>
                    )}
                />    
            </div>            
        </div>
        
    </Layout>
)

function GetGoodCat(info) {
    const auxArray = []
    info.allDataJson.edges.forEach(item => {
        auxArray.push(<GoodCat
                        name = {item.node.name}
                        planeta_natal = {item.node.planeta_natal}
                        especie = {item.node.especie}
                        estatura = {item.node.estatura}
                        afiliacion = {item.node.afiliacion}
                        imagen = {item.node.imagen}
                      >
                      </GoodCat>)
    })
    return auxArray;
}

export default GoodCatPage;