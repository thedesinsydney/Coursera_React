import React, { Component } from 'react';
import { Row, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    

    console.log ('Dishdetail imported')

export default class DishDetail extends Component{



    newrenderDish(dish) {
        console.log('renderDish function run from DishDetailComponent')
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    newrenderComments(dish) {
        
        if (dish != null)
            return(            
                <Card>
                    
                    <CardBody>
                        <div>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        <CardText>{dish.comments[0].comment}</CardText>
                        <CardText>-- {dish.comments[0].author} , {dish.comments[0].date}</CardText>
                        <CardText>{dish.comments[1].comment}</CardText>
                        <CardText>-- {dish.comments[1].author} , {dish.comments[0].date}</CardText>
                        <CardText>{dish.comments[2].comment}</CardText>
                        <CardText>-- {dish.comments[2].author} , {dish.comments[0].date}</CardText>
                        <CardText>{dish.comments[3].comment}</CardText>
                        <CardText>-- {dish.comments[3].author} , {dish.comments[0].date}</CardText>
                        <CardText>{dish.comments[4].comment}</CardText>
                        <CardText>-- {dish.comments[4].author} , {dish.comments[0].date}</CardText>
                        </div>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
            );
    }

}

