import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { Header } from './components/layouts/Header'
import { SearchBox } from './components/search-box/search.component'
import './App.css';

class App extends Component {
constructor() {
  super()

    this.state = {
      monsters: [],
      searchField: '',
      header: 'Monsters Rolodex'
    }

    this.handleChange = this.handleChange.bind(this)  
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
}  

handleChange = (e) => {
  this.setState({ searchField: e.target.value })
}

render(){
  const { monsters, searchField } = this.state
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className="App">
      <header className="App-header">
        <Header header={this.state.header} />
        <SearchBox 
          placeholder="search monster..."
          handleChange={this.handleChange}
        />  
        <CardList monsters={filteredMonsters} />           
      </header>
    </div>
    );
  }
}
export default App;
