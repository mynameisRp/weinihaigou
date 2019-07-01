const defaultState = {
    sideNavData: [],
    classiftData: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_SIDENAV":
            let sideNavData = JSON.parse(JSON.stringify(state));
            sideNavData.sideNavData = action.value.result;
            return sideNavData;
        case "GET_CLASSIFY_DATA":
            let classiftData = JSON.parse(JSON.stringify(state));
            classiftData.classiftData = action.value.result.classTwoList;
            return classiftData;
        default:
            return state;
    }

}