import React from 'react';
import fabric from 'fabric'



class MyPageMain extends React.Component {

  showcanvas =()=>{
    var canvas = new fabric.Canvas('test_canvas');
      // create a rectangle object
      var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
      });
      canvas.add(rect);
  }

  render () {
    return (
      <div className="main_body">
       <button onClick={this.showcanvas}></button>
        <div className="main_inear">
          <canvas id="test_canvas" width="500" height="500"></canvas>
        </div>
      </div>
    )
  }
}


export default MyPageMain
