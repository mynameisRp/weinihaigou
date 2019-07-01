import { fetch as fetchReq} from "whatwg-fetch"
import qs from "qs"


const baseUrl = "/app"
const get = (url) => {
    return fetchReq(baseUrl + url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    }).then((res) => res.json())
}



const post = ((url, data = {}) => {
    return fetchReq(baseUrl + url, {
        method: "post",
        credentials: 'include',
        mode: "cors",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify(data)
    }).then((res) => res.json())
})

export default {
    get,
    post
}