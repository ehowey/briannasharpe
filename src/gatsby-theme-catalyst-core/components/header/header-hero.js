/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useState, useEffect, useCallback, useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { useTransition, animated } from "react-spring"
import Img from "gatsby-image"
import { NavContext } from "gatsby-theme-catalyst-core"

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

  const [open] = useContext(NavContext)

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

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }

  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
    },
    enter: [{ opacity: 1 }],
    leave: [{ opacity: 0 }],
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(["power."]), 0))
    ref.current.push(setTimeout(() => set(["beauty."]), 2000))
    ref.current.push(setTimeout(() => set(["coffee."]), 4000))
    ref.current.push(setTimeout(() => set(["identity."]), 6000))
    ref.current.push(setTimeout(() => set(["change."]), 8000))
  }, [])
  // eslint-disable-next-line
  useEffect(() => void reset(), [])

  if (!is_root) {
    return null
  } else {
    return (
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          zIndex: "1",
          display: open ? "none" : "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          height: welcomeHeight,
          backgroundColor: "accent",
          px: 3,
          py: [5, null, 0, null, null],
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", null, "2 / 3", null, null],
            gridRow: "1 / 2",
            alignSelf: "center",
            justifySelf: "center",
            zIndex: "5",
            maxWidth: "maxContentWidth",
            mx: [0, 0, 3, null, null],
          }}
        >
          <h1
            sx={{
              fontSize: [6, null, 7, null, null],
              fontFamily: "alt",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            Writing about&nbsp;
            {transitions.map(
              ({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div
                  className="transitions-item"
                  key={key}
                  style={{
                    position: "absolute",
                    display: "inline-block",
                    ...rest,
                  }}
                >
                  {item}
                </animated.div>
              )
            )}
          </h1>
          <p>
            I’m an Alberta based essayist and journalist who loves pulling at
            loose threads to see what unravels — and then making sense of the
            mess. I often cover climate, LGBTQ2S+ issues, mental health, and
            parenting, but the threads can lead anywhere. You can find my work
            on HuffPost Canada, TVO, The New York Times, Xtra, Today’s Parent,
            and more.
          </p>
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "auto",
              gridGap: ["1rem", null, "2rem", null, null],
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
            gridColumn: ["1 / -1", "1 / -1", "1 / 2", null, null],
            gridRow: "1 / 2",
            alignSelf: "center",
            height: "100%",
            width: "auto",
            zIndex: 1,
            opacity: ["0.2", "0.2", "1", null, null],
            maxHeight: "70vh",
          }}
          fluid={data.hero.childImageSharp.fluid}
          alt="Person with shapes and colors from head"
          imgStyle={{ objectFit: "contain" }}
          loading="eager"
        />
      </div>
    )
  }
}

export default SiteWelcome
