<template>
  <div>
    <div class="nologin" v-if="this.isShow">
      <span><a style="color: red">您还没有登入</a></span
      ><br />
      <span style="color: lightgray"
        >立即去<a style="text-decoration: underline; color: lightgray" href=""
          >登入</a
        >或者<a style="text-decoration: underline; color: lightgray" href=""
          >注册</a
        >安踏会员</span
      >
    </div>

    <div class="cartop">
      <span
        ><a style="font-size: 30px; font-weight: 800; text-decoration: overline"
          >我的</a
        ><a style="font-size: 30px; font-weight: 800">购物车</a></span
      >
      <span><a>共1件</a></span>
    </div>

    <div style="width: 1000px; height: 50px; margin: 0 auto">
      <input type="checkbox" @click="selectall()" />
      <span style="margin-left: 20px">全选</span>
    </div>

    <div class="mycar" v-for="(e, index) in carList" ref="good">
      <input type="checkbox" ref="checkedbox" @click="checkedBtn(index)" />
      <span @click="gotodetail(e)"><img :src="e.img_url" /></span>
      <div>
        <span style="font-weight: 800; font-size: 19px">{{
          e.category3_name
        }}</span
        ><br />
        <span style="font-weight: 100; font-size: 14px; color: gray"
          >{{ e.pro_size }}{{ e.pro_color }}</span
        ><br />
        <span style="font-weight: 100; font-size: 14px; color: gray">数量</span>

        <button style="width: 15px" @click="reducenum(index)">-</button>
        <span ref="getnum" style="margin: 0px 20px 0px 20px">{{
          e.sku_num
        }}</span>
        <button style="width: 15px" @click="addnum(index)">+</button>
      </div>

      <div>
        <span>{{ e.car_price }}</span
        ><br />
        <span @click="removeshoes(index)" style="cursor: pointer">删除</span>
      </div>
    </div>

    <div class="footer-fixed">
      <div>
        <input type="checkbox" style="margin-right: 5px" @click="selectall" />
        <a style="color: white">全选商品</a>
        <a style="margin-left: 14px; color: white; cursor: pointer">删除商品</a>
      </div>

      <div>
        <a style="color: white">总价</a>
        <a href="" style="color: white">{{ counttotalPrice }}</a>
      </div>
      <div><button>结算</button></div>
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie, clearCookie } from "@/js/cookie.js";
export default {
  name: "CarPage1",
  data() {
    return {
      carList: [],
      checkedLIst: [],
      isShow: false,
    };
  },
  methods: {
    addnum(index) {
      this.carList[index].sku_num++;
      this.checkedLIst.push(this.carList[index]);
    },
    reducenum(index) {
      if (this.carList[index].sku_num == 0) {
        this.$refs.good[index].remove();
      } else {
        this.carList[index].sku_num--;
        this.checkedLIst.push(this.carList[index]);
      }
    },
    removeshoes(index) {
      this.$refs.good[index].remove();
    },
    checkedBtn(index) {
      console.log(this.$refs.checkedbox[index]);
      if (this.$refs.checkedbox[index].checked == true) {
        this.checkedLIst.push({
          car_price: this.carList[index].car_price,
          sku_num: this.carList[index].sku_num,
        });
        console.log(this.checkedLIst);
      }
    },
    selectall() {
      // console.log(this.$refs.checkedbox,"cc")
      this.$refs.checkedbox.forEach((item) => {
        item.checked = !item.checked;
      });

      this.$refs.checkedbox.every((currentValue, index, arr) => {
        if (currentValue.checked == true) {
          this.checkedLIst = this.carList;
        } else {
          this.checkedLIst = [];
        }
      });
    },

    gotodetail(el) {
      //   console.log(el.gid);
      this.$router.push({
        path: "/productsdetail",
        query: {
          gid: el.gid,
        },
      });
    },
  },
  created() {
    if (getCookie("account")) {
     this.isShow=false
    }
	else{
		this.isShow=true 
	}

    this.$axios
      .get("/intocar")
      .then((response) => {
        console.log(response.data);
        this.carList = response.data;
        console.log(this.carList);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    counttotalPrice() {
      let totalPrice = 0;
      this.checkedLIst.forEach((item) => {
        totalPrice += item.car_price * item.sku_num;
      });
      return totalPrice;
    },
  },
};
</script>

<style>
.nologin {
  width: 1000px;
  height: 100px;
  border: 0.5px solid lightgray;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.nologin > span {
  margin: 50px;
  width: 400px;
  height: 80px;
}

.nologin > span > a {
  line-height: 45px;
}

.cartop {
  width: 1000px;
  height: 50px;

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cartop > span {
  margin-right: 10px;
  font-size: 3px;
}

.cartop > span:nth-of-type(2) > a {
  color: darkgray;
}

.mycar {
  width: 1000px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.mycar > span:nth-of-type(1) > img {
  width: 100px;
  height: 100px;
  margin-left: 40px;
  margin-right: 30px;
}
.mycar > div:nth-of-type(1) {
  width: 800px;
  height: 100px;
  line-height: 35px;
}
.mycar > div:nth-of-type(2) {
  width: 100px;
  height: 75px;
  line-height: 40px;
}

.footer-fixed {
  width: 100%;
  height: 75px;
  background: rgba(41, 41, 41, 0.9);
  position: fixed;
  bottom: 0px;
  border-top: 0.5px solid ghostwhite;
}

.footer-fixed > div {
  display: inline-block;
}

.footer-fixed > div:nth-of-type(1) {
  margin-left: 80px;
}

.footer-fixed > div:nth-of-type(2) {
  height: 75px;
  width: 75px;
  margin-left: 700px;
  margin-top: 15px;
  line-height: 15px;
}

.footer-fixed > div:nth-of-type(2) > a {
  margin-bottom: 5px;
  display: inline-block;
}

.footer-fixed > div:nth-of-type(3) {
  width: 100px;
  height: 75px;
  line-height: 75px;
  margin-left: 75px;
}

.footer-fixed > div:nth-of-type(3) > button {
  width: 200px;
  height: 50px;
  color: white;
  background-color: red;
  border: 0px;
}
</style>
