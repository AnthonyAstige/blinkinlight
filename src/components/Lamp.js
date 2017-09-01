import React from 'react'

const lightBaseStyle = {
	width: '100px',
	height: '100px',
	margin: '10px',
	borderRadius: '50px',
	transition: 'opacity .3s'
}
const RedLight = props => {
	const style = Object.assign({}, lightBaseStyle, {
		backgroundColor: props.color,
		opacity: props.lit ? 1 : 0.1
	})
	return <div style={style} />
}

const GreenLight = props => {
	const style = Object.assign({}, lightBaseStyle, {
		backgroundColor: props.color,
		opacity: props.lit ? 1 : 0.1
	})
	return <div style={style} />
}

const Lamp = props => {
	const style = {
		width: '120px',
		height: '240px',
		borderRadius: '5px',
		border: '1px solid #666'
	}
	const greenColor = '#27e833'

	return (
		<div style={style}>
			<GreenLight lit={!props.lit} color={greenColor} />
			<RedLight lit={props.lit} color={props.color} />
		</div>
	)
}

export default Lamp
