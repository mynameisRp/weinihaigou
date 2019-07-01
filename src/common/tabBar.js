import React from "react"
import {withRouter,HashRouter as Router ,Link} from "react-router-dom"
import {pageRoutersAll} from "routers"
import "./tabBar.css"

class TabBarPage extends React.Component {



  render() {
    console.log(this)
    return (
          <Router>
               <div className="tabBar-wrap">
                  {
                    pageRoutersAll.map((item,index)=>(
                          <Link to={item.pathname } key={index} 
                          className = {
                            item.pathname === this.props.location.pathname ? "tabBar_item active" : "tabBar_item"
                          }
                        >
                            <i className="icon"></i>
                            <span className="title">{item.title}</span>
                        </Link>
                        
                    ))
                  }
               </div>
          </Router>
    );
  }

 
}



export default withRouter(TabBarPage)
