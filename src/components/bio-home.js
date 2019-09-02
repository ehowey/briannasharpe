/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div>
      <Styled.h2>About Me</Styled.h2>
      <Img
        sx={{
          height: "auto",
          width: "250px",
          float: "left",
          mr: 3,
          mb: 1,
          mt: 3,
        }}
        fluid={data.headshot.childImageSharp.fluid}
        alt="Brianna Sharpe"
        imgStyle={{ objectFit: "contain", objectPosition: "left top" }}
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
    </div>
  )
}

export default Bio
