import React from 'react'
import $ from 'jquery'

import { Pie } from 'react-chartjs-2';
import Slider from 'react-slick'

class DetailTweetCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likeAge: [],
      likeSex: [],
      unlikeAge: [],
      unlikeSex: []
    }
  }

  componentDidMount() {
    console.log('!!')
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001//aggregate_infomations/${this.props.data.id}`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({likeAge: results.like_of_age,
                     likeSex: results.like_of_sex,
                     unlikeAge: results.unlike_of_age,
                     unlikeSex: results.unlike_of_sex
                      })
    })
  }

  render() {
    const data = {
      labels: [
        '男',
        '女',
      ],
      datasets: [{
        data: [this.state.likeSex.man, this.state.likeSex.woman],
        backgroundColor: [
        '#36A2EB',
        '#FF6384',
        ],
        hoverBackgroundColor: [
        '#36A2EB',
        '#FF6384',
        ]
      }]
    };

      const options = {
        title: {
          display: true,
          text: 'ツイートにいいね！を付けてくれた男女比'
        },
        maintainAspectRatio: false,
        responsive: false,
        legend: {
          position: 'left',
          labels: {
            boxWidth: 10
          }
        }
      }

      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <div>
        <Pie
          data={data}
          width={500}
          height={500}
          options={options}
          />
      </div>
    )
  }
}

export default DetailTweetCode
