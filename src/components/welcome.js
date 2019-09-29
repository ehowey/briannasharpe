/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"
import { useThemeUI } from "theme-ui"

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
    }
  `)
  const { theme } = useThemeUI()

  const welcomeHeight = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(orientation: portrait)").matches
    ) {
      return "50vh"
    } else if (typeof window !== "undefined") {
      return (
        window.innerHeight - parseInt(theme.sizes.headerHeightLaptop) + "px"
      )
    } else {
      return "70vh"
    }
  }
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: ["60vh", "50vh", welcomeHeight()],
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 5,
        mt: [0, 0, "-4rem"],
      }}
    >
      <div
        sx={{
          gridColumn: ["1 / -1", "1 / -1", "2 / 3"],
          gridRow: "1 / 2",
          alignSelf: "center",
          justifySelf: "center",
          zIndex: "5",
          m: [4, 4, 5],
          maxWidth: "maxContentWidth",
        }}
      >
        <h1
          sx={{
            fontSize: [6, 7, 7],
            fontFamily: "alt",
          }}
        >
          {props.title}
        </h1>
        <h2
          sx={{
            fontSize: [4, 5, 5],
            fontFamily: "text",
          }}
        >
          {props.subtitle}
        </h2>
        <ButtonInternal
          to="/published-work"
          text="Published Work"
          variant="primary"
        />
      </div>

      <Img
        sx={{
          gridColumn: ["1 / -1", "1 / -1", "1 / 2"],
          gridRow: "1 / 2",
          alignSelf: "center",
          height: "100%",
          width: "auto",
          zIndex: 1,
          opacity: ["0.2", "0.2", "1"],
        }}
        fluid={data.flower.childImageSharp.fluid}
        alt="Watercolor Flowers"
        imgStyle={{ objectFit: "contain", objectPosition: "left" }}
      />
    </div>
  )
}

export default SiteWelcome
