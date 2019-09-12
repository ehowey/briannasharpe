/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityLogos(filter: { featured: { eq: true } }) {
        nodes {
          altText
          link
          logo {
            asset {
              fixed(width: 100, height: 100) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  `)
  const logos = data.allSanityLogos.nodes
  return (
    <div
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {logos.map(logo => (
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <Img
            sx={{
              filter: "grayscale(1)",
              mr: 4,
              mb: 4,
              transition: "all 0.3s ease 0s",
              ":hover": {
                filter: "grayscale(0)",
              },
            }}
            fixed={logo.logo.asset.fixed}
            alt={logo.altText}
          />
        </a>
      ))}
    </div>
  )
}

export default LogoList
