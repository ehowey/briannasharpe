/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "bri-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      sx={{
        height: ["150px", "200px", null],
        width: ["100%", "200px", null],
        float: "left",
        mr: [0, 3, null],
        mb: [3, 0, null],
      }}
      fluid={data.headshot.childImageSharp.fluid}
      alt="Brianna Sharpe"
    />
  )
}

export default Headshot
