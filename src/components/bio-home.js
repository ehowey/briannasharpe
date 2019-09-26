/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "images/headshot.jpg" }) {
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
        mb: 5,
      }}
    >
      <Img
        sx={{
          height: ["250px", "auto", "auto"],
          width: ["100%", "250px", "300px"],
          float: ["none", "left", "left"],
          mr: 3,
          mb: 2,
          mt: [3, 2, 2],
        }}
        fluid={data.headshot.childImageSharp.fluid}
        alt="Brianna Sharpe"
      />
      <Styled.p
        sx={{
          "::first-letter": {
            fontWeight: "bold",
            fontFamily: "alt",
            fontSize: 8,
            float: "left",
            mt: "-8px",
            pr: "8px",
            lineHeight: "65px",
          },
        }}
      >
        Quis enim lobortis scelerisque fermentum dui faucibus in. Sodales ut
        etiam sit amet. Diam vulputate ut pharetra sit. Eget sit amet tellus
        cras. Malesuada proin libero nunc consequat interdum varius. Egestas
        quis ipsum suspendisse ultrices gravida dictum fusce. Nulla aliquet enim
        tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero
        volutpat. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra
        justo. Condimentum lacinia quis vel eros donec ac odio. Arcu felis
        bibendum ut tristique et egestas quis ipsum suspendisse. Egestas pretium
        aenean pharetra magna ac placerat.
      </Styled.p>
      <ButtonInternal to="/bio" text="Full Bio" variant="small" />
    </div>
  )
}

export default Bio
