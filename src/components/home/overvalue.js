import React from "react"
import {connect} from "react-redux";
import "./overvalue.css"
import {Link} from "react-router-dom"


class Overvalue extends React.Component {
    render(){
        let {overvalue} = this.props;
        overvalue = overvalue ? overvalue: "";
        return(
            <div className="newSubject">
                {
                    overvalue.map((v,k)=>(
                        <div key={v.id} className="overvalue">
                            <div className="overvalue-header">
                                <img src={v.url2} alt={overvalue.title}/>
                            </div>
                            <div className="overvalue-wrap">
                                <ul className="overvalue-item-wrap">
                                    {
                                        v.goodsList.map((item,index) => (
                                            <li key={index} className="overvalue-item">
                                                <Link to="/details">
                                                    <img src={item.imgUrl} alt={item.title}/>
                                                    <div className="text">
                                                        <span className = "goodsName" >
                                                        {
                                                            item.goodsName.length > 18 ? item.goodsName.split(item.goodsName.substring(13))[0] + "..." : item.goodsName.split(item.goodsName.substring(15))[0] + "..."
                                                            
                                                        }
                                                        </span>
                                                        <span className="price">
                                                            ￥{item.showPrice}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div> 
                        </div>
                    ))
                }
            </div>
        )
    }
    skipDetail(item){
        console.log(item,this)
        // this.props.history
    }
}




const mapStateToProps = (state)=>({
    overvalue: state.Home.newSubject
})

export default connect(mapStateToProps, null)(Overvalue)