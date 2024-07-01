// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAccelerate = () => {
    this.setState(prevState => {
      let value = prevState.count
      if (prevState.count <= 200) {
        value += 10
      }
      return {count: value}
    })
  }

  onBreak = () => {
    this.setState(prevState => ({count: prevState.count - prevState.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="inner-heading">
          Speed is {count}
          mph
        </h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="blue-btn"
            type="submit"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="black-btn" type="submit" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
