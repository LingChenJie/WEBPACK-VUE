// main.js是项目的入口文件
//console.log('ok')

// 导包
// 在webpack 中尝试使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入vue-router包
import VueRouter from 'vue-router'
// 安装vue-router
Vue.use(VueRouter)

// 导入login.vue组件
import login from './login.vue'
import app from './App.vue'

// 导入自定义的路由模块
import router from './router.js'

// // 导入mint-ui
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // // 这里 可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// // // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI)

// 按需导入 Mint-UI组件
import { Button} from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
Vue.component(Button.name, Button)
//console.log(Button.name)

// 导入mui
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    data: {
        msg:'123'
    },
    // components:{
    //     login
    // },
    // render: function(createElements) { // 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
    //     return createElements(login)
    // }
    render: c => c(app),
    router // 将路由对象挂载到 vm 上
})


// 总结梳理： webpack 中如何使用 vue :
// 1. 安装vue的包：  cnpm i vue -S
// 2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
// 5. 使用 import login from './login.vue' 导入这个组件
// 6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；

import m222,{title, content} from './test.js'
console.log(m222)
console.log(title + " --- " + content) 