import * as pageRouters from "./pageRouters"
import * as basicRouters from "./basicRouters"


export const basicRoutersAll = [
    {
        pathname: '/noFind',
        component: basicRouters.noFind
    },
    {
        pathname: '/login',
        component: basicRouters.login
    },
    {
        pathname: "/register",
        component: basicRouters.register
    },
    {
        pathname: "/details",
        component: basicRouters.details
    }
]



export const pageRoutersAll = [
    {
        pathname: "/home",
        title: "首页",
        component: pageRouters.home,
        tabFlag: true
    },
    {
        pathname: "/classification",
        title: "分类",
        component: pageRouters.classification,
        tabFlag: true
    },
    {
        pathname: "/shopCar",
        title: "购物车",
        component: pageRouters.shopCar,
        tabFlag: false
    },
    {
        pathname: "/mine",
        title: "我的",
        component: pageRouters.mine,
        tabFlag: true
    }
]