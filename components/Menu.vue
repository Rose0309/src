<template>
<el-row class="tac">
      <el-menu
          v-for="(item,ind) in menuList"
          :key="item.ind"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#2d3952"
          text-color="#fff"
          active-text-color="#7bff7b"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
              <template slot="title">
                  <span>{{item.menudesc}}</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item
                      v-for="(childitem,index) in item.menuchildlist"
                      :key="item.index"
                      @click="addTab(childitem,index)"
                  >
                  <router-link
                       class="menu-link"
                       :to='{name:childitem.name}'
                  >
                  {{childitem.menudesc}}
                  </router-link>
                  </el-menu-item>
              </el-menu-item-group>
          </el-submenu>
      </el-menu>
 </el-row>
</template>

<script>
let menuList = [
    {
        menucode:"pub001",
        menudesc:"基础数据",
        menuchildlist:[
            {menucode:"001",menudesc:"首页展示",name:"home"},
            // {menucode:"002",menudesc:"菜单展示",name:"menu"},
            {menucode:"003",menudesc:"用户管理",name:"user"},
            {menucode:"004",menudesc:"关于我们",name:"about"},
            {menucode:"005",menudesc:"家庭信息",name:"family"}
        ]
    },
    // {
    //     menucode:"pub002",
    //     menudesc:"系统管理",
    //     menuchildlist:[
    //         {menucode:"005",menudesc:"登录",name:"login"},
    //         {menucode:"006",menudesc:"注册",name:"register"}
    //     ]
    // }
];
export default {
  data () {
    return {
        homeLink:"/",
        menuList:menuList
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      addTab(childitem,index){
          const tabList = this.$store.state.tabList;
          var isadd = true;
          if(tabList.length <= 0){
              this.$store.commit('changeTablist',{
                    code:childitem.menucode,
                    label:childitem.menudesc,
                    name:childitem.name
              });
          }else{
              //如果未添加菜单,添加进去菜单
              if(!tabList.some(item => item.code == childitem.menucode)){
                this.$store.commit('changeTablist',{
                  code:childitem.menucode,
                  label:childitem.menudesc,
                  name:childitem.name
                });
              }
          }
          //修改选中菜单
          this.$store.commit('changeSelectedmenucode',childitem.menucode);
      }
   }
}
</script>

<style scoped>
.menu-link{
    display: block;
    text-decoration: none;
    width:100%;
    height: 100%;
    color:#fff;
}
.el-menu{
  border:none;
}
</style>
