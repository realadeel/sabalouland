import React from "react"
import Layout from "../components/layout"
import enigma from "./planet-enigma.jpg"
import novumovum from "./unnamed.jpg"
import { Link } from "gatsby"
import layoutStyles from "../styles/layout.module.css"

export default () => (
  <Layout>
    <div className={layoutStyles.index}>
      <div className={layoutStyles.covers}>
        <div className={layoutStyles.cover}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={enigma} alt="Planet Enigma" />
          </Link>
        </div>
        <div className={layoutStyles.cover}>
          <a href="https://sabalou.bandcamp.com/album/novum-ovum" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={novumovum} alt="Novum Ovum" />
          </a>
        </div>
      </div>
      <div className={layoutStyles.preorder}>
        <a href="https://sabalou.bandcamp.com/album/novum-ovum">
          Click to pre-order Novum Ovum!
        </a>
      </div>
      <ul style={{ listStyle: `none` }}>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/bio">Bio</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <a href="https://instagram.com/sabalouland">Instagram</a>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/lyrics">Lyrics</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/press">Press</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/shows">Shows</Link>
        </li>
      </ul>
    </div>
  </Layout>
)