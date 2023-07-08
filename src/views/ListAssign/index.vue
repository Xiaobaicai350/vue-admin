<style></style>
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="id" label="id" width="40"> </el-table-column>
    <el-table-column prop="updateTime" label="日期"> </el-table-column>
    <el-table-column prop="status" label="是否检测过了">
      <template slot-scope="scope">
        <span v-if="scope.row.status === 1">已检测</span>
        <span v-else-if="scope.row.status === 0">未检测</span>
      </template>
    </el-table-column>
    <el-table-column prop="publicName" label="举报人姓名"> </el-table-column>

    <el-table-column prop="vAQILevel" label="预估AQI等级"> </el-table-column>
    <el-table-column prop="description" label="异常描述"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column prop="staffName[0]" label="委派给AQI检测员姓名">
    </el-table-column>
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
    // 2023-07-02T07:23:51、
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 1) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
