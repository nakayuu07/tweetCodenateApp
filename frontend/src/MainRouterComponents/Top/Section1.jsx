import React from 'react';
import './top.css'
import MdFavorite from 'react-icons/lib/md/favorite'
import MdPhotoAlbum from 'react-icons/lib/md/photo-album'
import GoGraph from 'react-icons/lib/go/graph'



class Section1 extends React.Component {
  render () {
    return (
      <section className="about">
        <h2 className="heading">MiLMiLの特徴</h2>
        <div className="about-app-wrapper">

          <div className="about-app-box">
            <MdPhotoAlbum className="about-app-icon" />
            <div className="about-app-title">コーディネート</div>
            <p className="about-app-text">
              自分の持っている服や欲しい服を <br/>
              登録して自由にコーディネートする <br/>
              が可能です。
            </p>
          </div>

          <div className="about-app-box">
            <MdFavorite className="about-app-icon" />
            <div className="about-app-title">評価してもらう</div>
            <p className="about-app-text">
              コーディネートしたTweetを　<br/>
              みんなに知ってもらっていいねのか <br/>
              悪いのか評価してもらおう！
            </p>
          </div>

          <div className="about-app-box">
            <GoGraph className="about-app-icon" />
            <div className="about-app-title">グラフでチェック!</div>
            <p className="about-app-text">
              フォロワーや他の人に評価してもらった <br/>
              Tweetをグラフで見て人気なのかを　<br/>
              確かめよう
            </p>
          </div>

        </div>
      </section>
    )
  }
}

export default Section1
