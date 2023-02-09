<template>
  <div class="home-wrap">
      <!-- <h1>Home</h1>
      <button @click="gotoMenu">go to Order</button> -->
  </div>
</template>

<script>
export default {
  methods:{
      gotoMenu:function(){
          //跳转到上一次浏览的页面
          //this.$router.go(-1);

          //指定跳转地址
          //this.$router.replace("/menu")

          //指定跳转名字的路由
          //this.$router.replace({name:"menuLink"})

          //通过push
          //this.$router.push("/menu")
          this.$router.push({name:"admin"})
      }
  }
}
</script>

<style scoped>
.home-wrap{
  /* width:100%;
  height: 95.5%;
  background:url(../image/bd.png) no-repeat center;
  background-size:contain;
  background-size:cover; */
}
</style>
