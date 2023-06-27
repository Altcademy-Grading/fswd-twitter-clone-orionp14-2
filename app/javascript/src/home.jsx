import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';
import './tweeter'
import Tweeter from './tweeter';

const Home = () => (
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
        <li><a href="#" className="navbar-link"><i className="fa fa-bell"></i> Notifications</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-envelope"></i> Messages</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-bookmark"></i> Bookmarks</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-list-alt"></i> Lists</a></li>
        <li><a href="#" className="navbar-link"><i className="fa fa-user"></i> Profile</a></li>
      </ul>
      <div className='side-tweet-button'>
      <button className='btn btn-lg btn-primary tweet-nav-btn'>Tweet</button>
     </div>
     </div>
  <div className="col-lg-6 twitter-feed">
      <Tweeter></Tweeter>
    </div>
    <div className="col twitter-widgets">
    <div className="input-group mb-3 pt-3 twitter-search">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="search"
        aria-describedby="button-addon2"
        style={{ width: '85%' }} 
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
    <div className='trends'>
      <div className="trends-header">
            <span>Trending Hashtags</span><span> &#183; </span><small><a href="">Change</a></small>      
          </div>
          <ul className="trends-list">
            <li><a href="#">#SunsetVibes</a></li>
            <li><a href="#">#CoffeeAddict</a></li>
            <li><a href="#">#AdventureAwaits</a></li>
            <li><a href="#">#MondayBlues</a></li>
            <li><a href="#">#PetLove</a></li>
          </ul>
    </div>
    <div className='suggested-accounts'>
      <div className="accounts-header">
            <span>Suggested Accounts</span><span> &#183; </span><small><a href="">Change</a></small>      
          </div>
          <ul className="accounts-list">
            <li><a href="#">@elonmusk</a></li>
            <li><a href="#">@Oprah</a></li>
            <li><a href="#">@BillGates</a></li>
            <li><a href="#">@TheRock</a></li>
            <li><a href="#">@neiltyson</a></li>
          </ul>
    </div>
   </div>
  </div>
 </div>
</div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  );
});
