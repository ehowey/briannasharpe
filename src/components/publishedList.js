/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PublishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      cat1: allSanityPublishedWork(
        filter: {
          include: { eq: true }
          categories: { elemMatch: { order: { eq: 1 } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          categories {
            title
          }
        }
      }
      cat2: allSanityPublishedWork(
        filter: {
          include: { eq: true }
          categories: { elemMatch: { order: { eq: 2 } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          categories {
            title
          }
        }
      }
      cat3: allSanityPublishedWork(
        filter: {
          include: { eq: true }
          categories: { elemMatch: { order: { eq: 3 } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          categories {
            title
          }
        }
      }
      cat4: allSanityPublishedWork(
        filter: {
          include: { eq: true }
          categories: { elemMatch: { order: { eq: 4 } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          categories {
            title
          }
        }
      }
    }
  `)
  const cat1 = data.cat1.nodes
  const cat2 = data.cat2.nodes
  const cat3 = data.cat3.nodes
  const cat4 = data.cat4.nodes

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "1rem",
      }}
    >
      <div sx={{ mb: 4 }}>
        <Styled.h3>Reported Features</Styled.h3>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {cat1.map(work => (
            <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={work.id}>
              <Styled.a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.title}
              </Styled.a>
              &nbsp; &#8212; &nbsp;<i>{work.publisher}</i>
            </li>
          ))}
        </ul>
      </div>
      <div sx={{ mb: 4 }}>
        <Styled.h3>Personal Essays</Styled.h3>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {cat2.map(work => (
            <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={work.id}>
              <Styled.a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.title}
              </Styled.a>
              &nbsp; &#8212; &nbsp;<i>{work.publisher}</i>
            </li>
          ))}
        </ul>
      </div>
      <div sx={{ mb: 4 }}>
        <Styled.h3>Profiles</Styled.h3>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {cat3.map(work => (
            <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={work.id}>
              <Styled.a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.title}
              </Styled.a>
              &nbsp; &#8212; &nbsp;<i>{work.publisher}</i>
            </li>
          ))}
        </ul>
      </div>
      <div sx={{ mb: 4 }}>
        <Styled.h3>Editorials</Styled.h3>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {cat4.map(work => (
            <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={work.id}>
              <Styled.a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.title}
              </Styled.a>
              &nbsp; &#8212; &nbsp;<i>{work.publisher}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PublishedList
