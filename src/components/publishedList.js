/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const publishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork {
        nodes {
          title
          categories {
            title
          }
        }
        distinct(field: categories___title)
      }
    }
  `);
  const writing = data.allSanityPublishedWork.nodes;
  const cats = data.allSanityPublishedWork.distinct;
  return cats.map(cat => (
    <>
      <h3>{cat}</h3>
      {writing.map(pub => (
        <>
          {pub.categories
            .filter(categ => categ.title === cat)
            .map(categ => (
              <p>{pub.title}</p>
            ))}
        </>
      ))}
    </>
  ));
};

export default publishedList;

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
