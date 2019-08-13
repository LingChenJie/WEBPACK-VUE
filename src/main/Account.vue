<template>
    <div>
        <h1>这是account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>


