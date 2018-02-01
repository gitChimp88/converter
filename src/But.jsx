import React from 'react';


export default class But extends React.Component {
	
	constructor(){
		super();
		this.state = {
			convert: 0
		}
	}
	
     handleClick(){
		var temp = this.props.temp;
		
		var convert = this.state.convert;
		
		var celsius = Math.round((temp - 32) * 5 / 9)
		
		this.setState({convert: celsius })
	}
	
  render() {
    return (
		<div>
			<button onClick={this.handleClick.bind(this)}>click to convert</button>
			{this.state.convert > 0 ? <h1>{this.state.convert}</h1> : <h1>Enter the temperature in farenheit to convert</h1>}
		</div>
    );
  }
}