import VueRouter from 'vue-router'

// 导入 account 组件
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'

// 导入account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 创建路由对象
var router = new VueRouter({
    routes:[
        {
            path: '/account',
            component: account,
            children:[
                {path:'login', component:login},
                {path:'register', component:register}
            ]
        },
        {
            path:'/goodsList',
            component:goodsList
        }
    ]
})

// 把路由对象暴露出去
export default router;