import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTest from './test/AppTest';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
//
// const composeEnhancers =
// 	typeof window === 'object' &&
// 	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
// 		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// 		}) : compose;
//
// const store = createStore(
// 	rootReducer,
// 	composeEnhancers(
// 		applyMiddleware(thunk)
// 	));
//
// const app = (
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App/>
// 		</BrowserRouter>
// 	</Provider>
// );

ReactDOM.render(<AppTest />, document.getElementById('root'));

serviceWorker.unregister();
