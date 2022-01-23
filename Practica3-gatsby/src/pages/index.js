import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EVENT from "../components/event"
import EvilCats from "../components/evilCat"

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
    <br/>
    <Link to="/evilCat"> LADO OSCURO </Link>
    <br/>
    <Link to="/goodCat"> LADO LUMINOSO </Link>
    <EVENT name="Guerra de la Independencia Española" date="1808 y 1814" description="Descripcion: La guerra de la Independencia Española fue un conflicto bélico que se dio entre 1808 y 1814 dentro del contexto de las guerras napoleónicas, que enfrentó a las potencias aliadas de España, Reino Unido y Portugal contra el Primer Imperio francés, cuya pretensión era la de instalar en el trono español al hermano de Napoleón, José Bonaparte, tras las abdicaciones de Bayona.

La guerra de la Independencia, también conocida en español como la francesada,b​ Guerra Peninsular,6​ Guerra de España,6​ Guerra del Francés,6​ Guerra de los Seis Años6​ o «levantamiento y revolución de los españoles»,6​ se solapa y confunde con lo que la historiografía anglosajona llama Peninsular War (Guerra Peninsular), iniciada en 1807 al declarar Francia y España la guerra a Portugal, tradicional aliado del Reino Unido. También tuvo un importante componente de guerra civil a nivel nacional entre afrancesados y patriotas. El conflicto se desarrolló en plena crisis del Antiguo Régimen y sobre un complejo trasfondo de profundos cambios sociales y políticos impulsados por el surgimiento de la identidad nacional española y la influencia en el campo de los «patriotas» de algunos de los ideales nacidos de la Ilustración y la Revolución francesa, paradójicamente difundidos por la élite de los afrancesados. Con motivo del bicentenario de la Guerra de la Independencia, Frigdiano Álvaro Durántez Prados puso en tela de juicio dicho nombre, ya que no se trata de un conflicto de carácter independentista, según el carácter que se le ha ido dando a estas conflagraciones, y propuso la denominación Guerra de 1808 o Guerra Peninsular"/>
  </Layout>

)

export default IndexPage
