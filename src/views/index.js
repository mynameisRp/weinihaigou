import React,{Fragment} from 'react';
import TabBar from "common/tabBar"
import {HashRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom"
import {pageRoutersAll,basicRoutersAll} from "routers"
import {Provider} from "react-redux"
import store from "store"
import NotLiveRoute  from "react-live-route"
const LiveRoute = withRouter(NotLiveRoute)

class Views extends React.Component{
  render(){
    return (
        <Fragment>
            <Provider store={store}>
                <Router>
                    <Switch>
                        {
                            pageRoutersAll.map((item,index)=>(
                                <LiveRoute path={item.pathname} key={index} render={()=>{
                                    return <item.component/>
                                }}/>
                            ))
                        }
                        {
                             basicRoutersAll.map((v, k) => (
                                <Route path={v.pathname} key={k} render={()=>{
                                    return <v.component/>
                                }}/>
                            ))
                        }
                        <Redirect exact from="/" to="/home" />
                        <Redirect from="/**" to="nofind"/>
                    </Switch>
                        <LiveRoute path = "/home"  alwaysLive = { true } component = { TabBar } />
                        <LiveRoute path = "/classification"  alwaysLive = { true } component = { TabBar } />
                        <LiveRoute path = "/mine"  alwaysLive = { true } component = { TabBar } />
                </Router>
            </Provider>
        </Fragment>
    )

  }
}


export default Views;
