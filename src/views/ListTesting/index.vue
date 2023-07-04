<style></style>
<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="exMessage.address" label="address">
    </el-table-column>
    <el-table-column prop="exMessage.description" label="description">
    </el-table-column>
    <el-table-column prop="publicName" label="publicName"> </el-table-column>
    <el-table-column prop="staffName" label="staffName"> </el-table-column>
    <el-table-column prop="updateTime" label="updateTime"> </el-table-column>
    <el-table-column prop="aqilevel" label="aqilevel"> </el-table-column>
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
