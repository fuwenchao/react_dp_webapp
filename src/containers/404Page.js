import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class NotFound extends Component{

	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
	}
	render(){
		return (

				<div>
					<p>haha...页面终于找不到了</p>

				</div>

			)
	}

}