<template>
  <div class="header-box">
      <el-avatar :size="40" :src="circleUrl" class="header-avatar" ></el-avatar>
      <el-button
        type="primary"
        class="header-login"
        @click="gotoMenu"
      >登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  },
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
          this.$router.push({name:"login"})
      }
  },
  created(){
    let isLogin = localStorage.getItem("isLogin");
    if(isLogin && isLogin == "t"){
      this.circleUrl = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F3e%2F46%2F0e%2F3e460ecdbcc22e90dbf19c7672297d5f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653208195&t=ab1d07c0da838110bfa28b4f5ceaab48";
    }
  }
}
</script>

<style scoped>
.home-box{
  /* width:100%;
  background:url(../image/bd.png) no-repeat center;
  background-size:contain;
  background-size:cover; */
}
.header-avatar{
  margin-top:10px;
}
.header-login{
    padding: 8px 20px;
    border-radius: 15px;
    margin-top:14px;
    float:right;
}
</style>
