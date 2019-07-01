import React,{Component} from "react"
import MyContainer from "common/globalHeader"
import {withRouter} from "react-router-dom"

class ShopCarpage extends Component {
    render(){
        return (
            <div className="title">{this.props.title}</div>
        )
    }
}

export default withRouter(MyContainer("购物车")(ShopCarpage));