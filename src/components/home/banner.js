import React from "react";
import { connect } from "react-redux";
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.js';



class Banner extends React.Component{

    render(){
        return (
            <div className="swiper-container">
                <div className = "swiper-wrapper">
                    {
                        this.props.bannerImg.length === 0?"":
                        this.props.bannerImg.map((item, index) => (
                            <div className="swiper-slide" key={item.id}>
                                <img src={item.url2} alt={item.title} />
                            </div>
                        ))
                    }
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>
            </div>
        )
    }

    // componentWillUpdate(newProps,newState){
    //     if (newProps.bannerImg !== this.props.bannerImg){
    //         new Swiper('.swiper-container', {
    //             loop: true,
    //             autoplay: {
    //                 disableOnInteraction: false,
    //                 delay: 1500
    //             },
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             },
    //             observer: true,

    //         })
    //     }
    //     console.log(newProps, newState, this.props)
    // }

    // componentDidUpdate(preProps){
    //     console.log(preProps,"2")
    //     console.log(this.props)
    //     if (preProps.bannerImg !== this.props.bannerImg){
    //         console.log(preProps, "0")
    //             new Swiper('.swiper-container', {
    //                 loop: true,
    //                 autoplay: {
    //                     disableOnInteraction: false,
    //                     delay: 1500
    //                 },
    //                 pagination: {
    //                     el: '.swiper-pagination',
    //                     clickable: true,
    //                 },
    //                 observer: true,
                
    //        })
    //     }
    // }

    async componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                disableOnInteraction: false,
                delay: 1500
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            observer: true,

        })
     }
}

const  mapStateToProps = (state)=>({
    bannerImg: state.Home.bannerImg 
})


export default connect(mapStateToProps, null)(Banner)




