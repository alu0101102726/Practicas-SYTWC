import React from "react"
import GoodCat from "../components/goodCat"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"

const GoodCatPage = () => (
    <Layout>
        <SEO title="Good Cats" />
        <h1 tabIndex="0" aria-level="1"> El lado luminoso de los gatos </h1>
        <StaticQuery tabIndex="0"
            query = { graphql`
                query GoodCatQuery {
                    allGoodCatJson {
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
    </Layout>
)

function GetGoodCat(info) {
    const auxArray = []
    info.allGoodCatJson.edges.forEach(item => {
        auxArray.push(<GoodCat tabIndex="0"
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