import React from 'react'
import {Bar} from 'react-chartjs-2'

class UserAgeUnLike extends React.Component {
  render() {
    const age = this.props.unlikeAge
    const data  = {
        labels: ["10代", "20代", "30代", "40代", "50代", "60代以上"],
        datasets: [{
            label: 'イマイチ！をくれた年代',
            data: [age.s10, age.s20, age.s30, age.s40, age.s50, age.over60],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return(
      <div>
        <Bar
          data={data}
          width={400}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
          />
      </div>
    )
  }
}

export default UserAgeUnLike
