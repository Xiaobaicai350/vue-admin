<template>
  <div :xl="6" :lg="7" class="bg-login" style="height: 100%">
    <!--标题-->
    <el-row type="flex" class="row-bg row-two" justify="center" align="middle">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <!--标题-->
        <h1 class="title">Admin管理系统</h1>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!--form表单-->
    <el-row type="flex" class="row-bg card" justify="center" align="bottom">
      <el-col :span="7" class="login-card">
        <!--loginForm-->
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          label-width="21%"
          class="loginForm"
        >
          <el-form-item label="账户" prop="id" style="width: 380px">
            <el-input v-model="loginForm.id"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="width: 380px">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>

          <el-form-item class="btn-ground">
            <el-button type="primary" @click="submitForm('loginForm')"
              >立即登陆</el-button
            >
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { login } from "@/apis/admin.js";

export default {
  name: "Login",
  data() {
    return {
      // 表单信息
      loginForm: {
        // 账户数据
        id: "123456",
        // 密码数据
        password: "123456",
      },
      // 表单验证
      rules: {
        // 设置账户效验规则
        id: [
          { required: true, message: "请输入账户", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符的账户",
            trigger: "blur",
          },
        ],
        // 设置密码效验规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符的密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 提交表单
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 表单验证成功
          const data = await login(this.loginForm);
          console.log(data);
          if (data.code === 20000) {
            console.log("登录成功");
            localStorage.setItem("token", data.data.token);
            this.$router.push("/");
          } else {
            console.log("登录失败了");
            alert("登录失败了");
          }
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.bg-login {
  /* div的CSS样式 */
  position: absolute;
  width: 100%;
  height: 100%;
}
* {
  /* CSS Reset */
  margin: 0;
  padding: 0;
}
.codeImg {
  /*让验证码图片飘在右边*/
  float: right;
  /*设置一些圆角边框*/
  border-radius: 3px;
  /*设置宽度*/
  width: 26%;
}

.bg-login {
  height: 100%;
  background-image: url("@/assets/background.webp");
  background-size: 100%;
}

.btn-ground {
  text-align: center;
}

.logo {
  margin: 30px;
  height: 70px;
  width: 70px;
  position: fixed;
}

.title {
  text-shadow: -3px 3px 1px #5f565e;
  text-align: center;
  margin-top: 60%;
  color: #41b9a6;
  font-size: 40px;
}

.login-card {
  background-color: #ffffff;
  opacity: 0.9;
  box-shadow: 0 0 20px #ffffff;
  border-radius: 10px;
  padding: 40px 40px 30px 15px;
  width: auto;
}
</style>
