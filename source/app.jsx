var Greeter = React.createClass({
	render : function() {
		return (
			<div>				
				<h1>Hello React!</h1>
				<p>This is from component!</p>
			</div>			
		);
		// return React.createElement(
		// 	'div',
		// 	null,
		// 	React.createElement(
		// 		'h1',
		// 		null,
		// 		'Hello React!'
		// 	),
		// 	React.createElement(
		// 		'p',
		// 		null,
		// 		'This is from component!'
		// 	)
		// );
	}
});


// ReactDOM.render(
// 	<Greeter/>,
// 	document.getElementById('app')
// )

