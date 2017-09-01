import React, { Component } from 'react'
import Lamp from './components/Lamp.js'

class App extends Component {
	constructor() {
		super()
		this.state = {
			lit: false
		}
		this.toggleLit = this.toggleLit.bind(this)
	}

	componentDidMount() {
		this.interval = setInterval(this.toggleLit, 1000)
	}

	toggleLit() {
		this.setState({ lit: !this.state.lit })
	}

	render() {
		return <Lamp color="red" lit={this.state.lit} />
	}
}

export default App
