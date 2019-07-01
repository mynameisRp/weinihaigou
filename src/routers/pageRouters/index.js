import Loadable from "react-loadable"
import Loading from "common/loading"

export const home = Loadable({
    loader: () => import("layout/home"),
    loading: Loading
})

export const mine = Loadable({
    loader: () => import("layout/mine"),
    loading: Loading
})

export const shopCar = Loadable({
    loader: () => import("layout/shopCar"),
    loading: Loading
})

export const classification = Loadable({
    loader: () => import("layout/classification"),
    loading: Loading
})

