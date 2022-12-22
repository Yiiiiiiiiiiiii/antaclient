<template>
  <div class="reg_type1">
    <div class="reg_form">
      <h5>请输入手机号注册：</h5>
      <input type="text" id="account" placeholder="手机号码" ref="phone"/><br />
      <div class="picture_verify">
        <input type="text" id="pwd" placeholder="图片验证" ref="codetest" style="width: 160px"/>
        <div id="v_container"></div>
      </div>
      <input type="checkbox" ref="checkedbox" style="width: 10px; height: 10px"  />
      <span style="font-size: 13px"
        >我已充分阅读、理解并接受个人信息保护政策的全部内容</span
      >
      <!-- <input type="submit" id="reg_btn" value="立即登录"> -->
      <button id="reg_btn" @click="submitBtn">立即登录</button>
    </div>
    <div class="other_reg_type">
      <div class="top">
        <hr />
        <p>社交账号登录</p>
        <hr />
      </div>
      <div class="weixin"></div>
      <div class="out_link">
        <a href="">账号注册</a>
        <span>|</span>
        <a href="">忘记密码</a>
      </div>
    </div>
  </div>
</template>
<script>
import "../js/gVerify.js";
export default {
  name: "reg3",
  data(){
    return{
      verifyCode:""
    }
  },
  mounted() {
    this.verifyCode = new GVerify("v_container");
    console.log(this.verifyCode);
  },
  methods: {
    submitBtn() {
      // 判断手机号
      let reg = /^1[3-9]\d{9}$/;
      let regTel = this.$refs.phone.value;
      // console.log(regTel);
      if (!reg.test(regTel)) {
        alert("请输入正确格式的号码");
        return false;
      }
      // 判断图片验证码
      console.dir(this.verifyCode);
      if(this.$refs.codetest.value != this.verifyCode.options.code){
        alert("验证码错误");
        return false;
      }
      // 判断是否勾选同意书
      console.dir(this.$refs.checkedbox);
      if(this.$refs.checkedbox.checked == false){
        alert("请先勾选同意书");
        return false;
      }
      // 获取验证码：给对应手机号发送验证码，连接后端进行获取验证码
      this.$axios.get(`/sendcode?tel=${regTel}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
      this.$router.push('/register2');

    },
  },
  
};
</script>
      
  <style lang="scss" scoped>
.reg_form {
  margin-left: 44px;
  h5 {
    height: 50px;
    font-size: 14px;
    color: #666666;
  }
  .picture_verify {
    display: flex;
  }
  #v_container {
    width: 160px;
    height: 40px;
    display: inline-block;
    margin-left: 20px;
  }
  // canvas{
  //   margin-top: 10px;
  // }
  // #pwd{
  //   margin-bottom: 14px;
  // }
  input {
    width: 358px;
    height: 44px;
    margin-bottom: 14px;
    border: 1px solid #e0e0e0;
    outline: none;
    padding-left: 10px;
  }
  #reg_btn {
    width: 360px;
    height: 50px;
    line-height: 50px;
    display: block;
    margin-left: 3px;
    margin-bottom: 14px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    background: #000;
  }
}

.other_reg_type {
  width: 358px;
  height: 120px;
  margin-left: 50px;
  // background-color: blue;
  .top {
    display: flex;
    justify-content: space-around;
    align-self: start;
    margin-top: 13px;
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
    margin: 11px 161px;
    text-align: center;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }
  .out_link {
    padding-top: 3px;
    text-align: center;
    color: #e0e0e0;
    a {
      text-decoration: none;
      color: #333;
    }
  }
}
</style>