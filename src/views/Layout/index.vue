<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 740px"
        >
          <el-menu-item index="1" @click="toHome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2" @click="toListExInformation">
            <i class="el-icon-document"></i>
            <span slot="title">查看异常信息</span>
          </el-menu-item>

          <el-menu-item index="3" @click="toListTesting">
            <i class="el-icon-setting"></i>
            <span slot="title">查看检测数据</span>
          </el-menu-item>
          <el-menu-item index="4" @click="toListAssign">
            <i class="el-icon-location"></i>
            <span slot="title">查看委派信息</span>
          </el-menu-item>
          <el-menu-item index="5" @click="toChart">
            <i class="el-icon-location"></i>
            <span slot="title">查看图标信息</span>
          </el-menu-item>
          <el-menu-item index="6" @click="toAQIDistribution">
            <i class="el-icon-location"></i>
            <span slot="title">AQI分布</span>
          </el-menu-item>
          <el-menu-item index="7" @click="toAQIRadarChart">
            <i class="el-icon-location"></i>
            <span slot="title">AQI雷达</span>
          </el-menu-item>
          <el-menu-item index="8" @click="toAQIBubbleChart">
            <i class="el-icon-location"></i>
            <span slot="title">AQI气泡</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 16px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>管理员名字</span>
        </el-header>
        <!-- 一个分割线 -->
        <el-divider></el-divider>
        <el-main>
          <!-- main主体 -->
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toListExInformation() {
      console.log("hhhh");
      this.$router.push("/ListExInformation").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toListTesting() {
      this.$router.push("/ListTesting").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toListAssign() {
      this.$router.push("/ListAssign").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toChart() {
      this.$router.push("/Chart").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toAQIDistribution() {
      this.$router.push("/AQIDistribution").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toAQIRadarChart() {
      this.$router.push("/AQIRadarChart").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toAQIBubbleChart() {
      this.$router.push("/AQIBubbleChart").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
}
.el-main {
  position: absolute;
  left: 300px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}
</style>
