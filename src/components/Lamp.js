import React, { Component } from 'react'

const lightBaseStyle = {
	width: '92px',
	height: '92px',
	margin: '10px',
	border: '4px solid #333',
	borderRadius: '50px',
	transition: 'opacity .3s'
}

const RedLight = props => {
	const style = Object.assign({}, lightBaseStyle, {
		backgroundColor: props.color,
		opacity: props.lit ? brightnessToOpacity(props.brightness) : 0.1
	})
	return <div style={style} />
}

const GreenLight = props => {
	const style = Object.assign({}, lightBaseStyle, {
		backgroundColor: props.color,
		opacity: props.lit ? brightnessToOpacity(props.brightness) : 0.1
	})
	return <div style={style} />
}

// TODO: Move brightness state setting out of Lamp component. I don't care to do the callback stuff without having something like Recompose or Redux as wouldn't make code that much cleaner without anyways.
const brightnessToOpacity = brightness => brightness / 5
class Lamp extends Component {
	constructor() {
		super()
		this.state = {
			brightness: 3
		}
	}

	render() {
		const props = this.props

		const containerStyle = {
			width: '120px',
			height: '240px',
			backgroundColor: '#111',
			borderRadius: '5px',
			border: '1px solid #999'
		}

		const brightSelectionStyle = {
			marginTop: '30px',
			width: '100%',
			clear: 'both'
		}

		const greenColor = '#27e833'

		return (
			<div style={containerStyle}>
				<GreenLight
					brightness={this.state.brightness}
					lit={!props.lit}
					color={greenColor}
				/>
				<RedLight
					brightness={this.state.brightness}
					lit={props.lit}
					color={props.color}
				/>
				<div style={brightSelectionStyle}>
					Brightness:
					{[0, 1, 2, 3, 4, 5].map(brightness =>
						<div>
							<input
								type="radio"
								id={`brightness${brightness}`}
								checked={brightness === this.state.brightness}
								name="brightness"
								value={brightness}
								onChange={() => {
									this.setState((prevState, props) => ({ brightness: brightness }))
								}}
							/>
							<label htmlFor={`brightness${brightness}`}>{brightness}</label>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default Lamp
