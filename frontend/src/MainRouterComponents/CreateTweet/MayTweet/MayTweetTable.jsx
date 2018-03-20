import html2canvas from "html2canvas";
import React from 'react'
import $ from 'jquery'
import fabric from 'fabric'
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';


class MayTweetTable extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      img : '',
      imgs: [],
      doneCodeImage: '',
    }
  }


  handleSubmitTweet = (history) => {

    debugger

    var casper = require('casper').create();
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3001//tweet_codes',
    //   data: {params :{tweet_item_hat: this.props.Tweethat,
    //                   tweet_item_tops: this.props.Tweettops,
    //                   tweet_item_pants: this.props.Tweetpants,
    //                   tweet_item_shoes: this.props.Tweetshoes,
    //                   code_image: this.state.doneCodeImage,
    //                 }},
    //   headers: JSON.parse(sessionStorage.getItem('user'))
    // })
    // .done((results) => {
    //   history.push('/tweets')
    // })
    // .fail((data)=>{
    //   console.log('fails')
    // })
  }

  makeCodeImage = () => {
    let canvas = new fabric.Canvas('test_canvas');

    fabric.Image.fromURL(this.props.data.Tweethat[5], function(img) {
      var image = img.set({ left: 0, top: 0})
      // image.crossOrigin = 'anonymous';
      canvas.add(image);
    });

    fabric.Image.fromURL(this.props.data.Tweettops[5], function(img) {
    img.crossOrigin = "Anonymous";
    var image = img.set({ left: 40, top: 40})

    canvas.add(image);
    });

    fabric.Image.fromURL(this.props.data.Tweetpants[5], function(img) {
    img.crossOrigin = "Anonymous";
    var image = img.set({ left: 80, top: 80})
    canvas.add(image);
    });

    fabric.Image.fromURL(this.props.data.Tweetshoes[5], function(img) {
    img.crossOrigin = "Anonymous";
    var image = img.set({ left: 120, top: 120})

    canvas.add(image);
    });


    this.setState({imgs: canvas})
    canvas.renderAll();
  }

  screenShot() {
    html2canvas(document.getElementById("show-tweet"),{proxy: true, useCORS: true,}).then((canvas) => {
        var dataURI = canvas.toDataURL()
        this.setState({doneCodeImage: dataURI})
    })
  }

  // saveImage() {
  //   const canvas = this.state.imgs
  //   var hatImage = new Image();
  //   hatImage.crossOrigin = "Anonymous";
  //   hatImage.src = this.props.data.Tweethat[5]
  //   hatImage.height = 10
  //   hatImage.width = 10
  //
  //   // var topsImage = new Image();
  //   // topsImage.crossOrigin = "Anonymous";
  //   // topsImage.src = this.props.data.Tweettops[5]
  //   //
  //   // var pantsImage = new Image();
  //   // pantsImage.crossOrigin = "Anonymous";
  //   // pantsImage.src = this.props.data.Tweetpants[5]
  //   //
  //   // var shoesImage = new Image();
  //   // shoesImage.crossOrigin = "Anonymous";
  //   // shoesImage.src = this.props.data.Tweetshoes[5]
  //
  //    const canvas2 = document.createElement("canvas")
  //    var ctx = canvas2.getContext("2d");
  //    // ctx.fillRect(20,40,50,100)
  //    // ctx.strokeStyle = 'rgb(00,00,255)'
  //
  //    ctx.drawImage(hatImage, 0, 0)
  //    // ctx.drawImage(topsImage, canvas._objects[1].top, canvas._objects[1].width)
  //    // ctx.drawImage(pantsImage, canvas._objects[2].top, canvas._objects[2].width)
  //    // ctx.drawImage(shoesImage, canvas._objects[3].top, canvas._objects[3].width)
  //    var base64 = canvas2.toDataURL();
  //
  //   this.setState({doneCodeImage: base64})
  // }

  render() {
    const style = {
        margin: 3,
      };
    return(
      <div>
        <MuiThemeProvider>
          <RaisedButton  label="投稿する"  fullWidth={true} style={style} labelColor={'#ffffff'} backgroundColor='black' />
        </MuiThemeProvider>
        <div className="may-tweet">
          <div className="submit-button">
            <MuiThemeProvider>
              <button onClick={() => this.handleSubmitTweet(this.props.history)}>投稿する</button>
              <button onClick={() => this.makeCodeImage()}>イメージ作成</button>
              <button onClick={() => this.screenShot()}>スクリーンショット</button>
            </MuiThemeProvider>
          </div>
          <div id="show-tweet" className="show-tweet">
            <canvas id="test_canvas" width="300" height="300" className="canvas"></canvas>
            <table>
              <thead>
                <tr>
                  <td>画像</td>
                  <td>商品名</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={this.props.Tweethat[5]} alt="" height="50px" width="50px"/></td>
                  <td>{this.props.Tweethat[2]}</td>
                </tr>
                <tr>
                  <td><img src={this.props.Tweettops[5]} alt="" height="50px" width="50px"/></td>
                  <td>{this.props.Tweettops[2]}</td>
                </tr>
                <tr>
                  <td><img src={this.props.Tweetpants[5]} alt="" height="50px" width="50px"/></td>
                  <td>{this.props.Tweetpants[2]}</td>
                </tr>
                <tr>
                  <td><img src={this.props.Tweetshoes[5]} alt="" height="50px" width="50px"/></td>
                  <td>{this.props.Tweetshoes[2]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MayTweetTable)
