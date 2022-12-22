<template>
  <div class="main-container J_minicart_close">
    <div class="list-container w-full clearfix">
      <div class="selector-box fl">
        <div class="selector-top clearfix">
          <span>筛选</span>
          <a href="javascript:;" class="selector-reset fr">重置</a>
        </div>
        <div class="selector-item">
          <div class="selector-cate">
            <span>品类</span>
            <i class="line-arrow fr"></i>
          </div>
          <ul class="selector-tag scroll">
            <li v-for="(el, index) in style" @click="chooseShoesStyle(index)">
              <a href="javascript:;"><i></i>{{ el }}</a>
            </li>
          </ul>
        </div>
        <div class="selector-item" :class="{ close: !isClose1 }">
          <div class="selector-cate">
            <span>尺码</span> <i class="line-arrow fr" @click="close(1)"></i>
          </div>
          <ul class="selector-tag scroll">
            <li v-for="(el, index) in size">
              <a href="javascript:;"><i></i>{{ el }}</a>
            </li>
          </ul>
        </div>
        <div class="selector-item" :class="{ close: !isClose2 }">
          <div class="selector-cate">
            <span>季节</span> <i class="line-arrow fr" @click="close(2)"></i>
          </div>
          <ul class="selector-tag scroll">
            <li v-for="(el, index) in season" @click="chooseseason(index)">
              <a href="javascript:;"><i></i>{{ el }}</a>
            </li>
          </ul>
        </div>
        <div class="selector-item" :class="{ close: !isClose3 }">
          <div class="selector-cate">
            <span>系列</span>
            <i class="line-arrow fr" @click="close(3)"></i>
          </div>
          <ul class="selector-tag scroll">
            <li v-for="(el, index) in stylelist">
              <a href="javascript:;"><i></i>{{ el }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-wrp">
        <div class="list-body clearfix">
          <div class="list-top-l fl">
            <div class="cate-title">男子所有鞋类<span>(65)</span></div>
            <div class="result-tags">
              <a href="javascript:;" title="鞋类">鞋类</a
              ><a href="javascript:;" title="男">男</a
              ><a href="javascript:;" title="安踏">安踏</a>
            </div>
          </div>
          <div class="list-top-r fr">
            <div class="filter-order" @click="order">
              <a href="javascript:;" class="filter-order-btn dropdown-btn">{{
                sort
              }}</a>
              <ul
                class="filter-order-list dropdown-menu"
                :class="{ active: !isOrder }"
              >
                <li @click="sure(el, index)" v-for="(el, index) in sortBy">
                  <a href="javascript:;">{{ el }}</a>
                </li>
              </ul>
            </div>
            <div class="list-pagination top">
              <div class="page-select" @click="selectPage">
                <span href="javascript:;" class="page-select-btn dropdown-btn"
                  >{{ page }}
                </span>
                <ul
                  class="page-select-list scroll dropdown-menu"
                  :class="{ active: !select }"
                >
                  <li
                    v-for="(el1, index) in pages"
                    @click="selectPages(index)"
                    :key="index"
                  >
                    <span>{{ el1 + 1 }}</span>
                  </li>
                </ul>
              </div>
              <span>/ {{ pagenum }} 页</span>
              <a
                href="javascript:;"
                class="page-btn page-prev-btn"
                @click="redPage"
              ></a>
              <a
                href="javascript:;"
                class="page-btn page-next-btn"
                @click="addPage"
              ></a>
            </div>
          </div>
          <div class="manshoe">
            <manshoe
              @func="getPagenum"
              :page="page"
              :goods="pricelist"
              
            ></manshoe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import manshoe from "./ManShoe.vue";
import axios from "axios";
export default {
  components: {
    manshoe,
  },
  name: "Ascenter",
  data() {
    return {
      sort: "新品排序",
      page: "",
      sortBy: ["新品排序", "销量排序", "价格由低到高", "价格由高到低"],
      season: ["夏季", "秋季", "冬季"],
      size: [39, 40, 41, 42, 43, 44, 45, 46],
      style: ["综训鞋", "板鞋", "休闲鞋", "篮球鞋", "跑鞋 "],
      stylelist: ["综训系列", "生活系列", "篮球系列", "跑步系列"],
      pages: [],
      isClose1: true,
      isClose2: true,
      isClose3: true,
      select: true,
      isOrder: true,
      pagenum: "",
      isTrue: true,
      pricelist: [],
      shoesStyle: [],
      seasonlist:[]
    };
  },
  methods: {
    close(el) {
      if (el == 1) {
        this.isClose1 = !this.isClose1;
      } else if (el == 2) {
        this.isClose2 = !this.isClose2;
      } else {
        this.isClose3 = !this.isClose3;
      }
    },
    selectPage() {
      this.select = !this.select;
    },
    order() {
      this.isOrder = !this.isOrder;
    },
    sure(el, index) {
      this.sort = el;
      console.log(index);
      if (index == 2) {
        this.pricelist = [];
        axios
          .get("/increase")
          .then((response) => {
            console.log(response);
            let datalist = response.data.data;

            for (let i = 0; i < datalist.length; i++) {
              this.pricelist.push(datalist[i]);
            }
            this.$children[0].getPriceOrder();
          })
          .catch(function (error) {
            // console.log(error);
          });
      } else if (index == 3) {
        this.pricelist = [];
        axios
          .get("/reduce")
          .then((response) => {
            console.log(response);
            let datalist = response.data.data;
            console.log(datalist);
            for (let i = 0; i < datalist.length; i++) {
              this.pricelist.push(datalist[i]);
            }
            this.$children[0].getPriceOrder();
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    },
    selectPages(el) {
      this.page = el + 1;
      this.$children[0].getnew();
    },
    addPage() {
      if (this.page >= this.pagenum) {
        alert("这已经是最后一页了");
      } else {
        this.page = this.page + 1;
        this.$children[0].getnew();
      }
    },
    redPage() {
      if (this.page <= 1) {
        alert("这已经是第一页了");
      } else {
        this.page--;
        this.$children[0].getnew();
      }
    },
    getPagenum(el, v1) {
      this.pagenum = el;

      this.page = v1;
      for (let i = 0; i < this.pagenum; i++) {
        i = i++;
        this.pages.push(i);
      }
    },

    chooseShoesStyle(el) {
      this.shoesStyle=[]
      axios
        .post("/style", {
          data: el,
        })
        .then((response) => {
          console.log(response);
          let datalist = response.data.data;
          console.log(datalist);
          for (let i = 0; i < datalist.length; i++) {
            this.shoesStyle.push(datalist[i]);
          }
          this.$children[0].getShoesStyle();
        })
        .catch(function (error) {
          // console.log(error);
        });
    },
    chooseseason(el){
      this.seasonlist=[]
      axios
        .post("/season", {
          data: el,
        })
        .then((response) => {
          console.log(response);
          let datalist = response.data.data;
          console.log(datalist);
          for (let i = 0; i < datalist.length; i++) {
            this.seasonlist.push(datalist[i]);
          }
          this.$children[0].getSeasonStyle();
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  },
};
</script>

<style lang="scss"  >
@import "@/scss/asCenter/asCenter.scss";
</style>