# this is a react falsework demo
> react (v16) + redux + react-router v4 + redux-thunk + react-hot-loader + es6 + webpack3 



## 开发坏境启动

1. `npm install`
2. `npm start`
4. `npm run mock` 打开`json-server`,模拟`ajax`数据
3. 浏览器打开[http://localhost:3000](http://localhost:3000)

## 生产坏境部署

1. `npm run build`
2. 拷贝dist文件夹至服务器即可


## 热更新使用说明：
参照pages/Home
```
import {hot} from 'react-hot-loader';
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Home));
```

## 文件目录

```
.
├── README.MD  
├── mock  
├── node_modules
├── package.json
├── postcss.config.js
├── public 
├── src 页面目录
├── webpack.common.config.js  公共配置
├── webpack.config.js   生产环境配置
└── webpack.dev.config.js  开发环境配置
```