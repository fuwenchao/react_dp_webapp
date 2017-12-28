/**
*只做渲染
*/
import React from 'react';
import {render} from 'react-dom';
import App from './App';
//import App from './components/Main';
require('Font-awesome-webpack');

render (

	<App/>,
	document.getElementById('app')
)