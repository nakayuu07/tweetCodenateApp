import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header/Header'
import Footer from './FooterRouter'
import LoginRouter from './AuthenticationComponents/LoginRouter'
import Tweets from './TweetComponents/Tweet'
import Search from './SearchTweet/Search'
import Notification from './Notification/Notification'
import Closet from './Closet/Closet'
import CreateTweetContainer from './CreateTweet/CreateTweetContainer'
import MyPageMain from './MyPagecomponents/MyPageMain'


class MainBody extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LoginRouter}/>
          <Route exact path="/tweets" component={Tweets}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/notification" component={Notification}/>
          <Route path="/closet" component={Closet}/>
          <Route path="/tweetcreate" component={CreateTweetContainer}/>
          <Route path="/mypage" component={MyPageMain}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default MainBody
