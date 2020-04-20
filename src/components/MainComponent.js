import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS,
        
    };
  }

  

  render() {

    const HomePage =() => {
      return(
        /*  The <Home /> is where the Home component is included (HomeComponent.js)
        
        Initially when just had <Home />; it only displayed yhe Home component; now modified
        
        Then updated to return the dishes array (filter returns an array)  and call a function using 
        => as shorthand to get the first one (element [0]) which has featured as true 
        */
       <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
        );
    }
    
    return (
      /*  Implementing Routing (react-router-dom); this allows navigation to different pages (see menu as a destination)
      Having the Redirect tag defines the default location is nothing is specified in the url
      */
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;