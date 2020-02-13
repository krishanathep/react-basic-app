import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
constructor() {
  super()

    this.state = {
      monsters: []
    }
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        //.then(users => console.log(users)
        .then(users => this.setState({monsters: users}))
}  

render(){
  return (
    <div className="App">
      <header className="App-header">
        <CardList monsters={this.state.monsters} />           
      </header>
    </div>
    );
  }
}
export default App;
