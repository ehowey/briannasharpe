/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork(
        sort: { order: DESC, fields: date }
        filter: { featured: { eq: true } }
      ) {
        nodes {
          title
          id
          link
          publisher
          date(formatString: "MMMM Do, YYYY")
          excerpt
          image {
            asset {
              fluid(maxWidth: 720) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      leaves: file(relativePath: { eq: "bg-leaves.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const writing = data.allSanityPublishedWork.nodes
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: 2,
        mb: 5,
        display: "grid",
      }}
    >
      <Img
        sx={{
          height: "auto",
          width: "100%",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
          zIndex: "1",
          opacity: "0.2",
          display: ["none", "block", null, null, null],
        }}
        fluid={data.leaves.childImageSharp.fluid}
        alt="Watercolor Leaves"
      />
      <div
        sx={{
          zIndex: "5",
          width: "contentWidth",
          maxWidth: "maxContentWidth",
          m: "0 auto",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
        }}
      >
        {writing.map(published => (
          <div
            sx={{
              width: ["100vw", "auto", null, null, null],
              position: ["relative", "static", null, null, null],
              left: ["calc(-50vw + 50%)", "0", null, null, null],
              display: "flex",
              flexDirection: ["column", null, "row", null, null],
              backgroundColor: "#f9f2e6",
              p: 3,
              mb: 4,
              borderRadius: 3,
            }}
            key={published.id}
          >
            <Img
              sx={{
                mr: [0, null, 3, null, null],
                maxWidth: ["100%", null, "250px", null, null],
                maxHeight: ["250px", null, "100%", null, null],
                flex: "1",
              }}
              fluid={published.image.asset.fluid}
              alt={published.title}
            />
            <div
              sx={{
                mt: [3, null, 0, null, null],
                flex: "2",
              }}
            >
              <p
                sx={{
                  fontSize: "60%",
                  textTransform: "uppercase",
                  m: 0,
                }}
              >
                {published.publisher} &middot; {published.date}
              </p>
              <Styled.h3
                sx={{
                  fontStyle: "italic",
                  mt: 0,
                }}
              >
                <a
                  sx={{
                    color: "text",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                  href={published.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {published.title}
                </a>
              </Styled.h3>
              <p>{published.excerpt.substring(0, 300) + "..."}</p>
              <a
                sx={{
                  color: "text",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "90%",
                  "::after": {
                    content: '"\\00A0 \\2192"',
                  },
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
                href={published.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read it
              </a>
            </div>
          </div>
        ))}
        <Link
          sx={{
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
          to="/work"
        >
          More Published Work
        </Link>
      </div>
    </div>
  )
}

export default FeaturedList
