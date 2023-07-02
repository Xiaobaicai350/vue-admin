<style></style>
<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="updateTime" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="status" label="status" width="180">
    </el-table-column>
    <el-table-column prop="publicName" label="publicName" width="180">
    </el-table-column>

    <el-table-column prop="vAQILevel" label="vAQILevel" width="100">
    </el-table-column>
    <el-table-column prop="description" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
import { listAssigned } from "@/apis/admin.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  async mounted() {
    const data = await listAssigned();
    console.log(data);
    // 2023-07-02T07:23:51、
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
  },
};
</script>
