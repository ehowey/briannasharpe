/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Fragment } from "react"
import Img from "gatsby-image"
import Card from "gatsby-theme-catalyst-writer/src/components/work-card"
import ButtonSecondary from "gatsby-theme-catalyst-writer/src/components/button-secondary"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      leaves: file(relativePath: { eq: "bg-leaves-blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sanityHomePage {
        workTitle
      }
      allSanityWork(
        sort: { order: DESC, fields: date }
        filter: { featured: { eq: true } }
      ) {
        nodes {
          id
          title
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
    }
  `)
  const writing = data.allSanityWork.nodes
  const result = data.sanityHomePage
  return (
    <Fragment>
      <Styled.h2>{result.workTitle}</Styled.h2>
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
            opacity: "0.5",
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
            <Card
              title={published.title}
              link={published.link}
              image={published.image.asset.fluid}
              publisher={published.publisher}
              date={published.date}
              excerpt={published.excerpt}
              key={published.id}
            />
          ))}
          <div
            sx={{
              display: "grid",
              justifyItems: ["stretch", "start", null, null, null],
            }}
          >
            <ButtonSecondary to="/work">More Writing</ButtonSecondary>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FeaturedWork
