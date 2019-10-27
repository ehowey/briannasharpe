/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useState, useEffect, useCallback } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { useTransition, animated } from "react-spring"
import Img from "gatsby-image"

const SiteWelcome = props => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "person.png" }) {
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
      window.matchMedia("(orientation: portrait)").matches
    ) {
      return "50vh"
    } else {
      return "70vh"
    }
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

  useEffect(() => void reset(), [])

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: ["auto", "auto", "auto"],
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        bg: "#eed4cc",
        mb: 5,
        mt: -3,
        p: [3, 3, 5],
      }}
    >
      <div
        sx={{
          gridColumn: ["1 / -1", "1 / -1", "2 / 3"],
          gridRow: "1 / 2",
          alignSelf: "center",
          justifySelf: "center",
          zIndex: "5",
          maxWidth: "maxContentWidth",
          mx: [0, 0, 3],
        }}
      >
        <h1
          sx={{
            fontSize: [6, 7, 7],
            fontFamily: "alt",
          }}
        >
          Words that tell
          <br /> stories about &nbsp;
          {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div
              className="transitions-item"
              key={key}
              style={{ position: "absolute", display: "inline-block", ...rest }}
            >
              {item}
            </animated.div>
          ))}
        </h1>
        <p>{props.subtitle}</p>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto",
            gridGap: "2rem",
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
              fontSize: "inherit",
              fontWeight: "bold",
              m: 0,
              px: 3,
              py: 2,
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
                opacity: "0.8",
              },
            }}
            to="/published-work"
          >
            Publshed Work
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
              fontSize: "inherit",
              fontWeight: "bold",
              m: 0,
              px: 3,
              py: 2,
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
                opacity: "0.8",
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
          gridColumn: ["1 / -1", "1 / -1", "1 / 2"],
          gridRow: "1 / 2",
          alignSelf: "center",
          height: "100%",
          width: "auto",
          zIndex: 1,
          opacity: ["0.2", "0.2", "1"],
          maxHeight: "70vh",
        }}
        fluid={data.hero.childImageSharp.fluid}
        alt="Person with shapes and colors from head"
        imgStyle={{ objectFit: "contain" }}
        loading="eager"
        fadeIn="false"
      />
    </div>
  )
}

export default SiteWelcome
