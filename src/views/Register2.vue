<template>
  <div class="reg——type2">
    <div class="reg_form">
        <h5>
         请输入手机号注册：
        </h5>
      <input type="text" id="account" placeholder="邮箱地址" /><br />
      <input type="text" id="pwd" placeholder="登录密码" /><br />
      <!-- <input type="text" name="" id="" placeholder="图片验证码"><br> -->
      <div class="picture_verify">
        <input type="text" id="pwd" placeholder="图片验证码" style="width: 160px"/> 
        <div id="v_container"></div>
      </div>
      <input type="checkbox" name="" id="" style="width:10px;height:10px;">
      <span style="font-size:13px">我已充分阅读、理解并接受个人信息保护政策的全部内容</span> 
      <button id="reg_btn">立即登录</button>
    </div>
    
  </div>
</template>
      
<script>
import "../js/gVerify.js"
export default {
  name: "reg4",
  mounted() {
    let verifyCode = new GVerify("v_container");
    console.log(verifyCode);
  },
};
</script>
      
  <style lang="scss" scoped>
.reg_form {
    margin-left: 44px;
    h5{
        height: 50px;
        font-size: 14px;
        color: #666666;
    }
    .picture_verify{
    display: flex;
  }
  #v_container{
    width: 160px;
    height: 40px;
    display: inline-block;
    margin-left: 20px;
  }
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
    margin-top: 30px;
    margin-bottom: 14px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    background: #000;
  }
}

</style>