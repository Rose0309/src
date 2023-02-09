<template>
    <div class="box">
        <h1>联系我们</h1>
        <router-link tag="button" :to='{name:"phone"}'>电话</router-link>
        <router-link tag="button" :to='{name:"person"}'>名字</router-link>
        <router-view></router-view>
    </div>
</template>



<script>
export default {
    
}
</script>

<style scoped>
.box{
    width:50%;
    height:230px;
}
</style>

