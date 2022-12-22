<template>
  <div class="detail" v-if="isShow">
    <div class="smallimage">
      <ul>
        <!-- <li  v-for="(e,index) in datalist" @click="changepicture(index)"><img :src="e.bgc"></li> -->
        <li
          v-for="(e, index) in this.colortwo"
          @click="changepicture(index)"
          :key="index"
        >
          <img :src="e" />
        </li>
        <!-- 五个小图 -->
        <li
          class="iconfont"
          style="
            font-size: 16px;
            margin-top: 165px;
            color: darkgrey;
            text-align: center;
          "
        >
          <i class="el-icon-s-promotion"></i><br />
          <a style="color: darkgrey" href="">分享</a>
        </li>
        <li
          @click="shoucang"
          class="iconfont"
          ref="shoucangicon"
          style="font-size: 16px; color: darkgrey; text-align: center"
        >
          <i class="el-icon-star-off" v-if="isshoucang2"></i><br />
          <i class="el-icon-star-on" v-if="isshoucang1"></i>
          <div style="color: darkgrey" href="#">收藏</div>
        </li>
      </ul>
    </div>

    <div class="bigimage">
      <img :src="address" />
    </div>
    <div class="information">
      <div>
        <span
          ><a>{{ kind }}</a></span
        >
      </div>
      <div>
        <span
          ><a>{{ shoesname }}</a></span
        >
      </div>
      <div>
        <span
          ><a>款号：{{ spu_id }}</a></span
        >
      </div>
      <div>
        <span
          ><a>{{ price }}</a></span
        >
      </div>
      <div>
        
        <span @click="changecolortwo()"><img :src="colortwo[0]" /></span>
      </div>
      <div>
        <span>尺码：</span>
        <input
          type="text"
          :value="size"
          ref="sizes"
          id="selectSize"
          placeholder="请选择尺码"
          readonly="readonly"
          @click="chooseSize"
        />
        <!-- <i class="icon-triangle-right"></i> -->
        <span>|</span>
        <span style="margin-left: 20px">数量：</span>
        <input
          type="text"
          :value="number"
          id="selectNumber"
          placeholder="请选择数量"
          readonly="readonly"
          @click="chooseNumber"
        />
        <!-- <i class="icon-triangle-right"></i> -->
        <span></span>
      </div>
      <div>
        <span><a>领取优惠劵</a></span>
      </div>

      <div>
        <div class="add" @click="addit()"><a>加入购物车</a></div>
        <div class="buy" @click="buyit()"><a>立即购买</a></div>
      </div>

      <div class="chooseSize" v-show="hideornohide1">
        请选择符合你的尺码数:
        <button
          class="iconfont"
          style="border: 0px; width: 20px; height: 20px; color: blue"
          @click="hideSize"
        >
          &#xe65c;
        </button>
        <ul>
          <li id="39" @click="wanted1(39)">39</li>
          <li id="40" @click="wanted1(40)">40</li>
          <li id="41" @click="wanted1(41)">41</li>
          <li id="42" @click="wanted1(42)">42</li>
          <li id="42.5" @click="wanted1(42.5)">42.5</li>
          <li id="43" @click="wanted1(43)">43</li>
          <li id="44" @click="wanted1(44)">44</li>
          <li id="45" @click="wanted1(45)">45</li>
          <li id="46" @click="wanted1(46)">46</li>
        </ul>
      </div>

      <div class="chooseNumber" v-show="hideornohide2">
        请选择你想购买的数量:
        <button
          class="iconfont"
          style="border: 0px; width: 20px; height: 20px; color: blue"
          @click="hideNumber"
        >
          &#xe65c;
        </button>
        <ul>
          <li id="1" @click="wanted2(1)">1</li>
          <li id="2" @click="wanted2(2)">2</li>
          <li id="3" @click="wanted2(3)">3</li>
          <li id="4" @click="wanted2(4)">4</li>
          <li id="5" @click="wanted2(5)">5</li>
          <li id="6" @click="wanted2(6)">6</li>
          <li id="7" @click="wanted2(7)">7</li>
          <li id="8" @click="wanted2(8)">8</li>
          <li id="9" @click="wanted2(9)">9</li>
        </ul>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { setCookie, getCookie, clearCookie } from "@/js/cookie.js";
export default {
  name: "Detail",
  data() {
    return {
      address: "",
      hideornohide1: false,
      hideornohide2: false,
      size: "",
      number: "",
      gid: "",
      detaildata: [],
      colorone: [],
      colortwo: [],
      shoesname: "",
      spu_id: "",
      price: "",
      kind: "",
      img_url: "",
      category3_id: "",
      pro_color: "",
      isshoucang1: true,
      isshoucang2: false,
      isShow: false,
      Datalist1: [],
      Datalist2: [],
      allData: [],
      obj: {},
      iwanted: {},
      user_id: getCookie("account"),
    };
  },
  methods: {
    shoucang() {
      console.log(22222);
      this.$refs.shoucangicon.style.color = "black";
      this.$axios
        .post("/shoucang", {
          gid: this.$route.query.gid,
          price: this.Datalist1[0].price,
          img_url: this.Datalist2[0].bigpic,
          name:this.Datalist1[0].spu_name,
        })
        .then((res) => {
          // console.log(res.data.code==1);
          if (res.data.code == 1) {
            alert("收藏成功");

            location.reload();
          } else {
            alert("取消收藏");

            location.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    changepicture(index) {
      this.address = this.colorone[index];
    },
    changecolorone() {
      this.address = this.colorone[0];
    },
    changecolortwo() {
      this.address = this.colortwo[0];
    },
    // -----------------------------------------
    chooseSize() {
      (this.hideornohide1 = !this.hideornohide1), (this.hideornohide2 = false);
    },
    hideSize() {
      this.hideornohide1 = false;
    },
    // -----------------------------------------
    chooseNumber() {
      (this.hideornohide2 = !this.hideornohide2), (this.hideornohide1 = false);
    },
    hideNumber() {
      this.hideornohide2 = false;
    },
    // ------------------------------------------
    wanted1(id) {
      this.size = id;
      console.log(this.size);
    },
    wanted2(id) {
      this.number = id;
    },
    // ------------------------------------------
    addit() {
      this.$axios
        .post("/uploadcar", {
          car_price: this.price,
          sku_num: this.number,
          img_url: this.img_url,
          category3_id: this.category3_id,
          gid: this.gid,
          pro_color: this.pro_color,
          pro_size: this.size,
          user_id: this.user_id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    buyit() {},
    // -------------------------------------------
  },

  created() {
    console.log(this.$route.query.gid);
    console.log(this.$route.query);
    this.$axios
      .post("/getproductsdetail1", {
        // gid: '1'
        gid: this.$route.query.gid,
      })
      .then((response) => {
        console.log(response.data);
        let datalist = response.data.data;
        console.log(datalist);

        for (let i = 0; i < datalist.length; i++) {
          this.Datalist1.push(datalist[i]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios
      .post("/getproductsdetail2", {
        gid: this.$route.query.gid,
      })
      .then((response) => {
        console.log(response.data);
        let datalist = response.data.data;
        console.log(datalist);

        for (let i = 0; i < datalist.length; i++) {
          this.Datalist2.push(datalist[i]);
        }

        console.log(this.Datalist2[0], this.Datalist1[0]);
        console.log(this.Datalist2[0].bigpic);
        this.address = this.Datalist2[0].bigpic;
        this.colortwo.push(this.Datalist2[0].smallpic1);
        this.colortwo.push(this.Datalist2[0].smallpic2);
        this.colortwo.push(this.Datalist2[0].smallpic3);
        this.colortwo.push(this.Datalist2[0].smallpic4);
        this.colortwo.push(this.Datalist2[0].smallpic5);
        console.log(this.colortwo);

        // this.kind=this.Datalist1[0].
        this.shoesname = this.Datalist1[0].spu_name;
        this.category3_id = this.Datalist1[0].category3_id;
        this.spu_id = this.Datalist1[0].spu_id;
        this.price = this.Datalist1[0].price;
        this.gid = this.Datalist1[0].gid;
        this.img_url = this.Datalist2[0].smallpic1;
        this.pro_color = this.Datalist2[0].pro_color;
        // this.kind = this.Datalist1[0].category3_id;
        console.log(typeof this.Datalist1[0].category3_id);
        switch (this.Datalist1[0].category3_id) {
          case "110":
            this.kind = "综训鞋";
            break;
          case "111":
            this.kind = "板鞋";
            break;

          case "112":
            this.kind = "休闲鞋";
            break;
          case "113":
            console.log(1111);
            this.kind = "篮球鞋";
            break;
          case "114":
            this.kind = "跑鞋";
            break;
          default:
            break;
        }
        this.isShow = true;
      })
      .catch(function (error) {
        console.log(error);
      });

    // 判断是否被收藏
    this.$axios
      .get(`/isShoucang?gid=${this.$route.query.gid}`)
      .then((response) => {
        console.log(response.data.code);
        if (response.data.data.length == 0) {
          this.isshoucang1 = false;
          this.isshoucang2 = true;
        } else {
          this.isshoucang1 = true;
          this.isshoucang2 = false;
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(this.isshoucang1);
  },

  //   mounted() {
  //     // console.dir(this.obj);
  //     // console.dir(this.allData);
  //     // this.address = this.Datalist2[0].bigpic;
  // 	console.log(this.Datalist2[0].bigpic);
  //   },
};
</script>

<style>
.detail {
  width: 100%;
  background-color: white;
  height: 654px;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

/* smallimage */
.smallimage {
  height: 645px;
  width: 75px;
  position: relative;
  left: 150px;
}

.smallimage ul {
  width: 75px;
  height: 654px;
}

.smallimage li {
  width: 50px;
  height: 50px;
  margin: 20px;
}

.smallimage li > img {
  width: 50px;
  height: 50px;
  border: 0.5px solid gainsboro;
}

/* bigimage */
.bigimage {
  height: 645px;
  width: 645px;
  margin: 10px 0px 0px 170px;
  position: relative;
  border: 0.5px solid gainsboro;
}

.bigimage > img {
  width: 645px;
  height: 645px;
}

/* information */
.information {
  height: 645px;
  width: 555px;
  position: relative;
  margin: 10px 0px 0px 0px;
}

.information > div {
  width: 500px;
  /* background-color: antiquewhite; */
  margin: 10px 0px 0px 0px;
  padding: 5px;
  text-align: left;
}

.information > div:nth-of-type(1) {
  font-size: 7px;
  color: darkgray;
}

.information > div:nth-of-type(2) {
  font-size: 25px;
  line-height: 40px;
}

.information > div:nth-of-type(3) {
  color: #999;
  line-height: 25px;
}

.information > div:nth-of-type(4) {
  font-size: 22px;
  color: #000;
  font-weight: 600;
  line-height: 30px;
  margin: 15px 0;
}

.information > div:nth-of-type(5) > span > img {
  width: 75px;
  height: 75px;
  margin: 10px;
  border: 1px solid darkgray;
}

.information > div:nth-of-type(6) > input {
  border: 0;
  height: 30px;
  width: 100px;
  padding: 0 10px;
  line-height: 30px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  margin-right: 20px;
  margin-left: 20px;
}

.information > div:nth-of-type(6) > .line {
  display: block;
  float: left;
  width: 10%;
  height: 30px;
  position: relative;
}

.information > div:nth-of-type(6) {
  margin: 10px 0;
  border-top: 1px solid #ccc;
  position: relative;
  padding-left: 20px;
  height: 30px;
  padding-top: 15px;
}

.information > div:nth-of-type(7) {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 50px;
}

.information > div:nth-of-type(7) > span > a {
  font-size: 7px;
  color: darkgray;
  line-height: 50px;
}

.information > div:nth-of-type(8) {
  height: 100px;
}

.information > div:nth-of-type(8) > div {
  display: inline-block;
}

.information > div:nth-of-type(8) > .add {
  width: 200px;
  height: 70px;
  text-align: center;
  border: 1px solid black;
  margin: 10px;
  line-height: 70px;
}

.information > div:nth-of-type(8) > .buy {
  width: 200px;
  height: 70px;
  text-align: center;
  border: 1px solid black;
  margin: 10px;
  line-height: 70px;
  background-color: black;
}

.information > div:nth-of-type(8) > .add > a {
  color: black;
}

.information > div:nth-of-type(8) > .buy > a {
  color: white;
}

/* Size*/
.information > div:nth-of-type(9) {
  width: 400px;
  height: 150px;
  position: absolute;
  top: 203px;
  background-color: ghostwhite;
}

.information > div:nth-of-type(9) > button {
  margin-left: 200px;
}

.information > div:nth-of-type(9) > ul {
  display: flex;
  width: 400px;
  height: 150px;
  flex-wrap: wrap;
}

.information > div:nth-of-type(9) > ul > li {
  width: 35px;
  height: 35px;
  margin: 10px;
  border: 1px solid darkgray;
  text-align: center;
  line-height: 35px;
}

/* Number */
.information > div:nth-of-type(10) {
  width: 400px;
  height: 150px;
  position: absolute;
  top: 203px;
  right: 20px;
  background-color: ghostwhite;
}

.information > div:nth-of-type(10) > button {
  margin-left: 200px;
}

.information > div:nth-of-type(10) > ul {
  display: flex;
  width: 400px;
  height: 150px;
  flex-wrap: wrap;
}

.information > div:nth-of-type(10) > ul > li {
  width: 35px;
  height: 35px;
  margin: 10px;
  border: 1px solid darkgray;
  text-align: center;
  line-height: 35px;
}

/* bottom */
/* .information>div:nth-of-type(11){
	width: 1000px;
	height: 500px;
} */
</style>
