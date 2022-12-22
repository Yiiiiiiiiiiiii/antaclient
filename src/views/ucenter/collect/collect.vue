<template>
  <div>
    <div class="main_container">
      <div class="page_container">
        <div class="ucenter_menu fl">
          <div class="ucenter_menu_box">
            <div class="uc_menu_box">
              <h3>个人中心</h3>
              <ul>
                <li class="active" @click="gotoindex()">首页</li>
                <li>我的订单</li>
                <li>我的收藏</li>
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
                <span class="tit_left">我的收藏</span>
                <!-- <a href="" class="tit_right" @click="outLogin">退出当前账户</a> -->
              </div>
              <!-- <p>前往<a href="#" class="to-consum-info" @click="perfectInform">完善信息></a></p> -->
            </div>
          </div>
          <div class="uc_box">
            <div class="uc_box_title">
              <span
                style="
                  font-size: 14px;
                  border-bottom: 3px solid #000;
                  font-weight: 600;
                "
                >全部收藏</span
              >
              <!-- <span class="title_left">默认显示近期3笔订单</span> -->
            </div>
            <div class="uc_inner_box">
              <div class="list_empty">
                <div class="list_empty_inner">
                  <div class="noShoucang" v-if="this.isShow">
                    <img
                      src="https://img.fishfay.com/theme/images/antacn/icons/order-empty.svg"
                    />
                    <span>暂无收藏商品，快去选择心仪的商品吧~</span>
                  </div>
                  <div class="collectGoods" v-else>
                    <ul>
                      <li v-for="(el, index) in goodsList" :key="index">
                        <div class="collect_pic">
                          <!-- <img src="https://img.fishfay.com/shopgoods/21/112231106/zt-112231106-1-1 - 副本/dde979b2c861ac8ef65ba403327b311d.jpg?x-image-process=image/resize,w_200,h_200" alt=""> -->
                          <img :src="el.img_url" alt="" />
                        </div>
                        <div class="collect_name">
                          {{ el.name }}
                        </div>
                        <div class="collect_price">￥{{ el.price }}</div>
                        <div class="collect_ops">
                          <i v-if="isStore" ref="store"></i>
                          <!-- <i class="el-icon-star-off" ></i> -->
                          <span
                            style="font-size: 13px"
                            @click="cancelStore(el.gid)"
                            >取消收藏</span
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
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
import { setCookie, getCookie, clearCookie } from "@/js/cookie.js";
export default {
  name: "index",
  data() {
    return {
      isShow: "",
      isStore: true,
      goodsList: [],
    };
  },
  methods: {
    perfectInform() {
      this.$router.push("infos");
    },
    outLogin() {
      clearCookie("account");
    },
    gotoindex() {
      console.log(111);
      this.$router.push("/ucenter/index");
    },
    cancelStore(index) {
      console.log(index);
      this.$axios
        .post("/cancelStore", {
          gid: index,
        })
        .then((response) => {
          alert(response.data.data);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.$axios
      .get("/showStore")
      .then((response) => {
        this.goodsList = response.data.data;

        if (response.data.data.length == 0) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style lang="scss" scoped>
.main_container {
  width: 100%;
  background: #eeeeee;
  padding: 30px 0;
  .page_container {
    width: 1352px;
    height: 458px;
    margin: 0 auto;
    background: #eeeeee;
    // display: flex;
    .ucenter_menu {
      width: 280px;
      height: 458px;
      background: #fff;
      float: left;
      .uc_menu_box {
        margin: 10px 25px;
        background-color: #fff;
        font-size: 14px;
        line-height: 20px;
        h3 {
          line-height: 60px;
          font-size: 17px;
          color: #555;
          border-bottom: 1px solid #d3d3d3;
        }
        ul {
          .active {
            color: #555;
            line-height: 20px;
            font-size: 15px;
          }
          li {
            margin-top: 20px;
            color: #999;
            cursor: pointer;
            &:hover {
              color: #555;
            }
          }
        }
      }
    }
    .ucenter_body {
      width: 980px;
      // background-color: rgb(228, 178, 111);
      background: #eeeeee;
      height: auto;
      float: right;
      // border: 2px solid blue;
      .uc_box {
        background: #fff;
        width: 100%;
        // overflow: hidden;
        margin-bottom: 20px;
        color: #999;
        .uc_inner_box {
          padding: 20px 25px;
          // background-color: green;
          box-sizing: border-box;
          .uc_page_title {
            width: 930px;
            color: #000;
            // font-size: 25px;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            // background: rgb(53, 40, 5);
            .tit_left {
              border-top: 5px solid #000;
              font-weight: 600;
              font-size: 25px;
            }
          }
          p {
            margin-top: 8px;
          }
        }
      }
      .uc_box_title {
        display: flex;
        // background-color: red;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        padding: 20px 25px;
        height: 50px;
        color: #000;
        font-size: 25px;
      }
      .uc_inner_box {
        widows: 100%;
        // height: 190px;
        padding: 20px 25px;
        box-sizing: border-box;
        .list_empty {
          width: 930px;
          // height: 150px;
          // background-color: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          .list_empty_inner {
            // width: 420px;
            // height: 70px;
            // background: rgb(96, 218, 112);
            display: flex;
            align-items: center;
            img {
              width: 118px;
              height: 70px;
            }
            span {
              color: #999;
              font-size: 15px;
            }
            .collectGoods {
              width: 930px;
              height: 329px;
              // background-color: greenyellow;
              ul {
                display: flex;
                li {
                  width: 210px;
                  height: 309px;
                  // background-color: pink;
                  margin-left: 18px;
                }
                .collect_pic {
                  width: 210px;
                  height: 210px;
                  // background-color: palegreen;
                  img {
                    width: 210px;
                    height: 210px;
                  }
                }
                .collect_name {
                  width: 210px;
                  height: 40px;
                  // background-color: purple;
                  font-size: 13px;
                  line-height: 20px;
                  height: 40px;
                  color: #333;
                  overflow: hidden;

                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
                .collect_price {
                  width: 210px;
                  height: 30px;
                  color: #333;
                  // background-color: peru;
                }
                .collect_ops {
                  // font-size: 13px;
                  color: #888;
                  line-height: 24px;
                  cursor: pointer;
                  i {
                    background-repeat: no-repeat;
                    display: inline-block;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    margin-right: 5px;
                    background-image: url("https://img.fishfay.com/theme/images/antacn/icons/heart-cr-bw.svg");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>