/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork(filter: { featured: { eq: true } }) {
        nodes {
          title
          id
          link
          publisher
          date
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
      }}
    >
      <Img
        sx={{
          height: "auto",
          width: "100%",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
          zIndex: "1",
          opacity: "0.5",
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
              backgroundColor: "#cccccc",
              p: 3,
              m: 3,
            }}
            key={published.id}
          >
            <Styled.h4>{published.title}</Styled.h4>
            <p>{published.date}</p>
            <p>{published.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedList
