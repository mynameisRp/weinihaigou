import http from "utils/serve"

export const bannerImg = () => http.post("/indexMobileTop.shtml")


export const hotList = () => http.post("/indexHotList.shtml")