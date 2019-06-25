import React from "react"
import Magnifier from 'react-magnifier'
import Layout from "../components/layout"
import {
  isMobile
} from "react-device-detect"
import img1 from "./lyricsforsabalouland/IMG-0593.jpg"
import img2 from "./lyricsforsabalouland/IMG-0587.jpg"
import img3 from "./lyricsforsabalouland/IMG-0588.jpg"
import img4 from "./lyricsforsabalouland/IMG-0589.jpg"
import img5 from "./lyricsforsabalouland/IMG-0591.jpg"
import img6 from "./lyricsforsabalouland/IMG-0592.jpg"
import img7 from "./lyricsforsabalouland/IMG-0594.jpg"
import img8 from "./lyricsforsabalouland/IMG-0595.jpg"
import img9 from "./lyricsforsabalouland/IMG-0596.jpg"
import img10 from "./lyricsforsabalouland/IMG-0598.jpg"

export default () => (
  <Layout>
    <h2>Lyrics</h2>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img1} alt="Saba Lou" />
      ) : (
        <Magnifier src={img1} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img2} alt="Saba Lou" />
      ) : (
        <Magnifier src={img2} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img3} alt="Saba Lou" />
      ) : (
        <Magnifier src={img3} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img4} alt="Saba Lou" />
      ) : (
        <Magnifier src={img4} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img5} alt="Saba Lou" />
      ) : (
        <Magnifier src={img5} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img6} alt="Saba Lou" />
      ) : (
        <Magnifier src={img6} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img7} alt="Saba Lou" />
      ) : (
        <Magnifier src={img7} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img8} alt="Saba Lou" />
      ) : (
        <Magnifier src={img8} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img9} alt="Saba Lou" />
      ) : (
        <Magnifier src={img9} width={480} />
      )}
    </div>
    <div style={{maxWidth: '480px', margin: '0 auto'}}>
      {isMobile ? (
        <img src={img10} alt="Saba Lou" />
      ) : (
        <Magnifier src={img10} width={480} />
      )}
    </div>

  </Layout>
)