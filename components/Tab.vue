<template>
  <el-menu :default-active="$store.state.selectedmenucode" class="el-menu-demo" mode="horizontal" >
    <el-menu-item
        v-for="(item,index) in tabList"
        :label="item.label"
        :key="item.index"
        :index="item.code"
    >
    <router-link
        class="menu-link"
        :to='{name:item.name}'
    >
      {{item.label}}
    </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    console.log(this.$store.state.tabList)
    return {
      selectedmenucode:this.$store.state.selectedmenucode,
      tabList:this.$store.state.tabList
    }
  },
  beforeUpdate(){
    console.log(this.$store.state.tabList)
  }
}
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item{
    height: 40px;
    line-height:40px;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    color: #409EFF;
}
.menu-link{
    display: block;
    text-decoration: none;
    width:100%;
    height: 100%;
}
</style>
