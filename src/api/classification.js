import http from "utils/serve"


export const sideNavData = () => http.post("/category/getCategory.shtml");


export const classify = (categoryId) => http.post("/category/getCategoryTwo.shtml", {
    categoryId: categoryId
})