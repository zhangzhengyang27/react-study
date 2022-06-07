import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
	render() {
		return (
			// 相当于block
			<Fragment key={1}>
				<input type="text"/>
				<input type="text"/>
			</Fragment>
		)
	}
}
