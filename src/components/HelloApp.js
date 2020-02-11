import React from 'react'

class HelloApp extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
    	counter: 0
    }

    this.handleClick = this.handleClick.bind(this)

    this.downClick = this.downClick.bind(this)

    }
    

	handleClick() {
	  this.setState({
		  counter: this.state.counter + 1
	  })
    }
    downClick() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

	render() {
		return (
      <div>
        <h1>Hello World!</h1>
        <p>{this.props.message}</p>
        <button onClick={this.handleClick}>Click Up!</button>
        <button onClick={this.downClick}>Click Down!</button>
        <p>Total click : {this.state.counter}</p>
      </div>
		)
	}
}

export default HelloApp