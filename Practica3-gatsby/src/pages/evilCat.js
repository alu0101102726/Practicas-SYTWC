import React from "react"
import EvilCat from "../components/evilCat"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"

const EvilCatPage = () => (
    <Layout>
        <SEO title="Evil Cats" />
        <StaticQuery
            query = { graphql`
                query EvilCatQuery {
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
                <div> { GetEvilCat(info) } </div>
            )}
        />    
    </Layout>
)

function GetEvilCat(info) {
    const auxArray = []
    info.allDataJson.edges.forEach(item => {
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