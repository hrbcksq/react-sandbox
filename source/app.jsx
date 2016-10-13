//Presentation component
var GreeterHeader = React.createClass({
	getDefaultProps: function() {
		return {
			name : 'Default Name',
			message : 'Default Message'
		};
	},
	render: function() {
		var name = this.props.name;		
		var message = this.props.message;
		return (
			<div>
				<h1>Hello {name}</h1>
				<p>{message}</p>
			</div>
		);
	}
});

//Response component
var GreeterForm = React.createClass({
	changeName: function(event) {
		event.preventDefault();
		var name = this.refs.name.value;
		if (typeof name === 'string' && name.length > 0){
			this.refs.name.value = '';
			this.props.changeName(name);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.changeName}>
				<input type="text" ref='name'/>
				<button>Update Name</button>
			</form>
		);
	}
});

//Container component (it maintains state and render children)
var Greeter = React.createClass({
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message 
		};
	},
	updateName: function(name) {
		this.setState({
			name: name
		});
	},
	render: function() {
		return (
			<div>
				<GreeterHeader name={this.state.name} message={this.state.message}/>
				<GreeterForm changeName={this.updateName}/>
			</div>			
		);
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
)