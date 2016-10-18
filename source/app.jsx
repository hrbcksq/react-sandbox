var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/greeter');

//Entry point
ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
)