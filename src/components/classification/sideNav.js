import React from "react"
import "./sideNav.css"
import {sideNavDatas,classifyData} from "action/classification/asyAction"
import {connect} from "react-redux"

class SideNav extends React.Component{
    constructor(){
        super()
        this.state = {
            selectItem: 12
        }
    }
    render(){
        let {sideNav} = this.props;
        sideNav = sideNav !== [] ? sideNav : []
        return (
            <div className="sideNav-wrap">
                <ul>
                    {
                        sideNav.map((item)=>(
                            <li 
                                key={item.classid} 
                                className={item.classid===this.state.selectItem?"active":""}
                                onClick={
                                    this.props.getclassify.bind(this, item.classid)
                                }
                            >
                                {item.classdesc}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getSideNavData()
    }
    
}

const mapStateToProps = (state)=>({
    sideNav: state.Classification.sideNavData
})


const mapDispatchToProps = (dispatch) => ({
    getSideNavData(){
        dispatch(sideNavDatas())
    },
    getclassify(id){
        this.setState({
            selectItem:id
        })
        dispatch(classifyData(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)