<template>
    <div>
        <div class="main_container">
            <div class="page_container">
                <div class="ucenter_menu fl">
                    <div class="ucenter_menu_box">
                        <div class="uc_menu_box">
                            <h3>个人中心</h3>
                            <ul>
                                <li class="active" @click="gotoindex">首页</li>
                                <li>我的订单</li>
                                <li @click="gotocollect()">我的收藏</li>
                                <li>我的优惠卷</li>
                                <li>我的售后单</li>
                            </ul>
                        </div>
                        <div class="uc_menu_box">
                            <h3>账户管理</h3>
                            <ul>
                                <li >我的资料</li>
                                <li>收货地址管理</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ucenter_body fr">
                    <div class="uc_box_inner">
                        <div class="uc_page_title">
                            <span>我的资料</span>
                        </div>
                        <div class="flex_box" >
                            <p class="c_0">完善您的个人信息，有助于我们为您提供更加个性化的服务，安踏将尊重并保护您的隐私</p> 
                            <a href="" class="c_1">*修改手机、注销请联系客服</a>
                        </div>
                        <div class="clearfix">
                            <div class="uc_info_box">
                                <h4>账户信息</h4>
                            </div>
                        </div>
                        <div class="uc_box_main">
                            <h4>个人信息</h4>
                            <div class="infos_show" v-if="isShow">
                                <ul>
                                    <li><span class="spn_label">昵称:</span> <span class="sp_value" ref="nikeName">未填写</span> <a  class="to_edit" @click="infosEdit">修改资料</a></li>
                                    <li><span class="spn_label">真实姓名:</span> <span class="sp_value" ref="realName">未填写</span></li>
                                    <li><span class="spn_label">性别:</span><span class="sp_value" ref="sex">未填写</span></li>
                                    <li><span class="spn_label">地区:</span><span class="sp_value" ref="area">未填写</span></li>
                                    <li><span class="spn_label">详细地址:</span><span class="sp_value" ref="detailadress">未填写</span></li>
                                    <li><span class="spn_label">生日:</span><span class="sp_value" ref="birth">未填写</span></li>
                                    <li><span class="spn_label">职业:</span><span class="sp_value" ref="occupation">未填写</span></li>
                                </ul>
                            </div>
                            <div class="infos_edit" v-else>
                                <ul>
                                    <li><span class="spn_label">昵称:</span> <input type="text" placeholder="请输入昵称" ref="nikeNameInput"></li>
                                    <li><span class="spn_label">真实姓名:</span> <input type="text" placeholder="请输入真实姓名" ref="realNameInput"></li>
                                    <li class="sex_form">
                                        <span class="spn_label">性别:</span>
                                        <el-radio-group v-model="radio">
                                            <el-radio v-model="radio" label="男" @change="getValue" ref="getlabel">男</el-radio>
                                            <el-radio v-model="radio" label="女" @change="getValue" ref="getlabel">女</el-radio>
                                            <el-radio v-model="radio" label="保密" @change="getValue" ref="getlabel">保密</el-radio>
                                        </el-radio-group>
                                    </li>
                                    <li><span class="spn_label">详细地址:</span> <input type="text" placeholder="请输入详细地址" ref="detailadressInput"></li>
                                    <li><span class="spn_label">生日:</span> 
                                        <input type="date" ref="birthInput">
                                    </li>
                                    <li><span class="spn_label">职业:</span> <input type="text" placeholder="请输入职业" ref="occupationInput"></li>
                                </ul>
                                <div class="from_btns">
                                    <span class="back" @click="comeBack">返回</span>
                                    <span class="confirm" @click="confirm">确认</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"infos",
    data(){
        return{
            isShow:true,
            radio: "",
            
        }
    },
    methods:{
        
        infosEdit(){
            this.isShow =false;
        },
        getValue(){
            console.dir(this.radio)
            
        },
        comeBack(){
            this.isShow =true;
        },
        confirm(){
            // 修改个人信息
            console.dir(this.$refs.birthInput.value);
            let nikeNameInput = this.$refs.nikeNameInput;
            let realNameInput = this.$refs.realNameInput;
            let sexInput = this.radio;
            let detailadressInput = this.$refs.detailadressInput;
            let birthInput = this.$refs.birthInput;
            let occupationInput = this.$refs.occupationInput;
            // 对性别信息的判断
            
            // 连接后端
            this.$axios.post(`/updateUserinfo`,
                //传给后端的内容
                {
                    username:nikeNameInput.value,
                    truename:realNameInput.value,
                    sex:sexInput,
                    address:detailadressInput.value,
                    birth:birthInput.value,
                    profession:occupationInput.value
                },
                {
                    "Content-Type": "multipart/form-data;boundary=" + new Date().getTime(),
                    withCredentials: true //允许跨域携带凭证(cookie)
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            /* 
                注册路由接口地址：http://127.0.0.1:7001/updateUserinfo
                请求方式：post
                需不要前端给后端传递数据？需要
                返回给前端内容：
                {
                    code:-1
                    data:'登录失效'
                }
                code： -1（登录失效）  1（修改成功）
            */
        
        },
        gotocollect(){
            this.$router.push('/ucenter/collect');
        },
        gotoindex(){
            this.$router.push('/ucenter/index');
            
        }
    },
    mounted(){
        let nikeName = this.$refs.nikeName;
        let realName = this.$refs.realName;
        let sex = this.$refs.sex;
        // console.dir(nikeName);
        
        let detailadress = this.$refs.detailadress;
        let birth = this.$refs.birth;
        let occupation = this.$refs.occupation;
        this.$axios.get(`/getuserinfo`, {
            withCredentials: true //允许跨域携带凭证(cookie)
            }).then(function (response) {
                console.log(response.data);
                // console.log(111);
                let afterData = response.data;
                nikeName.innerHTML=afterData.username;
                realName.innerHTML=afterData.truename;
                sex.innerHTML=afterData.sex;
                // area.value=afterData.truename;
                detailadress.innerHTML=afterData.address;
                console.log(afterData.birth.slice(0,10));
                birth.innerHTML=afterData.birth.slice(0,10);
                occupation.innerHTML=afterData.profession;
                
            }).catch(function (error) {
                console.log(error);
            });
        /* 
             注册路由接口地址：http://127.0.0.1:7001/getuserinfo
            请求方式：get
            需不要前端给后端传递数据？不需要，直接拿登录成功时存储的账号
            返回给前端内容：
            1.查询的用户信息结果 2.返回该账户已经注销
        */
    }
}
</script>
<style lang="scss" scoped>
.main_container{
    width: 100%;
    background: #eeeeee;
    padding: 30px 0;
    .page_container{
        width: 1352px;
        height: 600px;
        margin: 0 auto;
        background: #eeeeee;
        // display: flex;
        .ucenter_menu{
            width: 280px;
            height: 458px;
            background: #fff;
            float: left;
            .uc_menu_box{
                margin: 10px 25px;
                background-color: #fff;
                font-size: 14px;
                line-height: 20px;
                h3{
                    line-height: 60px;
                    font-size: 17px;
                    color: #555;
                    border-bottom: 1px solid #d3d3d3;
                }
                ul{
                    .active{
                        color: #555;
                        line-height: 20px;
                        font-size: 15px;
                    }
                    li{
                        margin-top: 20px;
                        color: #999;
                        cursor: pointer;
                        &:hover{
                            color: #555;
                        }
                    }
                }
            }

        }
        .ucenter_body{
            width: 980px;
            background-color: #fff;
            height: auto;
            float: right;
            // border: 2px solid blue;
            
            .uc_box_inner{
                padding: 20px 25px;
                .uc_page_title{
                    width: 930px;
                    // background: pink;
                    color: #000;
                    font-size: 25px;
                    height: 50px;
                    line-height: 50px;
                    span{
                        border-top: 4px solid;
                    }
                }
                .flex_box{
                    display: flex;
                    justify-content: space-between;
                    // background-color: greenyellow;
                    .c_0{
                        font-size: 14px;
                    }
                    .c_1{
                        font-size: 12px;
                        color: #000;
                    }
                }
                .clearfix{
                    width: 930px;
                    height: 162px;
                    background-color: #fff;
                    .uc_info_box{
                        height: 147px;
                        border: 1px solid #ccc;
                        margin-top: 15px;
                        width: 100%;
                        color: #000;
                        font-size: 14px;
                        h4{
                            background: #f5f5f5;
                            line-height: 35px;
                            padding: 0 15px;
                        }
                    }
                }
                .uc_box_main{
                    border: 1px solid #ccc;
                    font-size: 14px;
                    padding-bottom: 15px;
                    h4{
                        background: #f5f5f5;
                        line-height: 35px;
                        padding: 0 15px;
                    }
                    ul{
                        li{
                            margin-top: 15px;
                            padding: 0 15px;
                            span{
                                display: inline-block;
                            }
                            .spn_label{
                                width: 80px;
                                height: 30px;
                            }
                            .sp_value{
                                width: 600px;
                                height: 30px;
                            }
                            .to_edit{
                                color: #000;
                                float: right;
                                border-bottom: 1px solid #000;
                                cursor: pointer;
                            }
                            input{
                                height: 30px;
                                line-height: 28px;
                                border: 1px solid #ccc;
                                padding: 0 5px;
                                min-width: 200px;
                                border-radius: 2px;
                                outline: none;
                            }
                        }
                    }
                    .sexSelect{
                        cursor: default;
                        span{
                            width: 100px;
                            height: 30px;
                            border: 1px solid #ccc ;
                            text-align: center;
                            line-height: 30px;
                        }
                        input{
                            // outline: none;
                            width: 0;
                            height: 0;
                            min-width: 0;
                        }
                    }
                    .from_btns{
                        margin-top: 10px;
                        span{
                            display: inline-block;
                            width: 110px;
                            height: 36px;
                            border: 1px solid ;
                            line-height: 36px;
                            text-align: center;
                            cursor: pointer;
                        }
                        .back{
                            color: #000;
                            margin-left: 99px;
                            
                        }
                        .confirm{
                            background-color: #000;
                            color: #fff;
                            border: 1px solid ;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>