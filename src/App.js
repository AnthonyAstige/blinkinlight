import React, { Component } from 'react'
import Lamp from './components/Lamp.js'

class App extends Component {
	render() {
		return <Lamp color="red" lit="true" />
	}
}

export default App
