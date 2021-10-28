import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
  ActionsTypes
} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
  dispatch: (action: ActionsTypes) => void
  store: any
}

const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => (
            <Profile dispatch={props.dispatch}
                     store={props.store}
            />
          )}/>
          <Route path='/dialogs' render={() => (
            <DialogsContainer
              store={props.store}
              dispatch={props.dispatch}
              dialogsPage={props.store.getState().dialogsPage}
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

