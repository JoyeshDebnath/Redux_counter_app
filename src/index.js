import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CounterReducer from "./store/reducers/counter";
import ResultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
	ctr: CounterReducer,
	res: ResultsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
