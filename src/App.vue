<template>
    <div>
        <br>
        <button type="button" class="mui-btn mui-btn-danger">
            红色
        </button>
        <br>

        <br>
        <mt-button type="primary" size="small" @click="getList">default</mt-button>
        <mt-button type="primary" size="small" disabled>default</mt-button>
        <mt-button plain size="small" icon="back">plain</mt-button>

        <h1>这是app组件</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodsList">GoodsList</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        // 组件中的data必须是function
        return {
            msg2: 'aaa',
            toastInstance:null
        };
    },
    methods: {
        getList(){
            // 模拟获取列表的 一个 AJax 方法
            // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
            this.show();
            setTimeout(()=>{
                //  当 3 秒过后，数据获取回来了，要把 Toast 移除
                this.toastInstance.close();
            }, 3000)
        },
        show(){
            //Toast("这是一个吐司")
            this.toastInstance = Toast({
                message: '操作成功',
                iconClass: "glyphicon glyphicon-heart",
                duration: -1, // 如果是 -1 则弹出之后不消失
                position: "top",
                className: 'mytoast' // 自定义Toast的样式，需要自己提供一个类名
            })
        }
    }
};
</script>

<style>

</style>

