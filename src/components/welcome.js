/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

const SiteWelcome = props => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "images/flowers-lg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      headshot: file(relativePath: { eq: "images/headshot-bri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rainbow: file(relativePath: { eq: "images/smokerainbow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div
      sx={{
        display: "grid",
        marginBottom: 5,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "90vh",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      <div
        sx={{
          gridColumn: "2 / 3",
          gridRow: "1 / 2",
          alignSelf: "center",
          justifySelf: "center",
          mr: 4,
        }}
      >
        <h1
          sx={{
            fontSize: 7,
            fontFamily: "alt",
          }}
        >
          {props.title}
        </h1>
        <h2
          sx={{
            fontSize: 5,
            fontFamily: "text",
          }}
        >
          {props.subtitle}
        </h2>
        <ButtonInternal to="/published-work" text="Published Work" />
      </div>

      <Img
        sx={{
          gridColumn: " 1 / 2",
          gridRow: "1 / 2",
          height: "100%",
          width: "auto",
        }}
        fluid={data.flower.childImageSharp.fluid}
        alt="Watercolor Flowers"
        imgStyle={{ objectFit: "contain", objectPosition: "left top" }}
      />
    </div>
  )
}

export default SiteWelcome
