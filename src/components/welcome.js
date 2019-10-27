/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

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

  // const ref = useRef([])
  // const [items, set] = useState([])
  // const transitions = useTransition(items, null, {
  //   from: {
  //     opacity: 0,
  //     x: -20,
  //   },
  //   enter: [{ opacity: 1, x: 0 }],
  //   leave: [{ opacity: 0 }],
  // })

  // const reset = useCallback(() => {
  //   ref.current.map(clearTimeout)
  //   ref.current = []
  //   set([])
  //   ref.current.push(setTimeout(() => set(["Title One"]), 0))
  //   ref.current.push(setTimeout(() => set(["Title Two"]), 2000))
  //   ref.current.push(setTimeout(() => set(["Title Three"]), 4000))
  // }, [])

  // useEffect(() => void reset(), [])
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: ["60vh", "50vh", welcomeHeight],
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        bg: "#eed4cc",
        mb: 5,
        mt: -3,
        p: 5,
      }}
    >
      <div
        sx={{
          gridColumn: ["1 / -1", "1 / -1", "2 / 3"],
          gridRow: "1 / 2",
          alignSelf: "center",
          zIndex: "5",
          maxWidth: "maxContentWidth",
          // m: [4, 4, 5],
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
        <p>{props.subtitle}</p>
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
          opacity: ["0.3", "0.3", "1"],
        }}
        fluid={data.hero.childImageSharp.fluid}
        alt="Person with shapes and colors from head"
        imgStyle={{ objectFit: "contain" }}
      />
    </div>
  )
}

export default SiteWelcome
