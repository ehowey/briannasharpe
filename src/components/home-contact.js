/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    {
      sanityHomePage {
        contactTitle
        _rawContactText
      }
      headshot: file(relativePath: { eq: "bri-headshot.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 768, layout: CONSTRAINED)
        }
      }
    }
  `)
  const result = data.sanityHomePage
  return (
    <Fragment>
      <Themed.h2>{result.contactTitle}</Themed.h2>
      <GatsbyImage
        image={data.headshot.childImageSharp.gatsbyImageData}
        sx={{
          height: ["120px", "200px", "250px", null, null],
          width: ["100%", "200px", "250px", null, null],
          borderRadius: "4px",
          float: "left",
          mr: [0, 3, null, null, null],
          mb: [3, 0, null, null, null],
        }}
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
