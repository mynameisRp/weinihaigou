import React from "react"
import GHeader from "common/globalHeader"
import {Link, withRouter} from "react-router-dom"
import "./index.css"

class Details extends React.Component{
    render(){
        return (
            <div className="details-wrap">
                <div className="title">
                    {this.props.title}
                    <div className="icon">
                        <Link to="/search">
                            <span className="search"></span>
                        </Link>
                        <Link to="/shopCar">
                            <span className="shopCar"></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(GHeader("商品详情")(Details))