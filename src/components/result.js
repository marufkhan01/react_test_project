import React, {Component} from 'react'; 
import Button from './button';



class Result extends Component {
	state= {

		currentValue:0

	}
	increaseState = (event) => {

			this.setState({
		currentValue:  this.state.currentValue + 1
			})

	}

	decreaseState = (event) => {

			this.setState({
				currentValue:  this.state.currentValue - 1

			})

	}




	render(){

		return(

			<div>

			<div className="row">
					<Button buttontext="+" buton= {this.increaseState}/>
					<Button buttontext="-" buton= {this.decreaseState}/>



					</div>

				<p> {this.state.currentValue}</p>

			</div>

			);
	}
			

					

					
				
}

export default Result;