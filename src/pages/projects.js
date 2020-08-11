import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { useStaticQuery, graphql } from "gatsby"
import Repository from "../components/repository"
import Card from "../components/card";

const Projects = () => {
  return (
    <Layout>
      <Metadata
        title="Projects"
        description="Ongoing and completed projects"
      ></Metadata>
    <Card
      title="Find me on Fiverr"
      subtitle="Designing and Prototyping anything in the JavaScript ecosystem"
      description="Stuck finishing a homework problem? Building a game in the browser? Let's do it together! I offer several "
    ></Card>
    <Repository/>
    </Layout>
  )
}

export default Projects
