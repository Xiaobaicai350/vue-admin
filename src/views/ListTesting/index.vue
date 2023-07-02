<style></style>
<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="address" label="address"> </el-table-column>
    <el-table-column prop="description" label="description"> </el-table-column>
    <el-table-column prop="publicName" label="publicName"> </el-table-column>
    <el-table-column prop="staffName" label="staffName"> </el-table-column>
    <el-table-column prop="updateTime" label="updateTime"> </el-table-column>
    <el-table-column prop="vAQILevel" label="vAQILevel"> </el-table-column>
  </el-table>
</template>

<script>
import { listAssignedInfo } from "@/apis/admin.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  async mounted() {
    const data = await listAssignedInfo();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
  },
};
</script>
