/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const publishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork {
        nodes {
          title
          category
          id
          publishedBy
          publishedDate
        }
        distinct(field: category)
      }
    }
  `);
  const writing = data.allSanityPublishedWork.nodes;
  const cats = data.allSanityPublishedWork.distinct;
  return cats.map(cat => (
    <div>
      <h3>{cat}</h3>
      {writing
        .filter(pub => pub.category === cat)
        .map(pub => (
          <p>{pub.title}</p>
        ))}
    </div>
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
