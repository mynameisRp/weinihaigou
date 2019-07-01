import {sideNavData,classify} from "api/classification"

const SideNavData = (val) => ({
    type: "GET_SIDENAV",
    value: val
})


export const sideNavDatas = ()=> {
    return async (dispatch)=>{
        let data = await sideNavData();
        await dispatch(SideNavData(data))
    }
}


const ClassifyData = (val) => ({
    type: "GET_CLASSIFY_DATA",
    value: val
})


export const classifyData = (id) => {
    return async (dispatch) => {
        let data = await classify(id);
        await dispatch(ClassifyData(data))
    }
}