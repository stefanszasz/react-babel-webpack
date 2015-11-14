import React from 'react';

const Clicker = React.createClass({
	getInitialState() {
		return { count: 0 };
	},
	getDefaultProps() {
		return { count: 0 };
	},
	componentWillMount() {
		this.setState({ count: this.props.count });
	},
	increaseCount() {
		var newCount = Number(this.state.count) + 1;
		this.setState( { count: newCount });
	},
	render() {
		return (
			<div> 
				Click count: {this.state.count} 
				<div>
					<button onClick={this.increaseCount}>Clickme</button>					
				</div>
			</div>
			);
	}
});

module.exports = Clicker;