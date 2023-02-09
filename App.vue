<template>
  <div id="app" class="saas-wrap">
    <!-- <div class="saas-left">
      <app-menu></app-menu>
    </div>
    <div class="saas-right">
      <div class="saas-tab" >
        <app-tab></app-tab>
      </div>
      <router-view></router-view>
    </div>
    <div class="saas-watermark"></div> -->
    <el-container>
      <el-aside width="200px">
        <app-menu></app-menu>
      </el-aside>
      <el-container>
        <el-header class="saas-head">
            <app-header></app-header>
        </el-header>
        <el-main class="saas-main">
          <div class="saas-tab" >
            <app-tab></app-tab>
          </div>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./components/Menu"
import header from "./components/header"
import Tab from "./components/Tab"
import axios from "axios"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "app-menu":Menu,
    "app-header":header,
    "app-tab":Tab,
    "axios":axios
  },
  created(){
    var docH = window.innerHeight
    var reportH = docH - 83 - 60 - 50 - 40;
    this.$store.commit('changeReportH',reportH);
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
.saas-wrap{
  display:flex;
  width:100%;
  height:100vh;
}
.el-aside{
  background:#2d3952;
}
.saas-head{
  height:60px;
  background:url(image/bd.png) no-repeat center;
  background:#2d3952;
}
.saas-main{
  padding:0px;
}
.saas-watermark{
  /* width: 100%;
  height: 100vh;
  position: absolute;
  background:url(image/bd.png) no-repeat center;
  background-size:cover;
  top: 0px;
  left: 0px;
  z-index:9999;
  opacity:.2;
  pointer-events: none;
  overflow: hidden; */
}
.saas-left{
  flex:0 0 200px;
  height:100vh;
}
.saas-right{
  flex:1;
  height:100vh;
  overflow: hidden;
}
.saas-tab{
  height: auto;
}
.saas-opt{
  width:auto;
}
</style>
