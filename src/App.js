import React from 'react';
import But from './But';

export default class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			temp: 0,
			
		}
	}
	
	handleChange(e){
		var temp = this.state.temp
		this.setState({temp: e.target.value})
	}
	
  render() {
    return (
		<div>
			<input onChange= {this.handleChange.bind(this)}></input>
			<But temp = {this.state.temp}/>
		</div>
    );
  }
}

