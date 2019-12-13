/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SanityContent from "gatsby-theme-catalyst-writer/src/components/sanity/sanity-content"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        contactTitle
        _rawContactText
      }
      headshot: file(relativePath: { eq: "bri-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const result = data.sanityHomePage
  return (
    <Fragment>
      <Styled.h2>{result.contactTitle}</Styled.h2>
      <Img
        sx={{
          height: ["150px", "200px", "250px", null, null],
          width: ["100%", "200px", "250px", null, null],
          float: "left",
          mr: [0, 3, null, null, null],
          mb: [3, 0, null, null, null],
        }}
        fluid={data.headshot.childImageSharp.fluid}
        alt="Headshot of Brianna Sharpe"
      />
      <div
        sx={{
          flex: "2",
          "p:first-of-type": {
            mt: 0,
          },
        }}
      >
        <SanityContent data={result._rawContactText} />
      </div>
    </Fragment>
  )
}

export default HomeContact
