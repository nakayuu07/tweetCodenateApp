import React from 'react'
import $ from 'jquery'
import fabric from 'fabric'

class MayTweetTable extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      img : '',
      imgs: [],
      doneCodeImage: '',
    }
  }


  handleSubmitTweet = (data) => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//tweet_codes',
      data: {params :{tweet_item_hat: this.props.data.Tweethat,
                      tweet_item_tops: this.props.data.Tweettops,
                      tweet_item_pants: this.props.data.Tweetpants,
                      tweet_item_shoes: this.props.data.Tweetshoes,
                      code_image: this.state.doneCodeImage,
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

  saveImage() {
    const canvas = this.state.imgs
    var hatImage = new Image();
    hatImage.crossOrigin = "Anonymous";
    hatImage.src = this.props.data.Tweethat[5]
    hatImage.height = 10
    hatImage.width = 10

    // var topsImage = new Image();
    // topsImage.crossOrigin = "Anonymous";
    // topsImage.src = this.props.data.Tweettops[5]
    //
    // var pantsImage = new Image();
    // pantsImage.crossOrigin = "Anonymous";
    // pantsImage.src = this.props.data.Tweetpants[5]
    //
    // var shoesImage = new Image();
    // shoesImage.crossOrigin = "Anonymous";
    // shoesImage.src = this.props.data.Tweetshoes[5]

     const canvas2 = document.createElement("canvas")
     var ctx = canvas2.getContext("2d");
     // ctx.fillRect(20,40,50,100)
     // ctx.strokeStyle = 'rgb(00,00,255)'

     ctx.drawImage(hatImage, 0, 0)
     // ctx.drawImage(topsImage, canvas._objects[1].top, canvas._objects[1].width)
     // ctx.drawImage(pantsImage, canvas._objects[2].top, canvas._objects[2].width)
     // ctx.drawImage(shoesImage, canvas._objects[3].top, canvas._objects[3].width)
     var base64 = canvas2.toDataURL();

    this.setState({doneCodeImage: base64})
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
