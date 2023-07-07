<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="100"> </el-table-column>
      <el-table-column prop="updateTime" label="日期" width="170">
      </el-table-column>
      <el-table-column prop="publicName" label="举报人姓名" width="100">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="100">
      </el-table-column>
      <el-table-column prop="vAQILevel" label="预测AQI等级" width="110">
      </el-table-column>
      <el-table-column prop="status" label="是否委派过了" width="110">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">已委派</span>
          <span v-else-if="scope.row.status === 0">未委派</span>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>

      <!-- 最后一列 -->
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleAssign(scope.$index, scope.row)"
            v-if="scope.row.status === 0"
          >
            委派
          </el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleAssign(scope.$index, scope.row)"
            disabled
            v-else
          >
            已委派
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <template>
      <div>
        <el-dialog title="委派" :visible.sync="dialogFormVisible">
          <el-divider>AQI检测员信息</el-divider>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="id" label="id"> </el-table-column>
            <el-table-column prop="name" label="name"> </el-table-column>
            <el-table-column prop="telephone" label="telephone">
            </el-table-column>
          </el-table>
          <el-divider>请提交表单</el-divider>

          <el-form :model="form">
            <el-form-item label="选择委派人名称" :label-width="formLabelWidth">
              <el-select v-model="form.aqiId" placeholder="请选择委派人">
                <el-option
                  v-for="item in tableData2"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="closeDialogAndPut"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { listExInfo, getStaff, postExToAQI } from "@/apis/admin.js";

export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      dialogFormVisible: false,
      form: {
        aqiId: null,
      },
      formLabelWidth: "120px",
      exId: null,
    };
  },
  methods: {
    handleAssign(index, row) {
      this.dialogFormVisible = true;
      this.exId = row.id;
      console.log(index, row);
    },
    async closeDialogAndPut() {
      console.log(this.form.aqiId);
      console.log(this.exId);
      const data = await postExToAQI(this.exId, this.form.aqiId);
      if (data.code === 20000) {
        console.log("委派成功啦");
        this.$message({
          message: "恭喜你，委派成功啦",
          type: "success",
        });
        this.updateData();
      } else {
        this.$message.error("委派失败");
      }
      this.dialogFormVisible = false;
    },
    async updateData() {
      const data = await listExInfo();
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
      }
      this.tableData = data.data;
    },
  },
  components: {},
  async mounted() {
    const data = await listExInfo();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
    console.log("我是ListExInformation的mounted方法");

    const data2 = await getStaff();
    console.log(data2);
    this.tableData2 = data2.data;
  },
};
</script>
