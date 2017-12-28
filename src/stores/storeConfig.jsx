/***
*  create store function,供 Provider调用，见App.jsx
*/

import { createStore } from 'redux';
import reducers from '../reducers';

export default function configureStore(initialState) {

	let store = createStore(reducers,initialState,window.devToolsExtension ? window.devToolsExtension() : undefined);
	return store;

}