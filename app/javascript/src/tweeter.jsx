import React, { useState } from 'react';
import './home.scss';

const Tweeter = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: 'Maya Summers',
      screenName: '@AdventureSeeker',
      content: "Reached the summit of Mount Everest! The view from up here is absolutely breathtaking.⛰️🧗‍♀️",
    },
    {
      id: 2,
      username: 'Oliver Delgado',
      screenName: '@FlavorConnoisseur',
      content: "Just had the most amazing sushi feast! The flavors were out of this world, and the presentation was a work of art. 🍣🔥",
    },
    {
      id: 3,
      username: 'Ethan Davidson',
      screenName: '@SportsFanatic24',
      content: "Witnessed an epic comeback in the championship game! The team's determination and spirit were truly remarkable.🏀🏆",
    },
  ]);
  
  const [newTweets, setNewTweets] = useState([]);
  const [newTweetId, setNewTweetId] = useState(4);

  const handleSubmitTweet = (tweetText) => {
    const newTweet = {
      id: newTweetId,
      username: {User}, // Replace with the authenticated username
      screenName: '@User', // Replace with the authenticated screen name
      content: tweetText,
    };

    setNewTweets((prevTweets) => [newTweet, ...prevTweets]);
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
    setNewTweetId((prevId) => prevId + 1);
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
