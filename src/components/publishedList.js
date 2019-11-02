/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PublishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork(sort: { order: DESC, fields: date }) {
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
  const uniqueCategories = data.allSanityPublishedWork.distinct.reverse()
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "1rem",
      }}
    >
      {uniqueCategories.map(uniqueCategoryTitle => (
        <div sx={{ mb: 4 }}>
          <Styled.h3>{uniqueCategoryTitle}</Styled.h3>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {writing.map(published => (
              <>
                {published.categories
                  .filter(
                    articleCategories =>
                      articleCategories.title === uniqueCategoryTitle
                  )
                  .map(x => (
                    <li
                      key={published.id}
                      sx={{ mb: 3, ":last-of-type": { mb: 0 } }}
                    >
                      <Styled.a
                        href={published.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {published.title}
                      </Styled.a>
                      &nbsp; &#8212; &nbsp;<i>{published.publisher}</i>
                    </li>
                  ))}
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PublishedList
