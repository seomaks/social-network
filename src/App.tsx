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
  ActionsTypes,
  DialogsType,
  MessageType,
  PostType,
} from "./redux/state";

type PropsType = {
  posts: PostType[]
  dialogs: DialogsType[]
  messages: MessageType[]
  newMessageBody: string
  messageForNewPost: string
  dispatch: (action: ActionsTypes) => void
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
                     dispatch={props.dispatch}
                     messageForNewPost={props.messageForNewPost}
            />
          )}/>
          <Route path='/dialogs' render={() => (
            <Dialogs
              dialogs={props.dialogs}
              messages={props.messages}
              dispatch={props.dispatch}
              newMessageBody={props.newMessageBody}
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

