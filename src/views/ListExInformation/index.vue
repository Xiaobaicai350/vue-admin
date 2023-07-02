<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="updateTime" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="supervisorId" label="举报人姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="vAQILevel" label="预测AQI等级"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>

      <!-- 最后一列 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleAssign(scope.$index, scope.row)"
          >
            委派
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <template>
      <div>
        <el-dialog title="委派" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="委派事件id" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选择委派人名称" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { listAllUnassignedExInfo } from "@/apis/admin.js";
export default {
  data() {
    return {
      tableData: [],

      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleAssign(index, row) {
      this.dialogFormVisible = true;
      console.log(index, row);
    },
  },
  components: {},
  async mounted() {
    const data = await listAllUnassignedExInfo();
    console.log(data);
    this.tableData = data.data;
    console.log("我是ListExInformation的mounted方法");
  },
};
</script>
