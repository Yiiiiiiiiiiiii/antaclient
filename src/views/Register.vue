<template>
  <div class="regBox">
    <div class="regBack">
      <div class="reg">
        <div class="reg_tabs">
          <h6 id="account_pwd_reg" ref="first" @click="changePage(1)" class="active">手机注册</h6>
          <h6 id="imformation_reg" ref="second" @click="changePage(2)">邮箱注册</h6>
        </div>
        <br /><br /><br /><br />
        <Register1 v-if="isShow"></Register1>
        <Register2 v-else></Register2>
      </div>
    </div>
  </div>
</template>
<script>
import Register1 from "./Register1.vue";
import Register2 from "./Register2.vue";

export default {
  name: "reg2",
  data() {
    return {
      isShow: true,
      
    };
  },
  methods: {
    changePage(page) {
      if (page == 1) {
        this.isShow = true;
        console.dir(this.$refs.first);
        this.$refs.first.classList.toggle("active");
        this.$refs.second.classList.toggle("active")
      } else {
        this.isShow = false;
        this.$refs.first.classList.toggle("active");
        this.$refs.second.classList.toggle("active");
      }
    },
  },
  components: {
    Register1,
    Register2,
  },
  
};
</script>
    
<style lang="scss" scoped>
.regBox {
  width: 100%;
  height: 600px;
  background-image: url("https://img.fishfay.com/theme/images/antacn/login/login-01.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  .regBack {
    box-sizing: border-box;
    background-color: #fff;
    width: 500px;
    margin-top: 40px;
    margin-right: 80px;
    float: right;
    position: relative;
    padding: 0 20px;
    height: 512px;
    .reg {
      width: 460px;
      height: 512px;
      // background-color: aquamarine;
      .reg_tabs {
        margin-left: 49px;
        margin-top: 40px;
        h6 {
          cursor: pointer;
          position: relative;
          float: left;
          width: 44%;
          text-align: center;
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          background: #fbfbfb;
          color: #999;
        }
        .active {
          background-color: #000;
          color: #fff;
        }
        
        .active::after {
          content: "";
          position: absolute;
          border-top: 7px solid #000;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          top: 100%;
          left: 50%;
          margin-left: -4px;
        }
      }
    }
  }
}
</style>