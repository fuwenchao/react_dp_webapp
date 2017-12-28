import React from 'react';
import {Provider} from 'react-redux';
import stroeConfigure from './stores/storeConfig';
import './styles/App.less';
import './static/css/common.less'
import './static/css/font.css'


/**
*配置redux
*/

import App from './router/routerMap'

const store=stroeConfigure();

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
)
