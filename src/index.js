import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {StoreContext} from 'redux-react-hook'
import rootReducer from './reducer/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(<StoreContext.Provider value={store}><App/></StoreContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
