import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './redux/store'
 import {store} from './redux/redux-store'

const renderTree = (state: StateType) => {
  ReactDOM.render(<App dispatch={store.dispatch.bind(store)}
                       store={store}
  />, document.getElementById('root'));
}

renderTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  renderTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
