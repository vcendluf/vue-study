<template>
  <div id="app">
   <el-container>
      <el-header>
        header
      </el-header>
  <el-container>
  <el-aside width="200">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#63625ff6"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      >
      <el-submenu index="1">
        <template slot="title">
          <font-awesome-icon :icon="icon" />
          <span>一些工具~</span>
        </template>
        <el-menu-item-group>
          <!-- <el-menu-item index="1-1"><router-link to="/randomPass">随机密码</router-link></el-menu-item> -->
          <el-menu-item index="1-1" @click="randomPassRoute">随机密码</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-container>
      <el-main> <router-view/></el-main>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
export default{
  data () {
    return {
      isCollapse: false,
      activeIndex2: '1'
    }
  },
  computed: {
    icon () {
      return faWrench
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    randomPassRoute () {
      // console.log('test')
      this.$router.push('RandomPass')
    }
  }
}

</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* margin-top: 60px; */
}
.el-header {
  padding: 0;
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* display: flex; */
  /* overflow: hidden; */
  line-height: 60px;
}

.el-header > .el-menu {
  justify-content: center;
  width: 100%;
}

.el-aside {
  /* width: 200px; */
  background-color: #63625ff6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  /* display: flex; */
  /* overflow: hidden; */
}

/* .el-menu{
  background-color: #d3dce6;
  width: 200px;
} */

.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 600px;
}
</style>
