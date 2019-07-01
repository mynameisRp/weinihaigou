import Loadable from "react-loadable"
import Loading from "common/loading"


export const noFind = Loadable({
    loader: () => import("common/noFind"),
    loading: Loading
})

export const login = Loadable({
    loader: () => import("common/login"),
    loading: Loading
})

export const register = Loadable({
    loader: () => import("common/register"),
    loading: Loading
})

export const details = Loadable({
    loader: () => import("layout/detail"),
    loading: Loading
})
