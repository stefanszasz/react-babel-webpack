import React from 'react';

const Hello = React.createClass({
	getInitialState() {
		return { count: 0 };
	},
	getDefaultProps() {
		return { count: 0 };
	},
	componentWillMount() {
		this.setState({ count: this.props.count });
	},
	render() {
		return <span> Hello world from react {this.state.count} </span>;
	}
});

module.exports = Hello;