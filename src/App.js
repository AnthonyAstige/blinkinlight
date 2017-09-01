import React, { Component } from 'react'
import Lamp from './components/Lamp.js'

class App extends Component {
	render() {
		return <Lamp color="red" lit={false} />
	}
}

export default App
