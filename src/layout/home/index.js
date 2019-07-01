import React from "react"
import {bannerdata,hotListData} from "action/home/asyAction"
import {connect} from "react-redux";
import Banner from "components/home/banner"
import HeaderSearch from "components/home/headerSearch"
import Nav from "components/home/nav"
import Recommend from "components/home/recommend"
import Overvalue from "components/home/overvalue"
import HotList from "components/home/hotList"
import "./index.css"


class HomePage extends React.Component{

    render(){
        return (
            <div className="wrapper">
                <div>
                    <HeaderSearch/>
                    <Banner/>
                    <Nav/>
                    <Recommend/>
                    <Overvalue/>
                    <HotList/>
                </div>
            </div>      
        )
    }

    componentDidMount(){
        this.props.getBanner()
        this.props.getHotList()
    }

}


const mapDispatchToProps = (dispatch) => ({
    getBanner() {
        dispatch(bannerdata())
    },
    getHotList(){
        dispatch(hotListData())
    }
})

const mapStateToProps = (state) => ({
    bannerImg: state.Home.bannerImg
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)