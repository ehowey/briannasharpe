/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PublishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork {
        nodes {
          title
          id
          link
          publisher
          date
          categories {
            title
          }
        }
        distinct(field: categories___title)
      }
    }
  `);
  const writing = data.allSanityPublishedWork.nodes;
  const uniqueCategories = data.allSanityPublishedWork.distinct;
  return uniqueCategories.map(uniqueCategoryTitle => (
    <>
      <h3>{uniqueCategoryTitle}</h3>
      {writing.map(published => (
        <>
          {published.categories
            .filter(
              articleCategories =>
                articleCategories.title === uniqueCategoryTitle
            )
            .map(x => (
              <p>{published.title}</p>
            ))}
        </>
      ))}
    </>
  ));
};

export default PublishedList;

// {writing.map(published => (
//   <li key={published.id}>
//     <a href={published.link} target="_blank" rel="noopener noreferrer">
//       <h3>{published.title}</h3>
//     </a>
//     {new Date(published.publishedDate).toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric"
//     })}{" "}
//     in {published.publishedBy}
//   </li>
// ))}
