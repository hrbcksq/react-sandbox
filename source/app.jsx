// state refs props
var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name : 'Default name',
			message : 'This is from component!'			
		}
	},
	getInitialState: function() {
		return {
			name: this.props.name
		};
	},
	onFormSubmit: function(event) {
		event.preventDefault();
		var input = this.refs.name;
		var name = input.value;
		if (typeof name === 'string' && name.length > 0){
			this.setState({
				name: name
			});
			input.value = '';
		}
	},

	render : function() {
		var name = this.state.name;
		var message = this.props.message;	
		return (
			<div>				
				<h1>Hello {name}!</h1>
				<p>{message + ' interpolation'}</p>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref='name'/>
					<button>Update</button>
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