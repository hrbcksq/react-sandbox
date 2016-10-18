var React = require('react');

//Response component (haven't state)
var GreeterForm = React.createClass({
	handleSubmit: function(event){
		event.preventDefault();
		if (typeof this.props.updateData === 'function') {
			this.props.updateData({
				name: this.refs.name.value,
				message: this.refs.message.value 
			});				
		}		
	},
	render: function() {
		return (
			<div>
				<form className='formPart' onSubmit={this.handleSubmit}>
					<div>
						<input type="text" ref='name' />
					</div>
					<div>
						<textarea ref='message' cols="20" rows="10"></textarea>
					</div>
					<button type="submit">Update</button>
				</form>				
			</div>
		);
	}
})

module.exports = GreeterForm;