import React from "react"
import "./classify.css"
import {connect} from "react-redux"
import NoData from "static/com-no-num.png"



class Classify extends React.Component{
    render(){
        let {classifyData} = this.props;
        return (
            <div className="classify-wrap">
                {
                    classifyData.length===0?<img src={NoData} alt="无数据" className="nodata"/>:classifyData.map((item,index)=>(
                        <div key={item.id} className="classify-item">
                            <h2>{item.name}</h2>
                            <ul>
                                {
                                    item.threeCategoryList.map((v)=>(
                                        <li key={v.id}>
                                            <img src={v.imgUrl} alt={v.threeName} />
                                            <p>{v.threeName}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    classifyData: state.Classification.classiftData
})

export default connect(mapStateToProps, null)(Classify)