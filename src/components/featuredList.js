/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

const FeaturedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork(filter: { featured: { eq: true } }) {
        nodes {
          title
          id
          link
          publisher
          date(formatString: "MMMM Do, YYYY")
          excerpt
          image {
            asset {
              fixed(width: 300, height: 200) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
      leaves: file(relativePath: { eq: "images/leaves.png" }) {
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
        display: "grid",
        gridTemplateColumns: "1fr 720px 1fr",
        gridTemplateRows: "auto",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 5,
      }}
    >
      <Img
        sx={{
          height: "auto",
          width: "100%",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
          zIndex: "1",
        }}
        fluid={data.leaves.childImageSharp.fluid}
        alt="Watercolor Leaves"
        imgStyle={{}}
      />
      <div
        sx={{
          gridColumn: "2 / 3",
          gridRow: "1 / 2",
          zIndex: "5",
        }}
      >
        {writing.map(published => (
          <div
            sx={{
              display: "flex",
              backgroundColor: "rgba(236,242,248,0.97)",
              p: 3,
              mb: 3,
              mt: 3,
              borderRadius: 3,
            }}
            key={published.id}
          >
            <Img
              sx={{
                flexShrink: "0",
                mr: 3,
              }}
              fixed={published.image.asset.fixed}
              alt="Watercolor Leaves"
              imgStyle={{}}
            />
            <div>
              <p
                sx={{
                  color: "#999",
                  fontSize: "70%",
                  textTransform: "uppercase",
                  m: 0,
                }}
              >
                {published.publisher} &middot; {published.date}
              </p>
              <Styled.h4>{published.title}</Styled.h4>
              <p
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "3",
                }}
              >
                {published.excerpt}
              </p>
            </div>
          </div>
        ))}
        <ButtonInternal
          to="/published-work"
          text="More Published Work"
          variant="small"
        />
      </div>
    </div>
  )
}

export default FeaturedList
