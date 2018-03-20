import React from 'react'
import { Pie } from 'react-chartjs-2';

class UserSexUnLike extends React.Component{
  render() {
    const data = {
      labels: [
        '男',
        '女',
      ],
      datasets: [{
        // data: [this.props.unlikeSex.man, this.props.unlikeSex.woman],
        data: [1, 1],
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
          text: 'ツイートにイマイチ！を付けてくれた男女比'
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

    return (
      <Pie
        data={data}
        width={250}
        height={250}
        options={options}
        />
    )
  }
}

export default UserSexUnLike
