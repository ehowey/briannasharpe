/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ButtonPrimary from "gatsby-theme-catalyst-hydrogen/src/components/button-primary"
import ButtonSecondary from "gatsby-theme-catalyst-hydrogen/src/components/button-secondary"
import { SanityContent, useSanityConfig } from "gatsby-theme-catalyst-sanity"
import { getGatsbyImageData } from "gatsby-source-sanity"

const SiteWelcome = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        heroTitle
        _rawHeroText
        heroImage {
          asset {
            gatsbyImageData(
              width: 900
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)

  const { sanityConfig } = useSanityConfig()

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

  const hero = data.sanityHomePage
  const heroImage = data.sanityHomePage.heroImage.asset.gatsbyImageData

  return (
    <section
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
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
          pt: [0, null, null, 5, null],
          pb: [4, null, null, 5, null],
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
              fontSize: [5, 6, null, null, null],
              fontFamily: "alt",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            {hero.heroTitle}
          </h1>
          <div sx={{ mt: 0, mb: 4 }}>
            <SanityContent data={hero._rawHeroText} />
          </div>
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
        <GatsbyImage
          image={heroImage}
          sx={{
            gridColumn: ["1 / -1", null, null, "1 / 2", null],
            gridRow: "1 / 2",
            alignSelf: "center",
            height: "100%",
            width: "auto",
            zIndex: 1,
            opacity: ["0.2", null, null, "1", null],
            maxHeight: ["auto", "80vh", "70vh", "70vh", null],
          }}
          alt="Person with shapes and colors from head"
          imgStyle={{ objectFit: "contain" }}
          loading="eager"
        />
      </div>
    </section>
  )
}

export default SiteWelcome
