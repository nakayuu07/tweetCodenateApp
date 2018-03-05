import React from 'react'
import $ from 'jquery'
import fabric from 'fabric'

class MayTweetTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      img : '',
      imgs: []
    }
  }


  handleSubmitTweet = (data) => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//tweet_codes',
      data: {params :{tweet_item_hat: this.props.data.Tweethat,
                      tweet_item_tops: this.props.data.Tweettops,
                      tweet_item_pants: this.props.data.Tweetpants,
                      tweet_item_shoes: this.props.data.Tweetshoes
                    }},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log('done')
    })
    .fail((data)=>{
      console.log('fails')
    })
  }

  makeCodeImage = () => {
    let canvas = new fabric.Canvas('test_canvas');

    fabric.Image.fromURL(this.props.data.Tweethat[5], function(img) {
      var image = img.set({ left: 0, top: 0})
      // image.crossOrigin = 'anonymous';
      canvas.add(image);
    }, { crossOrigin: 'Anonymous' });

    fabric.Image.fromURL(this.props.data.Tweettops[5], function(img) {
    var image = img.set({ left: 40, top: 40})
    canvas.add(image);
    }, { crossOrigin: 'Anonymous' });

    fabric.Image.fromURL(this.props.data.Tweetpants[5], function(img) {
    var image = img.set({ left: 80, top: 80})
    canvas.add(image);
    }, { crossOrigin: 'Anonymous' });

    fabric.Image.fromURL(this.props.data.Tweetshoes[5], function(img) {
    var image = img.set({ left: 120, top: 120})
    canvas.add(image);
    }, { crossOrigin: 'Anonymous' });


    this.setState({imgs: canvas})
    canvas.renderAll();
  }

  saveImage() {
    const canvas = this.state.imgs
    const img = canvas.toDataURL();
  }

  render() {
    const data = this.props.data
    return(
      <table>
        <span onClick={() => this.handleSubmitTweet()}>投稿する</span>
        <span>ツイート＋投稿する</span>
        <button onClick={() => this.makeCodeImage()}>イメージ作成</button>
        <button onClick={() => this.saveImage()}>イメージ保存</button>
        <canvas id="test_canvas" width="300" height="300"></canvas>
        <img src={this.state.img} alt=""/>
        <tbody>
          <tr>
            <td >{this.props.data.Tweethat}</td>
            <td>{this.props.data.Tweettops}</td>
            <td>{this.props.data.Tweetpants}</td>
            <td>{this.props.data.Tweetshoes}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MayTweetTable
