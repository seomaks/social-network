import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
  addPost, DialogsType,
  MessageType,
  PostType,
} from "./redux/state";

type PropsType = {
  posts: PostType[]
  dialogs: DialogsType[]
  messages: MessageType[]
  addPost: (postText: string) => void
  messageForNewPost: string
}

const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => (
            <Profile posts={props.posts}
                     addPost={addPost}
                     messageForNewPost={props.messageForNewPost}
            />
          )}/>
          <Route path='/dialogs' render={() => (
            <Dialogs
              dialogs={props.dialogs}
              messages={props.messages}
            />
          )}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>)
}

export default App;

