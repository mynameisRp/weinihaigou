const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(proxy("/app", {
        target: "http://www.weinihaigou.com/",
        changeOrigin: true,
        pathRewrite:{
            "^/app": ""
        }
    }))
}