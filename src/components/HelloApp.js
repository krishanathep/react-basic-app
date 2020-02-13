import React from 'react'

class HelloApp extends React.Component {
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

	render() {
	    return (
            <div>
                {this.state.monsters.map(monster => (
                    <h2 key={monster.id}>{monster.name}</h2>
                ))}     
            </div>
		)
	}
}

export default HelloApp