// We want these paths:
// '/'
// '/favorites'
// '/login'
// '/create-account'

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import ShelfViewContainer from '../containers/ShelfView/ShelfViewContainer';
import Login from '../components/Login/Login';
import FavoritesContainer from '../containers/Favorites/FavoritesContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import CreateAccount from '../components/CreateAccount/CreateAccount';

export default class App extends Component {

  render() {
    const { items } = this.props;
    return (
      <div>
        <Header />
        <Route exact path='/' render={({ match }) => <ShelfViewContainer /> } />

        <Route exact path='/login' render={({ match }) => <LoginContainer />} />

        <Route exact path='/favorites' render={({ match }) => <FavoritesContainer /> } />

        <Route exact path='/create-account' component={CreateAccount} />

        {/* <Route path='/movies' render={({ match }) => {
          // const moovie = items.find(movie => movie.id === parseInt(match.params.id, 10));
          console.log(items);
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
