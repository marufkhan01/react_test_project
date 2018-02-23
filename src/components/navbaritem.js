import React from 'react';  

const Navbaritem = (props) => {


			return (

					<div className="col-md-6">

						<span>
					
						<a href ={props.linkitem}>	{props.name}</a>


						</span>
					</div>

				);

}

export default Navbaritem;