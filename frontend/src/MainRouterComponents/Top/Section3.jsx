import React from 'react';
import MdFavorite from 'react-icons/lib/md/favorite'
import MdPhotoAlbum from 'react-icons/lib/md/photo-album'
import GoGraph from 'react-icons/lib/go/graph'

class Section3 extends React.Component {
  render () {
    return (
      <section className="app-about">
        <h2 className="heading">About</h2>
          <p className="app-about-text">
            MiLMiLは、自分の持っている服や欲しい服を自由にコーディネートして
            みんなに評価してもらうアプリです。
          </p>
          <p className="app-about-text">
            評価されたコーディネートは、年代別や男女別にグラフで可視化されて<br/>
            みんなの評価を知ることができます。
          </p>
      </section>
    )
  }
}

export default Section3
