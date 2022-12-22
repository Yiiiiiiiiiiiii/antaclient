<template>
  <div class="outer">
    <h1>商品管理系统</h1>
    <Admincenter></Admincenter>
    <el-row>
      <el-button round @click="addinfo">添加信息</el-button>
    </el-row>
  </div>
</template>
      
      <script>
import Admincenter from "@/components/Pages/adminCenter.vue";

export default {
  name: "admin",
  components: {
    Admincenter,
  },
  methods:{
    addinfo(){
      this.$router.push({
        path: "/addinfo"
      });
    }
  },
  // beforeRouteLeave(to,from,next){}
  
};
</script >
      <style lang="scss">
h1 {
  width: 600px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
}
.outer {
  width:100vw;

  margin: 0 auto;
}
</style>
