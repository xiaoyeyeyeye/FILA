## 项目介绍
### 主体架构
* [斐乐官网](http://www.fila.cn/)
* 仿斐乐
### 前端：
- 页面展示很简单，主要用到jquery,swiper,ajax_promise,注意post发送的数据格式为json不是默认的form请求头，
不是application/ x-www-form-urlencoded，而是 application/json。首页，登录注册页，购物车页面，详情页，
各个页面。
### 后台
- 用node作为服务端语言，用到express框架，监听localhost:8080端头，并且使用express.router作为中间件处理
前端传来的数据，配合cors(),处理跨域，处理请求返回数据。
### 数据库
- 由于使用node.js,所以数据库顺利成章使用mongodb，初始化数据库，通过node fs模板读取json文件，转成数组结
构后进行筛选，插入本地数据库 操作数据库，通过mongoose,设置数据格式。
测试.....

### 启动项目
 * cd sever_shop 
 * node app.js