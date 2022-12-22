<template>
    <div>
        <div class="main_container">
            <div class="page_container">
                <div class="ucenter_menu fl">
                    <div class="ucenter_menu_box">
                        <div class="uc_menu_box">
                            <h3>个人中心</h3>
                            <ul>
                                <li class="active">首页</li>
                                <li>我的订单</li>
                                <li @click="myCollect">我的收藏</li>
                                <li>我的优惠卷</li>
                                <li>我的售后单</li>
                            </ul>
                        </div>
                        <div class="uc_menu_box">
                            <h3>账户管理</h3>
                            <ul>
                                <li @click="perfectInform">我的资料</li>
                                <li>收货地址管理</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ucenter_body fr">
                    <div class="uc_box">
                        <div class="uc_inner_box">
                            <div class="uc_page_title">
                                <span class="tit_left">你好,</span>
                                <a href="" class="tit_right" @click="outLogin">退出当前账户</a>
                            </div>
                            <p>前往<a href="#" class="to-consum-info" @click="perfectInform">完善信息></a></p>
                        </div>
                    </div>
                    <div class="uc_box">
                        <div class="uc_box_title">
                            <span>我的订单</span>
                            <span class="title_left">默认显示近期3笔订单</span>
                        </div>
                        <div class="uc_inner_box">
                            <div class="list_empty">
                                <div class="list_empty_inner">
                                    <img src="https://img.fishfay.com/theme/images/antacn/icons/order-empty.svg" >
                                    <span>暂无订单记录，快去选择心仪的商品下单吧~</span>
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
import {setCookie,getCookie,clearCookie} from "@/js/cookie.js"
export default {
    name:"index",
    methods:{
        myCollect(){
            this.$router.push('/ucenter/collect');
        },
        perfectInform(){
            this.$router.push('infos')
        },
        outLogin(){
            clearCookie('account')
        }
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
        height: 458px;
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
            // background-color: rgb(228, 178, 111);
            background: #eeeeee;
            height: auto;
            float: right;
            // border: 2px solid blue;
            .uc_box{
                background: #fff;
                width: 100%;
                // overflow: hidden;
                margin-bottom: 20px;
                color: #999;
                .uc_inner_box{
                    padding: 20px 25px;
                    // background-color: green;
                    box-sizing: border-box;
                    .uc_page_title{
                        width: 930px;
                        color: #000;
                        font-size: 25px;
                        height: 50px;
                        line-height: 50px;
                        display: flex;
                        justify-content: space-between;
                        // background: rgb(53, 40, 5);
                        .tit_left{
                            border-top: 5px solid #000;
                        }
                        .tit_right{
                            color:#999;
                            height: 20px;
                            line-height: 20px;
                            font-size: 14px;
                            border-bottom: 1px solid #999;
                            margin-top: 10px;
                            cursor: pointer;
                        }
                    }
                    p{
                        margin-top: 8px;
                    }
                    .to-consum-info{
                        color:#999;
                        line-height: 20px;
                        border-bottom: 1px solid #999;
                        margin-left: 5px;
                    }
                }
            }
            .uc_box_title{
                display: flex;
                // background-color: red;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #e8e8e8;
                padding: 20px 25px;
                height: 50px;
                color: #000;
                font-size: 25px;
                .title_left{
                    color:#999;
                    height: 20px;
                    line-height: 20px;
                    // border-bottom: 1px solid #999;
                    font-size: 14px;
                    // float: right;
                }
            }
            .uc_inner_box{
                widows: 100%;
                // height: 190px;
                padding: 20px 25px;
                box-sizing: border-box;
                .list_empty{
                    width: 930px;
                    height: 150px;
                    // background-color: gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .list_empty_inner{
                        width: 420px;
                        height: 70px;
                        // background: rgb(96, 218, 112);
                        display: flex;
                        align-items: center;
                        img{
                            width: 118px;
                            height: 70px;
                        }
                        span{
                            color: #999;
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>