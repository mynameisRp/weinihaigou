import React from "react"
import {Link} from "react-router-dom"
import "./classHeader.css"


class ClassHeader extends React.Component{
    render(){
        return (
            <h2 className="classHeader">
                <Link to="/search">
                    <span className="search"></span>
                </Link>
                <Link to="/shopCar">
                    <span className="shopCar"></span>
                </Link>
            </h2>
        )
    }
}

export default ClassHeader