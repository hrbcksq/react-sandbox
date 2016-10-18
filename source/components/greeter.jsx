var React = require('react');
var GreeterHeader = require('GreeterHeader');
var GreeterForm = require('GreeterForm');

//Container component (it maintains state of applicaton and if state updates it renders children)
var Greeter = React.createClass({
	getInitialState: function(){
		return {
			name: 'Tony',
			message: 'Tony&acute;s message'
		}
	},
	changeState: function(data) {
		this.setState(data);
	},		
	render: function() {		
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
				<GreeterHeader name={name} message={message}/>
				<GreeterForm updateData={this.changeState}/>
			</div>
		)
	
	}
})

module.exports = Greeter; 