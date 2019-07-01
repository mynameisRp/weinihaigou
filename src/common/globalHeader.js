import React,{Component} from "react"
import "./gHeader.css"


const MyContainer = (text)=>(WrappedComponent) => {
    return class extends Component{
        render() {
            return ( 
                <div className="com-header">
                    <span className="go" onClick={this.goForward.bind(this)}></span>
                    <WrappedComponent title={text}/>
                </div>
            )
        }
        goForward() {
            this.props.history.goBack()
        }
    }
    
}

export default MyContainer;

