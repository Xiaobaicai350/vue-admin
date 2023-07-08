<style></style>
<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="id" width="40"> </el-table-column>
    <el-table-column prop="exMessage.address" label="异常地址">
    </el-table-column>
    <el-table-column prop="exMessage.description" label="异常描述" width="200">
    </el-table-column>
    <el-table-column prop="publicName" label="举报人姓名"> </el-table-column>
    <el-table-column prop="staffName" label="AQI检测员姓名" width="120">
    </el-table-column>
    <el-table-column prop="updateTime" label="更新时间" width="200">
    </el-table-column>
    <el-table-column prop="aqilevel" label="AQI等级"> </el-table-column>
    <el-table-column prop="CO" label="CO"> </el-table-column>
    <el-table-column prop="PM" label="PM2.5"> </el-table-column>
    <el-table-column prop="SO2" label="SO2"> </el-table-column>
  </el-table>
</template>

<script>
import { testResult } from "@/apis/admin.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  async mounted() {
    const data = await testResult();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
  },
};
</script>
