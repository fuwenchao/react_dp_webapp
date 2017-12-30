import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/buy'
import Comment from './subpage/Comment'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleBack(routePath){
      //this.props.history.goBack();
      this.props.history.push(routePath);
    }
    render() {
        // 获取商户ID
        const match = this.props.match
        const id=match.params.id

        return (
            <div>
                <Header title="商户详情" type="share"/>
                <p>info</p>
                <Buy id={id} handleBack={this.handleBack.bind(this)}/>
                <p>comment</p>
            </div>
        )
    }
}
 
export default Detail