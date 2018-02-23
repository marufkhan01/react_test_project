import React, {Component} from 'react'; 



class Input extends Component {
	state= {

		initialValue:""

	}
	changeState = (event) => {

			this.setState({
				initialValue: event.target.value

			})

	}

	render(){

		return(

			<div>
				<input value= {this.state.initialValue} onChange= { this.changeState} />

				<p> {this.state.initialValue}</p>

			</div>

			);
	}
			

					

					
				
}

export default Input;