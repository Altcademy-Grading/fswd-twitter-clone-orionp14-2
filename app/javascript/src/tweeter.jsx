import React, { useState, useEffect } from 'react';
import './home.scss';
import {
  createTweetApi,
  getTweetsApi
} from './utils/fetchHelper';

const Tweeter = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweets, setNewTweets] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    getTweetsApi()
      .then((data) => {
        setTweets(data.tweets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [submitting]);

  const handleSubmitTweet = (tweetText) => {
    setSubmitting(true);
    createTweetApi(tweetText)
      .then((data) => {
        setSubmitting(false);
      })
  };

  const handleDeleteTweet = (tweetId) => {
    setNewTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== tweetId));
    setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== tweetId));
  };

  const PostTweetBox = () => {
    const [tweetText, setTweetText] = useState('');

    const handleInputChange = (event) => {
      setTweetText(event.target.value);
    };

const handleSubmit = (event) => {
      event.preventDefault();
      if (tweetText.trim() !== '') {
        handleSubmitTweet(tweetText);
        setTweetText('');
      }
    };

    function charCount() {
      var char = tweetText.length;
      if (char > 0 && char <= 140) {
        document.getElementById('post-tweet-btn').removeAttribute('disabled');
      } else {
        document.getElementById('post-tweet-btn').setAttribute('disabled', 'disabled');
      }
    } 

    return (
      <div className="col-xs-12 post-tweet-box">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="form-control post-input"
            rows="3"
            placeholder="What's happening?"
            value={tweetText}
            onChange={handleInputChange}
          ></textarea>
          <div className="pull-right">
          <span className="post-char-counter">{140 - tweetText.length} Characters</span>
            <button className="btn btn-primary" type="submit" id="post-tweet-btn">
              Tweet
            </button>
          </div>
        </form>
      </div>
    );
  };

  const Tweet = ({ id, username, screenName, content }) => {
    const handleDelete = () => {
      handleDeleteTweet(id);
    };

    const isNewTweet = newTweets.some((tweet) => tweet.id === id);

    return (
      <div className="tweet col-xs-12">
        <a className="tweet-username" href="#">{username}</a>
        <a className="tweet-screenName" href="#">{screenName}</a>
        <p>{content}</p>
        {isNewTweet && ( 
          <button className="btn btn-danger btn-sm delete-tweet" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      <PostTweetBox />
      <div className="feed">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            username={tweet.username}
            screenName={tweet.screenName}
            content={tweet.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Tweeter;
