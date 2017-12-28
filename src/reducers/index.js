import {combineReducers} from 'redux'
import userinfo from './userinfo'
import store from './store'

/**
* 拆分的多个reducers合并为一个reducers
*/

export default combineReducers({

	userinfo,
	store

})