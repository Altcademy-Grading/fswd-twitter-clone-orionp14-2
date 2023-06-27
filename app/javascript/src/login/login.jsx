import React from 'react';
import ReactDOM from 'react-dom';
import LoginWidget from './loginWidget';
import SignupWidget from './signupWidget';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './login.scss';


class Login extends React.Component {
  state = {
    authenticated: false,
    show_login: true,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }

  render () {
    const { show_login } = this.state;
    return (
    <div>
      <div className="container-fluid" style={{ height: '100vh' }}>
        <div className="row h-100">
        <div className="col twitter-navbar">
        <a className="twitter-logo" href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <ul className='nav-text'>
        <li><a href="#" className="navbar-link"><i className="fa fa-home"></i> Home</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-search"></i> Explore</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-gear"></i> Settings</a></li>
      </ul>
      <div className='side-tweet-button'>
      <button className='btn btn-lg btn-primary tweet-nav-btn'>Log in to Tweet!</button>
     </div>
        </div>
        <div className="col-lg-6 twitter-feed">
      <div className="feed">
        <h1 className='pb-2'>Trending Tweets</h1>
        <div className="tweet col-xs-12">
          <a className="tweet-username" href="#">Maya Summers</a>
          <a className="tweet-screenName" href="#">@AdventureSeeker</a>
          <p>Reached the summit of Mount Everest! The view from up here is absolutely breathtaking.⛰️🧗‍♀️</p>
          <a href="#">#AdventureSeeker</a> <a href="#">#Mountaineering</a>
        </div>
        <div className="tweet col-xs-12">
          <a className="tweet-username" href="#">Oliver Delgado</a>
          <a className="tweet-screenName" href="#">@FlavorConnoisseur</a>
          <p>Just had the most amazing sushi feast! The flavors were out of this world, and the presentation was a work of art. 🍣🔥</p>
          <a href="#">#FoodieJourney</a> <a href="#">#SushiLover</a>
        </div>
        <div className="tweet col-xs-12">
          <a className="tweet-username" href="#">Ethan Davidson</a>
          <a className="tweet-screenName" href="#">@SportsFanatic24</a>
          <p>Witnessed an epic comeback in the championship game! The team's determination and spirit were truly remarkable.🏀🏆</p>
          <a href="#">#VictoryVibes</a> <a href="#">#SportsMania</a>
        </div>
      </div>
        </div>
            <div className="col p-3 twitter-login">
              <h2>Welcome to Twitter!</h2>
              <div className="border p-4">
                {show_login ? <LoginWidget toggle={this.toggle} /> : <SignupWidget toggle={this.toggle} />}
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Login;