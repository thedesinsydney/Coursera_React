import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function convertDate(date){
    var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  var day = date.substring(8,10);
  var monthIndex = parseInt(date.substring(5,7)) - 1;
  var year = date.substring(0,4);

  return monthNames[monthIndex] + ' ' +day + ', ' + year;
}

function RenderDish({dish}){    
  
   return(
      <div className="col-12 col-md-5 m-1">
      <Card>
         <CardImg top src = {dish.image} alt = {dish.name} />
         <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
         </CardBody>
      </Card>
      </div>
      );
}
	

    function RenderComments({comments}) {
    	
    		const comment = comments.map(dish =>
    					
    						<li key = {dish.id}>
    						 {dish.comment}
    						 <br/> 
    						 <br/>
    						 -- {dish.author} , {convertDate(dish.date.substring(0,10))}
    						 <br />
    						 <br />
    						</li>		
    				);

    		return(
    			<div>
    				<h4> Comments </h4>			
    				<ul class = "list-unstyled"> {comment} </ul>
    			</div>);
    }

    const DishDetail= (props) => {
    	if(props.selectedDish){
    	return(
    	

    	<div className='container'>
    		<div className="row">
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                  </div>
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                     <RenderComments comments={props.dish.comments}/>
                  </div>

            </div>
		</div>

    	);
    	}
	else
		return(<div></div>);


    }



export default DishDetail;