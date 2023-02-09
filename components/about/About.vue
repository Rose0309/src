<template>
  <div>
     <div class="left">
       <div class="list">
          <li><router-link :to='{name:"contact"}'>联系我们</router-link></li>
          <li><router-link :to='{name:"delivery"}'>快递信息</router-link></li>
          <li><router-link :to='{name:"order"}'>订单信息</router-link></li>
          <li><router-link :to='{name:"history"}'>历史信息</router-link></li>
       </div>
     </div>
     <div class="right">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"你好啊"
    }
  },
  // beforeRouteEnter:(to,form,next)=>{
    // alert("big Da"+this.msg);
    // next();

    // next(vm=>{
    //    alert("big Da"+vm.msg);
    // })
  // },
  // beforeRouteLeave:(to,form,next)=>{
  //   if(confirm("你确认离开吗")){
  //     next();
  //   }else{
  //     next(false);
  //   }
  // }
}
</script>

<style scoped>
.left{
  width:1 0%;
  height:auto;
  float:left;
}
.list>li{
  margin-top: 20px;
  background: #eee;
  padding:10px;
  cursor: pointer;
}
.right{
  width:50%;
  float:left;
  height:245px;
  border:1px solid #ccc;
  margin-left:10px;
}
</style>
