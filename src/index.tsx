import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, StateType} from './redux/state'

const renderTree = (state: StateType) => {
  ReactDOM.render(<App posts={state.profilePage.posts}
                       dialogs={state.dialogsPage.dialogs}
                       messages={state.dialogsPage.messages}
                       addPost={addPost}
                       messageForNewPost={state.profilePage.messageForNewPost}
  />, document.getElementById('root'));
}

renderTree(state)

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
