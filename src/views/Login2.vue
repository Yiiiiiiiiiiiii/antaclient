<template>
  <div class="loginBox">
    <div class="loginBack">
      <div class="login">
        <div class="login_tabs">
          <h6 id="account_pwd_login" ref="pwd_login" @click="changePage(1)">账号密码登录</h6>
          <h6 id="imformation_login" ref="imform_login" @click="changePage(2)">短信快捷登录</h6>
        </div>
        <br><br><br><br>
        <Login3 v-if="isShow"></Login3>
        <Login4 v-else></Login4>
      </div>
    </div>
  </div>
</template>
  
<script>
import Login3 from "./Login3.vue"
import Login4 from "./Login4.vue"
export default {
  name:"Login2",
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    changePage(page){
      if(page==1){
        this.isShow =  true;
        // console.dir(this.$refs.pwd_login.style);
        this.$refs.pwd_login.style.borderBottom = '2px solid #333';
        this.$refs.imform_login.style.borderBottom = '2px solid #bbb';
      }else{
        this.isShow =false;
        this.$refs.imform_login.style.borderBottom = '2px solid #333';
        this.$refs.pwd_login.style.borderBottom = '2px solid #bbb';
      }
    }
  },
  components:{
    Login3,
    Login4
  }
}
</script>
  
  <style lang="scss" scoped>
.loginBox {
  width: 100%;
  height: 600px;
  background-image: url("https://img.fishfay.com/theme/images/antacn/login/login-01.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  .loginBack {
    box-sizing: border-box;
    background-color: #fff;
    width: 500px;
    margin-top: 40px;
    margin-right: 80px;
    float: right;
    position: relative;
    padding: 0 20px;
    height: 512px;
    .login {
      width: 460px;
      height: 512px;
      // background-color: aquamarine;
      .login_tabs {
        margin-left: 49px;
        margin-top: 40px;
        h6 {
          cursor: pointer;
          float: left;
          width: 44%;
          text-align: center;
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 2px solid #bbb;
        }
        #account_pwd_login {
          border-bottom: 2px solid #333;
        }
      }
      
    }
    
  }
}
</style>