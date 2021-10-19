import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType, store} from './redux/state'

const renderTree = (state: StateType) => {
  ReactDOM.render(<App posts={store._state.profilePage.posts}
                       dialogs={store._state.dialogsPage.dialogs}
                       messages={store._state.dialogsPage.messages}
                       addPost={store.addPost.bind(store)}
                       messageForNewPost={store._state.profilePage.messageForNewPost}
  />, document.getElementById('root'));
}

store.subscribe(renderTree)
renderTree(store._state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
