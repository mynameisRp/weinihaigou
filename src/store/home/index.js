const defaultState = {
    bannerImg: [],
    subject: [],
    newSubject: [],
    hotList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_HOME_DATA":
            let bannerData = JSON.parse(JSON.stringify(state));
            bannerData.bannerImg = action.value.result.banner;
            bannerData.subject = action.value.result.subject;
            bannerData.newSubject = action.value.result.newSubject;
            return bannerData;
        case "GET_HOTLIST_DATA":
            let hotListData = JSON.parse(JSON.stringify(state));
            hotListData.hotList = action.value;
            return hotListData
        default:
            return state;
    }
    
}