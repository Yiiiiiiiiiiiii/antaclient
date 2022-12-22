<template>
  <div class="login——type2">
    <div class="login_form">
      <input type="text" id="account" placeholder="手机号码" ref="phone" /><br />
      <!-- <input type="text" id="pwd" placeholder="短信验证" /><br /> -->
      <div class="picture_verify">
        <input type="text" id="pwd" placeholder="短信验证码" style="width: 190px" ref="pwdCode"/> 
        <button id="v_container" ref="sendcode" @click="sendCode">获取验证码</button>
      </div>
      <button id="login_btn" @click="loginBtn">立即登录</button>
    </div>
    <div class="other_login_type">
      <div class="top">
        <hr />
        <p>社交账号登录</p>
        <hr />
      </div>
      <div class="weixin"></div>
      <div class="out_link">
        <a href="#"  @click="enterRegister">账号注册>账号注册</a>
        <span>|</span>
        <a href="#"  @click="adminLogin">管理员登录</a>
      </div>
    </div>
  </div>
</template>
    
<script>
import {setCookie,getCookie,clearCookie} from "../js/cookie.js"
import router from "../router/index.js"
export default {
    name:"Login4",
    
    methods:{
      sendCode(){
        // 发送验证码
        let regTel = this.$refs.phone.value;
        this.$axios.get(`/sendcode?tel=${regTel}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      adminLogin(){
        this.$router.push('/adminlogin')
      },
      enterRegister(){
        this.$router.push('/register')
      },
      loginBtn(){
        let regPwd = this.$refs.pwdCode.value;
        // 判断手机号
        let reg = /^1[3-9]\d{9}$/;
        let regTel = this.$refs.phone.value;
        if (!reg.test(regTel)) {
          alert("请输入正确格式的号码");
          return false;
        }
        // 连接后端登录，并且判断前端发过去的验证码是否和后端的验证码匹配
        this.$axios.post('/login2', {
                tel: regTel,
                passwd: regPwd
            })
            .then(function (response) {
                console.log(response);
                if (response.data.code == 1) {
                    // 设置cookie储存登录状态 直接调用cookie里面的方法 setCookie(key, value, date)
                    // 方法1 直接保存登录状态 value:1(代表是登录状态) date:7(代表有效期为7天)
                    // setCookie('loginstatus', 1, 7)
                    // 方法2 保存登录账号（手机号） 有就代表是处于登录状态
                    
                    setCookie('account', response.data.data.tel, 7);
                    alert('登录成功');
                    router.push('/')
                } else {
                    alert('登录失败');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      }
    }
}
</script>
    
<style lang="scss" scoped>
.login_form {
  .picture_verify{
    display: flex;
  }
  #v_container{
    width: 160px;
    height: 44px;
    display: inline-block;
    // margin-left: 20px;
    background-color: #000;
    border: 1px solid;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 358px;
    height: 44px;
    margin-bottom: 14px;
    border: 1px solid #e0e0e0;
    outline: none;
    padding-left: 10px;
    margin-left: 50px;
  }
  #login_btn {
    width: 360px;
    height: 50px;
    line-height: 50px;
    display: block;
    margin-left: 50px;
    margin-bottom: 14px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    background: #000;
  }
}

.other_login_type {
  width: 358px;
  height: 120px;
  margin-left: 50px;
  // background-color: blue;
  .top {
    display: flex;
    justify-content: space-around;
    align-self: start;
    margin-top: 50px;
    hr {
      width: 130px;
      height: 15px;
      color: #b5b5b5;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #b5b5b5;
    }
    p {
      font-size: 14px;
      color: #333;
    }
  }
  .weixin {
    background-image: url("https://img.fishfay.com/theme/images/icons/wechat-cr-g.svg");
    width: 30px;
    height: 30px;
    margin: 0 12px;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }
  .out_link {
    padding-top: 30px;
    text-align: center;
    color: #e0e0e0;
    a {
      text-decoration: none;
      color: #333;
    }
  }
}
</style>