import React from "react"
import {connect} from "react-redux"
import "./hotList.css"
class HotList extends React.Component{

    render(){
        let {hotListData} = this.props;
        hotListData = hotListData.result ? hotListData.result : [];
        return(
            <div className="goods-wrap">
                <div className="goods-title">
                    <span></span>
                </div>
                <ul className="goods">
                    {
                        hotListData.map((item,index) => (
                            <li key={index} className="goodsItem">
                                <img src={item.imgUrl} alt={item.brandName} />
                                <p className="delivery">{item.deliveryType===1?"保税区邮":item.deliveryType===2?"香港直邮":item.deliveryType===5?"全国发货":""}</p>
                                <p className="goodsName">{item.goodsName}</p>
                                <p className="goodsPrice"><span>￥{item.showPrice}</span><span className="oldPrice">￥{item.marketPrice}</span></p>
                            </li>
                        ))
                    }
                </ul>
                <div className="end">就到这里吧！我可是有底线的呢！</div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    hotListData: state.Home.hotList
})

export default connect(mapStateToProps, null)(HotList)