import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Oh no, esto no existe, VUELVE A INTENTARLO :D</p>
      <StaticImage
        src="../images/notfound.jpg"
        alt="programmer cat"
      />
  </Layout>
)

export default NotFoundPage
