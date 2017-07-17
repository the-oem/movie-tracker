import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Login from '../components/Login/Login';
import ShelfViewContainer from '../containers/ShelfView/ShelfViewContainer';
// import FavoritesContainer from '../containers/Favorites/FavoritesContainer';
import HeaderContainer from '../containers/Header/HeaderContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import CreateAccount from '../components/CreateAccount/CreateAccount';

export default class App extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>

        <HeaderContainer {...this.props}/>
        <Route exact path='/' render={({ match }) => <ShelfViewContainer history={history} location='home' /> } />

        <Route exact path='/login' render={props =>
          (this.props.userIsAuthenticated ? <Redirect to='/' /> : <LoginContainer {...props} />)} />

        <Route exact path='/favorites' render={({ match }) => <ShelfViewContainer location='favorites' /> } />

        <Route exact path='/create-account' component={CreateAccount} />

        {/* <Route path='/movies' render={({ match }) => {
          // const moovie = items.find(movie => movie.id === parseInt(match.params.id, 10));
        }} /> */}

        {/* <Route path='/ideas/:id' render={({ match }) => {
          const idea = ideas.find(idea => idea.id === parseInt(match.params.id, 10));
          if (idea) {
            return <Item {...idea} deleteItem={deleteIdea}/>;
          }
          return (<div className='list-item'>That Idea could not be found </div>);
        }} /> */}
      </div>
    );
  }
}
