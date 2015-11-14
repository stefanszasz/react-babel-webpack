const React = require('react');
const Clicker = require('./clicker.jsx');

const Stateless = (props) => {
	return (<div>
		Hello {props.name}
		<Clicker count="0"/>
		</div>);
}

module.exports = Stateless;