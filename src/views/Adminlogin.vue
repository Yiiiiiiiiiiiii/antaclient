<template>
  <div class="loginBox">
    <div class="loginBack">
      <div class="login">
        <div class="login_tabs">
          <h6 id="account_pwd_login" ref="pwd_login">
            管理员密码登录
          </h6>
        </div>
        <br /><br /><br /><br />
        <div class="login_form">
          <input
            type="text"
            id="account"
            placeholder="管理员手机号码"
            ref="phone"
          /><br />
          <input type="text" id="pwd" placeholder="登录密码" ref="password" /><br />
          <button id="login_btn" @click="loginBtn">立即登录</button>
        </div>
        <div class="other_login_type">
          <div class="top">
            <hr />
            <p>社交账号登录</p>
            <hr />
          </div>
          <div class="weixin"></div>
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
  import {setCookie,getCookie,clearCookie} from "../js/cookie.js"
  import router from "../router/index.js"
export default {
  name: "Adminlogin",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    
    enterRegister() {
      this.$router.push("/register");
    },
    loginBtn() {
      // 基本手机号和密码输入格式的判断
      let regTel = this.$refs.phone.value;
      if (!/^1[3-9]\d{9}$/.test(regTel)) {
        alert("输入手机号不正确，请重新输入");
        return false;
      }
      let regPwd = this.$refs.password.value;
      if (regPwd.length < 6 || regPwd.length > 12) {
        alert("密码输入格式不对");
        return false;
      }
      // 连接后端，判断输入的密码和手机号是否正确
      this.$axios
        .post("/adminLogin", {
          tel: regTel,
          passwd: regPwd,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.code == 1) {
            // 设置cookie储存登录状态 直接调用cookie里面的方法 setCookie(key, value, date)
            // 方法1 直接保存登录状态 value:1(代表是登录状态) date:7(代表有效期为7天)
            // setCookie('loginstatus', 1, 7)
            // 方法2 保存登录账号（手机号） 有就代表是处于登录状态
            console.log(1111);
            setCookie("account", response.data.data.tel, 7);
            alert("登录成功");
            router.push("/admin");
          } else if (response.data.code == -1) {
            alert("该账号不存在");
          } else {
            alert("密码错误");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      /* 
            登录路由接口地址：http://127.0.0.1:7001/login
            请求方式：post
            需不要前端给后端传递数据？需要：
            手机号：tel
            密码： passwd
            返回给前端内容：
            {
                code: 1,
                data: '登录成功'
            }
            code: 1(登录成功)  -1(账号不存在)  -2（密码错误）
        */
    },
  },
  
};
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
      .login_form {
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
          margin: 20px 161px;
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 50%;
          overflow: hidden;
        }
        
      }
      .login_tabs {
        margin-left: 49px;
        margin-top: 40px;
        h6 {
          cursor: pointer;
          float: left;
          width: 80%;
          margin-left: 15px;
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