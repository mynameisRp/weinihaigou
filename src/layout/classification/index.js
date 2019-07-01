import React from "react"
import ClassHeader from "components/classification/classHeader"
import SideNav from "components/classification/sideNav"
import Classify from "components/classification/classify"
import "./index.css"

class ClassificationPage extends React.Component{
    render(){
        return (
            <div className="classification-wrap">
                <ClassHeader/>
                <div className="con-wrap">
                    <SideNav/>
                    <Classify/>
                </div>
            </div>
        )
    }
}
export default ClassificationPage