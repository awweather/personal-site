import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import repositoryStyles from "./repository.module.scss"
import Card from "./card";
const Repository = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      githubViewer {
        pinnedItems {
          nodes {
            description
            name
            url
          }
        }
      }
    }
  `)
  return (
    
    <div className={repositoryStyles.repositoryContainer}>
      { data.githubViewer.pinnedItems.nodes.map((repository, i) => (
        <Card 
          title={repository.name}
          description={repository.description}
          link={repository.url}
          image="https://github.githubassets.com/images/modules/open_graph/github-logo.png"
          >
        </Card>
      ))}
    </div>
  )
}
export default Repository
