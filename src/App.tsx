import React  from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializedApp} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchToProps = {
  initializedApp: () => void
}

type PropsType = MapStatePropsType & MapDispatchToProps

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initializedApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/profile/:userId?'
                     render={withSuspense(ProfileContainer)}/>
              <Route path='/dialogs'
                     render={withSuspense(DialogsContainer)}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/users' component={UsersContainer}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>)
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App)
