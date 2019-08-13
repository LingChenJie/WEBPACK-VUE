<template>
    <div>
        <h1>这个是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        // 组件中的data必须是function
        return {
            msg: '123'
        };
    },
    methods: {
        show() {
            console.log("调用login.vue中的show方法");
        }
    }
};
</script>

<style>

</style>

