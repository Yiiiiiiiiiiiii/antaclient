<template>
  <div class="regBox">
    <div class="regBack">
      <div class="reg">
        <div class="title">安踏账号注册安全验证</div>
        <div class="reg_form">
          <h5>为了保护账号安全，需要验证手机有效性</h5>
          <input type="text" id="account" placeholder="手机号码" ref="phone" /><br />
          <input type="text" placeholder="密码登录" ref="pwd">
          <div class="picture_verify">
            <input type="text" id="pwd" placeholder="短信验证码" ref="code" style="width: 160px" />
            <div id="v_container" ref="codecontent">验证码获取</div>
          </div>
          
          <button id="reg_btn" @click="submitBtn" >确认</button>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router/index.js"
export default {
  name: "Codeverify",
  data(){
    return{
      count:0,
    }
  },
  methods:{
    submitBtn(){
      // 判断手机号
      let reg = /^1[3-9]\d{9}$/;
      let regTel = this.$refs.phone.value;
      // console.log(regTel);
      if (!reg.test(regTel)) {
        alert("请输入正确格式的号码");
        return false;
      }
      // 密码要在6-12位
      if(this.$refs.pwd.value.length < 6 || this.$refs.pwd.value.length > 12){
        alert('密码要在6-12位置之间');
        return false;
      }
      // 连接后端 判断输入的验证码是否正确--后端做判断
      this.$axios.post('/register', {
                tel: this.$refs.phone.value,
                passwd: this.$refs.pwd.value,
                telcode:  this.$refs.code.value
            })
            .then(function (response) {
                console.log(response);
                // alert(response.data.data);
                if(response.data.code == 1){
                  router.push('/');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        /* 
            注册路由接口地址：/register
            请求方式：post
            需不要前端给后端传递数据？需要：
            手机号：tel
            密码： passwd
            验证码：telcode
            返回给前端内容：
            {
                code: 1,
                data: '注册成功'
            }
            code: 1(注册成功)  -1(当前账号已经注册过)  -2（验证码错误）
        */
    }
  },
  mounted(){
    this.count=60;
    this.$refs.codecontent.innerHTML = `${this.count}秒后获取` ;
    var timer = setInterval(()=>{
      this.count--;
      this.$refs.codecontent.innerHTML = `${this.count}秒后重试` ;
      if(this.count == 0){
        // this.count = 60;
        clearInterval(timer);
        this.$refs.codecontent.innerHTML = "重新获取";
      }
    }, 1000);
  }
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
    //   background-color: aquamarine;
      .title{
        width: 358px;
        height: 44px;
        color: rgb(130, 126, 126);
        font-weight: 700;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 40px 40px 44px;
        
      }
      .reg_form {
        margin-left: 44px;
        h5 {
          height: 30px;
          font-size: 14px;
          color: rgb(77, 75, 75);
        }
        .picture_verify {
          display: flex;
        }
        #v_container {
          width: 160px;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          background-color: rgb(213, 211, 211);
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
    }
  }
}
</style>