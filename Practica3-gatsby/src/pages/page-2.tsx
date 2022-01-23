// Gatsby supports TypeScript natively!
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Oh, has llegado a la segunda página</h1>
    <p>Bienvenido seas a la página 2</p>
    <StaticImage
      src="../images/cat-force.jpg"
      alt="programmer cat"
    />
    <p>Que la fuerza te acompañe</p>
    <Link to="/">Vuelve a la página inicial</Link>
  </Layout>
)

export default SecondPage
