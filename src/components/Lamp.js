import React from 'react'

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
		backgroundColor: '#111',
		borderRadius: '5px',
		border: '1px solid #999'
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
