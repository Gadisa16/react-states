import React, { Component } from 'react';
import "./counter.css"
import CounterDisplayer from '../CounterDisplayer';
import IncreaseDecrease from '../IncreaseDecrease';
import EvenCounterDisplayer from '../evenCounterDisplayer';



class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  allClicksCounter = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer totCount= {this.state.clickCount}/>
        <EvenCounterDisplayer evClick_count={this.state.clickCount} />
        
        <p>..**..</p>
        <p>******</p>
        <p>..**..</p>

        <IncreaseDecrease />
      </div>
    );
  }
}

export default MyCounter;
