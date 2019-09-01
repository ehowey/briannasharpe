/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

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
    }
  `)
  const writing = data.allSanityPublishedWork.nodes
  return (
    <div
      sx={{
        display: "flex",
      }}
    >
      {writing.map(published => (
        <div
          sx={{
            backgroundColor: "#cccccc",
            padding: 2,
          }}
          key={published.id}
        >
          <h4>{published.title}</h4>
          <p>{published.date}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturedList
