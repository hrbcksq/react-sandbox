//Presentation component(only presentation)
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

//Response component (haven't state)
var GreeterForm = React.createClass({
	changeName: function(event) {
		event.preventDefault();

		var updateData = {
			name : this.refs.name.value,
			message : this.refs.message.value
		}

		if ((typeof updateData.name === 'string' && updateData.name.length > 0) 
			|| (typeof updateData.message === 'string' && updateData.message.length > 0))
		{
			this.refs.name.value = '';
			this.refs.message.value = '';
			this.props.update(updateData);	
		}		
	},
	render: function() {
		return (
			<form onSubmit={this.changeName}>
				<input type="text" ref='name' placeholder='Enter name'/>
				<textarea cols="20" rows="10" ref='message' placeholder='Enter message'></textarea>
				<button>Update Name</button>
			</form>
		);
	}
});

//Container component (it maintains state of applicaton and if state updates it renders children)
var Greeter = React.createClass({
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message 
		};
	},
	updateData: function(data) {
		this.setState({
			name: data.name || this.state.name,
			message: data.message || this.state.message
		});
	},
	render: function() {
		return (
			<div>
				<GreeterHeader name={this.state.name} message={this.state.message}/>
				<GreeterForm update={this.updateData}/>
			</div>			
		);
	}
});

//Entry point
ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
)