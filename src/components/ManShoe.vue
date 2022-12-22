<template>
  <div class="ManShoe">
    <ul class="box">
      <li class="goods-body" v-for="(el,index) in shoelist" @mouseover="mouseover(el.gid)" :key="index" @click="goproduct">
        <div class="good-main">
          <img :src="el.mediu_img" alt="" />
          <p>{{el.spu_name}}</p>
          <div class="innerbox">
            <ul class="image-list">
              <li v-for="(el,id) in imglist" :key="id">
                <img :src="el.smallpic1" alt="" />
              </li>
            </ul>
          </div>
          <span class="price">{{el.price}}</span>
          <span class="price-two">{{el.price}}</span>
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
      shoelist: [ ],
      imglist:[]
    };
  },
  
  methods: {
    // hover() {},
    goproduct(){
      this.$router.push('/productsdetail')
    },
    mouseover(el){
      console.log(el);
      axios
      .post("/smallimg",{
        data:el
      })
      .then((response) => {
        // console.log(response);
        let innerimg= response.data;
        // console.log(innerimg);
        this.imglist=[]
        for (let i = 0; i < innerimg.length; i++) {
          this.imglist.push(innerimg[i]);
        }
        // console.log(this.imglist);    
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
    created() {
    // 为给定 ID 的 user 创建请求
    axios
      .get("/man")
      .then((response) => {
        // console.log(response);
        let shoe = response.data
        // console.log(shoe);
        // console.log(this.shoelist);
        this.shoelist=[];
        for (let i = 0; i < 3; i++) {
          this.shoelist.push(shoe[i]);
        };
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log(this);
  },
};
</script>

<style>
/* @import "../componentcss/ManShoe.scss"; */
</style>