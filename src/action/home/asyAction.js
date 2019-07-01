import {bannerImg,hotList} from "api/home"



const BannerData = (val) => ({
    type: "GET_HOME_DATA",
    value: val
})
export const bannerdata = ()=>{
    return async (dispatch) => {
            let data = await bannerImg()
            await dispatch(BannerData(data))
        }
    }





const HotListData = (val)=>({
    type: "GET_HOTLIST_DATA",
    value: val
})
export const hotListData = ()=>{
    return async (dispatch)=>{
        let data = await hotList()
        await dispatch(HotListData(data))
    }
}









