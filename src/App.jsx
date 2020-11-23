import React, {Component} from 'react';
import './App.scss';
import Controls from './components/Controls';
import Title from './components/shared/Title'
import Container from './components/shared/Container';
import Stistics from './components/Statistics';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  }


  onLeaveFeedback = (key) => {
    this.setState((state) => {
      let newState = {...state}
      newState[key]++ 
      newState.total++
      newState.positivePercentage = this.countPositivePercentage(newState)
      return newState
    })
  }

  countPositivePercentage({total, good}){
    return Math.round((good/total)*100)
  }
  render(){
    return (
      <Container className="container feedback">
        <Title title="Please leave feedback"/>
        <Controls onLeaveFeedback={this.onLeaveFeedback}/>
        <Title title="Statistics" />
        <Stistics {...this.state}/>
      </Container>
    );
  }
  
}

export default App;
