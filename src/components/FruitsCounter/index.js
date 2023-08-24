// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  addMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  addbananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="count"> {mangoes} </span> Mangoes
            <span className="count"> {bananas} </span>
            Bananas
          </h1>
          <div className="image-container">
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.addMangoes} type="submit">
                Eat Mango
              </button>
            </div>
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button onClick={this.addbananas} type="submit">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
