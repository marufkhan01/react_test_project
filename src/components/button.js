import React, {Component} from 'react'; 

class Button extends Component {
	
	render(props){

		return(

			<button className= "col-md-6 btn-danger" onClick={this.props.buton}>{this.props.buttontext} </button>
			);
	}			

					
				
}

export default Button;