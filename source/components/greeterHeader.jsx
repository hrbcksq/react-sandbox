var React = require('react');

//Presentation component(only presentation)
var GreeterHeader = React.createClass({
    render: function() {        
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>Your message is {message}</p>
            </div>            
        )
    }
})

module.exports = GreeterHeader;