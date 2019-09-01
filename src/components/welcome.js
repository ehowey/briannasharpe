/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

const SiteWelcome = props => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "images/flowers-sq-lg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      headshot: file(relativePath: { eq: "images/headshot.jpg" }) {
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
        gridTemplateColumns: "15% 15% 15% 55%",
        gridTemplateRows: "50vh",
      }}
    >
      <h1
        sx={{
          gridColumn: "4 / 5",
          gridRow: "1 / 2",
          alignSelf: "center",
          justifySelf: "center",
          textAlign: "center",
          fontSize: 7,
          fontFamily: "alt",
          zIndex: "5",
        }}
      >
        {props.text}
      </h1>
      <Img
        sx={{
          gridColumn: " 1 / 3",
          gridRow: "1 / 2",
          height: "100%",
          width: "auto",
        }}
        fluid={data.headshot.childImageSharp.fluid}
        alt="Headshot of writer"
      />
      <Img
        sx={{
          gridColumn: " 4 / 5",
          gridRow: "1 / 2",
          height: "100%",
          width: "auto",
          zIndex: "3",
          opacity: "0.25",
        }}
        fluid={data.rainbow.childImageSharp.fluid}
        alt="Rainbow"
        imgStyle={{ objectFit: "contain" }}
      />
    </div>
  )
}

export default SiteWelcome
