var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name : 'Default name',
			message : 'This is from component!'			
		}
	},
	onFormSubmit: function(event) {
		event.preventDefault();
		var name = this.refs.name.value;
		alert(name);
	},

	render : function() {
		var name = this.props.name;
		var message = this.props.message;	
		return (
			<div>				
				<h1>Hello {name}!</h1>
				<p>{message + '!!'}</p>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref='name'/>
					<button>Set name</button>
				</form>
			</div>						
		);}
});

var firstName = 'John';
var message = 'Hello React';

ReactDOM.render(
	<Greeter name={firstName} message={message}/>,	
	document.getElementById('app')
)