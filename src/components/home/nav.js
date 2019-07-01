import React from "react"
import {Link} from "react-router-dom"
import Brand from "static/nav3.png"
import New from "static/new.png"
import Hot from "static/hot.png"
import Country from "static/nav2.png"
import "./nav.css"


class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            navList: [
                {
                    title: '国家馆',
                    src: Country
                },
                {
                    title: '品牌街',
                    src: Brand
                },
                {
                    title: '新品',
                    src: New
                },
                {
                    title: '热卖',
                    src: Hot
                }
            ]
        }
    }


    render(){
        let {navList} = this.state
        return (
            <div className="nav-wrap">
                {
                  navList.map((item,index)=>(
                      <Link to="/" key={index}>
                          <img src={item.src} alt={item.title} />
                          <span className="nav-title">{item.title}</span>
                      </Link>
                  ))
                }
            </div>
        )
    }
}

export default Nav