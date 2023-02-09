<template>
  <div class="user-content">
    <div class="user-datashow" v-show="datashow">
      <div class="user-toolbar">
          <el-form :inline="true" :model="query" class="demo-form-inline">
            <el-form-item label="用户">
              <el-input v-model="query.name" placeholder="用户代码/名称"></el-input>
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
          :total="totalPage">
      </el-pagination>
     </div>
  </div>
</template>

<script>

import Displaydata from "./Displaydata.vue"
import axios from "axios"


export default {
  data() {
    return {
      datashow:true,
      currentPage: 1,
      totalPage:1,
      query:{
        name: '',
        region:""
      },
      headList:[
        {prop:"name",label:"姓名",fixed:"t",width:"150"},
        {prop:"sex",label:"性别",width:"150"},
        {prop:"age",label:"年龄",width:"150"},
        {prop:"appellation",label:"家庭关系",width:"150"},
        {prop:"birthday",label:"生日",width:"150"},
      ],
      tableData: [],
      oldtableData: []
    }
  },
  methods:{
    searchUser(){
      var newtableData = [];
      if(this.query.name != ""){
        this.tableData.map(item => {
          if(item.name == this.query.name || item.name.indexOf(this.query.name) != -1){
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
  },
  beforeMount(){
    axios.get("http://localhost:8080/src/dataview/family.json").then(
      response =>{
        console.log(response);
        this.tableData = response.data.tableData;
        this.oldtableData = response.data.oldtableData;
        this.totalPage =  response.data.tableData.length;
      },
      error =>{
        console.log(error.message)
      }
    )
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
