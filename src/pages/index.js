import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { Link } from "gatsby"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page"></Metadata>
      <h2>Hi I'm Anthony, a Software Engineer. Check my out my <Link to="/blog">blog</Link>, <Link to="/projects">ongoing projects</Link>, or 
         <Link to="/about"> resume</Link> to find out more about me and what I enjoy doing.</h2>
    </Layout>
  )
}

export default Index