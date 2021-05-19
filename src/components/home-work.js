/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from "gatsby-theme-catalyst-hydrogen/src/components/home-page/home-card"
import ButtonSecondary from "gatsby-theme-catalyst-hydrogen/src/components/button-secondary"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    {
      leaves: file(relativePath: { eq: "bg-leaves-blue.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
              gatsbyImageData(
                width: 400
                layout: CONSTRAINED
                placeholder: BLURRED
              )
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
      <Themed.h2>{result.workTitle}</Themed.h2>
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
        <GatsbyImage
          image={data.leaves.childImageSharp.gatsbyImageData}
          sx={{
            height: "auto",
            width: "100%",
            gridColumn: "1 / -1",
            gridRow: "1 / -1",
            zIndex: "1",
            opacity: "0.5",
            display: ["none", "block", null, null, null],
          }}
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
          {writing.map((published) => {
            const writingImage = published.image.asset.gatsbyImageData
            return (
              <Card
                title={published.title}
                link={published.link}
                image={writingImage}
                publisher={published.publisher}
                date={published.date}
                excerpt={published.excerpt}
                key={published.id}
              />
            )
          })}
          <div
            sx={{
              display: "grid",
              justifyItems: ["stretch", "start", null, null, null],
              mx: [3, 3, 0, null, null],
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
