/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PublishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork {
        nodes {
          title
          id
          link
          publisher
          date(formatString: "MMMM YYYY")
          categories {
            title
          }
        }
        distinct(field: categories___title)
      }
    }
  `)
  const writing = data.allSanityPublishedWork.nodes
  const uniqueCategories = data.allSanityPublishedWork.distinct
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "1rem",
      }}
    >
      {uniqueCategories.map(uniqueCategoryTitle => (
        <div>
          <h4>{uniqueCategoryTitle}</h4>
          {writing.map(published => (
            <>
              {published.categories
                .filter(
                  articleCategories =>
                    articleCategories.title === uniqueCategoryTitle
                )
                .map(x => (
                  <ul>
                    <li key={published.id}>
                      <i>{published.publisher}</i>, {published.date} &#8212;{" "}
                      <Styled.a
                        href={published.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {published.title}
                      </Styled.a>
                    </li>
                  </ul>
                ))}
            </>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PublishedList
