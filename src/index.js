import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";

import AppTest from './test/AppTest';
import FiltredList from "./hochoc/App";
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

const starWarsChars = [
	{name: 'Дарт Вэйдер', side: 'dark'},
	{name: 'Люк Скайвокер', side: 'light'},
	{name: 'Палпатин', side: 'dark'},
	{name: 'Обован Кеноби', side: 'light'}
];

ReactDOM.render(<FiltredList list={starWarsChars} side='dark' />, document.getElementById('root'));

serviceWorker.unregister();
