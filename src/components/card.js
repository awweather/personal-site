import React from "react"
import cardStyles from "./card.module.scss";

const Card = ({ title, subtitle, description, link, image }) => {
  return (
    <div>
      <div className={cardStyles.blogCard}>
        <div className={cardStyles.meta}>
          <div
            className={cardStyles.photo}
            style={{backgroundImage: `url(${image})`}}
          ></div>
          <ul className={cardStyles.details}>
            <li className={cardStyles.author}>
              <a href="#">Anthony Weatherly</a>
            </li>
            {/* <li className={cardStyles.date}>Aug. 24, 2015</li>
            <li className={cardStyles.tags}>
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className={cardStyles.description}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>
            {" "}
            {description}
          </p>
          <p className={cardStyles.readMore}>
            <a href={link}>View</a>
          </p>
        </div>
      </div>
      {/* <div className={classNames(cardStyles.blogCard, cardStyles.alt)}>
        <div className={cardStyles.meta}>
          <div
            className="photo"
            style={"background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}
          ></div>
          <ul className="details">
            <li className="author">
              <a href="#">Jane Doe</a>
            </li>
            <li className="date">July. 15, 2015</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default Card
