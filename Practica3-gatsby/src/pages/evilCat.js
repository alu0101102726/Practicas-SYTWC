import React from "react"
import EvilCat from "../components/evilCat"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"

const EvilCatPage = () => (
    <Layout>
        <SEO title="Evil Cats" />
        <h1> El lado oscuro de los gatos </h1>
        <StaticQuery 
            query = { graphql`
                query EvilCatQuery {
                    allEvilCatJson {
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
                <div> { GetEvilCat(info) } </div>
            )}
        />        
    </Layout>
)

function GetEvilCat(info) {
    const auxArray = []
    info.allEvilCatJson.edges.forEach(item => {
        auxArray.push(<EvilCat
                        name = {item.node.name}
                        planeta_natal = {item.node.planeta_natal}
                        especie = {item.node.especie}
                        estatura = {item.node.estatura}
                        afiliacion = {item.node.afiliacion}
                        imagen = {item.node.imagen}
                      >
                      </EvilCat>)
    })
    return auxArray;
}

export default EvilCatPage;