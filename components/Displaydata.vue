<template>
  <!-- :fixed="{{index == 0 ? "flxed" : ""}}" -->
  <el-table
    :data="tableData"
    border
    style="width: 100%;"
    :height="reportH"
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      v-for="(item,index) in headList"
      :prop="item.prop"
      :label="item.label"
      :key="item.index"
      :index="item.index"
    >
    <!-- {{
      :width="item.width"
      item.prop == "option" ?
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template> :
      ""
      }} -->
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props:{
    headList:{
      type:Array,
      default:()=>[]
    },
    tableData:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      reportH:this.$store.state.reportH
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>
  
</style>
