import React,{Component} from 'react';
 //BrowserRouter as Router,
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'


import Home from '../containers/Home';
import User from '../containers/User';
import Login from '../containers/Login';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import City from '../containers/City';
import NotFound from '../containers/404Page';

import Header from '../components/Header';


import localStore from '../until/localStore';
import {CITYNAME} from '../config/localStore.config';

import {connect} from 'react-redux';
//import {updateUserInfo} from '../actions/userInfo.action';
import * as userInfoActionsFromOtherFile from '../actions/userInfo.action'


import createHistory from 'history/createBrowserHistory'
const history = createHistory()



class App extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      initialDone: false
    }
  }

  componentDidMount(){
    //从localStore中获取到城市名称
    let cityName = '';
    cityName = localStore.getItem(CITYNAME);
    if(cityName == null){
      cityName = '北京';
    }

    //将数据存入redux
    //this.props.updateInfo.updateUserInfo({cityName: cityName});

    this.props.updateInfo.update({
            cityName: cityName
    })
    console.log({cityName: cityName})
    this.setState({initialDone: true});
  }

  render(){
    //路由的声明.
    let Routes = (
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login/:router'  component={Login}/>
        <Route path='/user'  component={User}/>
        <Route path='/search/:category/:keyword'  component={Search}/>
        <Route path='/detail/:id'  component={Detail}/>
        <Route path='/city'  component={City}/>
        <Route path='/header'  component={Header}/>
        <Route component={NotFound}/>
      </Switch>
    );
    var match = this.props.match;
    return (
      <Router history={ history }>
        <div>
          {/**
           * 这里可以公共的样式,比如 头部, 尾部, 等.
           */}
          {this.state.initialDone ? Routes : (<div>加载中...</div>)}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});


//用来建立 UI 组件的参数到store.dispatch方法的映射
// const mapDispatchToProps = dispatch => ({
//   updateInfo: data => dispatch(updateUserInfo(data))
// });

function mapDispatchToProps(dispatch) {
    return {
        updateInfo: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

const reduxApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default reduxApp;