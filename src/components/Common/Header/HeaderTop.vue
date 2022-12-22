<template>
 
    <div class="header-top w-full clearfix">
      <div class="header-topbar fr">
        <div class="topbar-user" ref="login_reg">
          <a href="#" title="登入" @click="enterLogin">登入</a>&nbsp;或&nbsp;<a href="#" title="注册" @click="enterRegister">注册</a>&nbsp;ANTA会员
        </div>
        <div class="topbar-cart">
          <div href="#" title="购物车" class="topbar-icon" @click="gotocar"></div>
        </div>
        <div class="topbar-service" style="margin-right: 30px">
          <a href="#" title="在线客服" class="topbar-icon"></a>
        </div>
        <div class="topbar-en">
          <a href="#" class="topbar-icon">EN</a>
        </div>
      </div>
    </div>

</template>

<script>
import {setCookie,getCookie,clearCookie} from "@/js/cookie.js"
export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    enterLogin(){
      this.$router.push('/login')
    },
    enterRegister(){
      this.$router.push('/register')
    },
    enterUcenter(){
    
      this.$router.push('/ucenter')
    },
    gotocar(){
     
      this.$router.push('/car')
    }
  },
  mounted(){
    window.enterUcenter = this.enterUcenter
    if (getCookie('account')) {
      // 隐藏导航栏里面的登录/注册按钮 ，显示用户电话
      // console.log(getCookie('account'));//15185497924
      let tel = getCookie('account');
      this.$refs.login_reg.innerHTML = `<a href="#" onclick="enterUcenter()">你好！${tel}</a>`;
    }
  }
};
</script>

<style>
</style>