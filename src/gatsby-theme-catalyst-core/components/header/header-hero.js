/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { NavContext } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

const SiteWelcome = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-person.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
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
      return "60vh"
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return "100vh"
    } else {
      return "auto"
    }
  }

  const [isOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)

  if (isHome) {
    return (
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          zIndex: "1",
          display: isOpen ? "none" : "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 3,
          height: welcomeHeight,
          backgroundColor: "accent",
          px: 3,
          py: [5, null, null, 0, null],
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
              fontSize: [6, null, null, 7, null],
              fontFamily: "alt",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            "Only connect" - E.M. Forster
          </h1>
          <p>
            I’m an Alberta-based freelance writer who loves pulling at loose
            threads to see what unravels — and then making sense of the mess. I
            often cover climate, LGBTQ2S+ issues, mental health, and parenting,
            but the threads can lead anywhere. You can find my work on HuffPost
            Canada, TVO, The New York Times, Xtra, Today’s Parent, and more.
          </p>
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "auto",
              gridGap: ["1rem", null, null, "2rem", null],
              pt: 3,
            }}
          >
            <Link
              sx={{
                gridColumn: "1 / 2",
                justifySelf: "start",
                appearance: "none",
                width: "auto",
                bg: "primary",
                color: "textWhite",
                display: "inline-block",
                textAlign: "center",
                lineHeight: "inherit",
                textDecoration: "none",
                fontSize: "85%",
                m: 0,
                px: "0.8rem",
                py: "0.5rem",
                borderColor: "primary",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: 4,
                letterSpacing: "1px",
                transition: "all 0.3s ease 0s",
                "::after": {
                  content: '"\\00A0 \\2192"',
                },
                ":hover": {
                  bg: "secondary",
                  borderColor: "secondary",
                },
              }}
              to="/work"
            >
              Published Work
            </Link>
            <Link
              sx={{
                gridColumn: "2 / 3",
                justifySelf: "start",
                appearance: "none",
                width: "auto",
                bg: "transparent",
                color: "primary",
                display: "inline-block",
                textAlign: "center",
                lineHeight: "inherit",
                textDecoration: "none",
                fontSize: "85%",
                m: 0,
                px: "0.8rem",
                py: "0.5rem",
                borderColor: "primary",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: 4,
                letterSpacing: "1px",
                transition: "all 0.3s ease 0s",
                "::after": {
                  content: '"\\00A0 \\2192"',
                },
                ":hover": {
                  borderColor: "secondary",
                  color: "secondary",
                },
              }}
              to="/bio"
            >
              Bio
            </Link>
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
          fluid={data.hero.childImageSharp.fluid}
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
