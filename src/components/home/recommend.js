import React from "react"
import {connect} from "react-redux"
import "./recommend.css"


class Recommend extends React.Component {
    render(){
        let {recommend} = this.props
        return (
           <div>
               <ul className="subject-wrap">
                    {
                        recommend.map((item)=>(
                            <li key={item.id} className="subject-item">
                                <img src={item.url2} alt={item.title} />
                            </li>
                        ))
                    }
               </ul>
           </div>
        )
    }



}

const mapStateTOProps = (state)=>({
    recommend: state.Home.subject
})


export default connect(mapStateTOProps, null)(Recommend)