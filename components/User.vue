<template>
  <div class="user-content">
    <div class="user-datashow" v-show="datashow">
      <div class="user-toolbar">
          <el-form :inline="true" :model="query" class="demo-form-inline">
            <el-form-item label="用户">
              <el-input v-model="query.usercode" placeholder="用户代码/名称"></el-input>
            </el-form-item>
            <el-form-item label="用户类型">
              <el-select v-model="query.region" placeholder="用户类型">
                <el-option label="" value=""></el-option>
                <el-option label="普通用户" value="normal"></el-option>
                <el-option label="超级用户" value="super"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="searchUser">查询</el-button>
            </el-form-item>
          </el-form>
      </div>
      <div class="user-displaydata">
        <Displaydata :headList="headList" :tableData="tableData" ></Displaydata>
      </div>
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
     </div>
  </div>
</template>

<script>

import Displaydata from "./Displaydata.vue"


export default {
  data() {
    return {
      datashow:true,
      currentPage: 1,
      query:{
        usercode: '',
        region:""
      },
      headList:[
        {prop:"usercode",label:"用户代码",fixed:"t",width:"150"},
        {prop:"username",label:"用户名称",width:"150"}
      ],
      tableData: [
        {usercode:'Jordan',username:'乔丹'},
        {usercode:'Magic',username:'魔术师'},
        {usercode:'Kobe',username:'科比'},
        {usercode:'Bird',username:'大鸟'},
        {usercode:'Curry',username:'库里'}
      ],
      oldtableData:[
        {usercode:'Jordan',username:'乔丹'},
        {usercode:'Magic',username:'魔术师'},
        {usercode:'Kobe',username:'科比'},
        {usercode:'Bird',username:'大鸟'},
        {usercode:'Curry',username:'库里'}
      ]
    }
  },
  methods:{
    searchUser(){
      var newtableData = [];
      if(this.query.usercode != ""){
        this.tableData.map(item => {
          if(item.usercode == this.query.usercode || item.usercode.indexOf(this.query.usercode) != -1
          || item.username.indexOf(this.query.usercode) != -1
          ){
              newtableData.push(item);
          }
        });
        this.tableData = newtableData;
      }else{
        this.tableData = this.oldtableData;
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components:{
    Displaydata
  }
}
</script>

<style scoped>
.user-content{
  width:100%;
}
.user-toolbar{
  display:flex;
  padding:1%;
  background-color: #fff;
}
.user-query{
  width:90%;
}
.user-buttonbox{
  width:10%;
}
.user-input{
  width:180px;
}
.user-search{
  width: 100px;
  font-size: 16px;
}
</style>
