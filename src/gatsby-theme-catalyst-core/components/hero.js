/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { NavContext } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { ButtonPrimary } from "gatsby-theme-catalyst-writer"
import { ButtonSecondary } from "gatsby-theme-catalyst-writer"

const SiteWelcome = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        heroTitle
        heroText
        heroImage {
          asset {
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const welcomeHeight = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(orientation: portrait)").matches &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      return "50vh"
    } else {
      return "auto"
    }
  }

  const [isOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)
  const hero = data.sanityHomePage

  if (isHome) {
    return (
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          zIndex: "1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 3,
          height: welcomeHeight,
          backgroundColor: "accent",
          px: 3,
          py: 5,
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", null, null, "2 / 3", null],
            gridRow: "1 / 2",
            alignSelf: "center",
            justifySelf: "center",
            zIndex: "5",
            maxWidth: "maxContentWidth",
            mx: [0, null, null, 3, null],
          }}
        >
          <h1
            sx={{
              fontSize: 6,
              fontFamily: "alt",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            {hero.heroTitle}
          </h1>
          <p>{hero.heroText}</p>
          <div
            sx={{
              display: "grid",
              gridGap: [3, 4, null, null, null],
              gridTemplateColumns: ["auto", "auto auto 1fr", null, null, null],
              justifyItems: ["stretch", "start", null, null, null],
            }}
          >
            <ButtonPrimary to="/work">Published Work</ButtonPrimary>
            <ButtonSecondary to="/bio">Bio</ButtonSecondary>
          </div>
        </div>

        <Img
          sx={{
            gridColumn: ["1 / -1", null, null, "1 / 2", null],
            gridRow: "1 / 2",
            alignSelf: "center",
            height: "100%",
            width: "auto",
            zIndex: 1,
            opacity: ["0.2", null, null, "1", null],
            maxHeight: ["100vh", null, null, "70vh", null],
          }}
          fluid={hero.heroImage.asset.fluid}
          alt="Person with shapes and colors from head"
          imgStyle={{ objectFit: "contain" }}
          loading="eager"
        />
      </div>
    )
  } else {
    return null
  }
}

export default SiteWelcome
