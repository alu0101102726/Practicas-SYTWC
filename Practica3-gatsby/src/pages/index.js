import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EVENT from "../components/event"

const IndexPage = () => (
  <Layout>
    <SEO title="Página principal" />
    <h1>Práctica Gastby</h1>
    <p>Bienvenid@ a esta página en gatsby</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/unnamed.gif"
        alt="programmer cat"
      />
    </div>
    <Link to="/page-2/">Ir a la página 2</Link>
    <br/>
    <Link to="/using-typescript/">Ir a "Using TypeScript"</Link>
    <EVENT name="Guerra de la Independencia Española" date="1808 y 1814" />
  </Layout>

)

export default IndexPage
