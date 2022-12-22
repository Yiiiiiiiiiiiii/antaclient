<template>
  <div class="ManShoe">
    <ul class="box">
      <li
        class="goods-body"
        v-for="el in dataShow"
        @mouseover="getimg(el.gid)"
        @click="gotoCar(el.gid)"
      >
        <div class="good-main">
          <img :src="el.mediu_img" alt="" />
          <p class="ellipsis">{{ el.spu_name }}</p>
          <div class="innerbox">
            <ul class="image-list">
              <li v-for="element in innerImage">
                <img
                  :src="element.smallpic1"
                  :title="element.pro_color"
                  class="smallimg"
                />
              </li>
            </ul>
          </div>
          <span class="price">{{ el.price }}</span>
          <!-- <span>{{$attrs.page1}}</span> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ManShoe",

  data() {
    return {
      goodslist: [], //第一次请求后端传过来的数据
      innerImage: [], //第二次请求后端传过来的数据
      data: "", //第二次请求前端给后端传递的数据

      totalPage: [], // 所有页面的数据

      pageSize: 16, // 每页显示数量

      pageNum: "", //页面数量

      dataShow: [], // 当前显示的数据

      currentPage: 1, // 默认当前显示第一页
    };
  },
  components: {},
  // props:['page'],
  methods: {
    getimg(el) {
      // console.log(el);
      axios
        .post("/allshoesimg", {
          data: el,
        })
        .then((response) => {
          // console.log(response);
          let datalist = response.data.data;
          (this.innerImage = []),
            datalist.forEach((el) => {
              this.innerImage.push(el);
            });
        })
        .catch(function (error) {
          // console.log(error);
        });

      // console.log(this.innerImage);
    },
    getnew() {
      // this.$nextTick( console.log(12311111111, this.$attrs.page))
      console.log(this.$parent.page);

      this.currentPage = this.$parent.page;

      if (this.currentPage < this.pageNum) {
        this.dataShow = []; // 当前显示的数据
        for (let i = 0; i < this.totalPage[this.currentPage - 1].length; i++) {
          this.dataShow.push(this.totalPage[this.currentPage - 1][i]);
        }
      } else if ((this.currentPage = this.pageNum)) {
        this.dataShow = [];

        for (let i = 0; i < this.totalPage[this.currentPage - 1].length; i++) {
          this.dataShow.push(this.totalPage[this.currentPage - 1][i]);
        }
      } else {
        return;
      }
    },
    getPriceOrder() {
      this.goodslist = [];
      this.goodslist = this.goodslist.concat(this.$parent.pricelist);

      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.goodslist.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }

      this.dataShow = this.totalPage[0];
    },
    getShoesStyle() {
      this.goodslist = [];
      this.goodslist = this.goodslist.concat(this.$parent.shoesStyle);

      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.goodslist.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }

      this.dataShow = this.totalPage[0];
    },
    getSeasonStyle() {
      this.goodslist = [];
      this.goodslist = this.goodslist.concat(this.$parent.seasonlist);

      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.goodslist.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }

      this.dataShow = this.totalPage[0];
    },
    gotoCar(el) {
      this.$router.push({
        path: "/productsdetail",
        query: {
          gid: el,
        },
      });
    },
  },
  created() {
    axios
      .get("/allshoes")
      .then((response) => {
        // console.log(response);
        let datalist = response.data.data;
        for (let i = 0; i < datalist.length; i++) {
          this.goodslist.push(datalist[i]);
          // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
          this.pageNum = Math.ceil(this.goodslist.length / this.pageSize) || 1;
        }
        this.$emit("func", this.pageNum, 1);

        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.goodslist.slice(
            this.pageSize * i,
            this.pageSize * (i + 1)
          );
        }

        this.dataShow = this.totalPage[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
@import "../../../scss/asCenter/manshoe.scss";
@import "../../../scss/asCenter/InnerBox.css";
</style>