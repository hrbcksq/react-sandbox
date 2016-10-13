var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name : 'Default name',
			message : 'This is from component!'			
		}
	},
	render : function() {
		var name = this.props.name;
		var message = this.props.message;	
		return (
			<div>				
				<h1>Hello {name}!</h1>
				<p>{message + '!!'}</p>
			</div>			
		);}
});

var firstName = 'John';
var message = 'Hello React';

ReactDOM.render(
	<Greeter name={firstName} message={message}/>,	
	document.getElementById('app')
)