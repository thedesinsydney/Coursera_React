import React, { Component } from 'react';
import { Row, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent'

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log ('Menu component instructor invoked')
    }

    componentDidMount(){
        console.log ('Menu component componentDidMount invoked')
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        
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

    renderComments(dish) {
        
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div>
                <Row xs={12} md={5} lg={5} className="col-md-5 m-1 col-12 ">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                </Row>
              </div>
            );
        });

        console.log ('Menu component render invoked')

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)} 
                </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;