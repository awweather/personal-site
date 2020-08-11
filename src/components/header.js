import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { eq: "images/avatar-image.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <div className={headerStyles.heroContainer}>
        <div className={headerStyles.avatar}>
          <Img fluid={data.file.childImageSharp.fluid}></Img>
        </div>
        <div className={headerStyles.heroContent}>
          <p className={headerStyles.brand}>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </p>
          <p className={headerStyles.description}>
            {data.site.siteMetadata.description}
          </p>
        </div>
      </div>

      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName={headerStyles.activeMenuItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
