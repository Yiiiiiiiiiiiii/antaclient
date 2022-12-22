<template>
  <div>
    <div class="manmode">
      <div v-for="(el, index) in special" class="manmode-v" :key="index" >
      <div class="goods-tital">
        <span class="titai-img"></span>
        <span class="tital-main">{{ el.msg }}</span>
      </div>
      <div class="goods-box">
        <div class="goods-list">
          <!-- <ManLeft></ManLeft> -->
          <div class="manleft">
            <img :src="el.leftimage" alt="">
          </div>
          <!-- <manshoe></manshoe> -->
          <div class="ManShoe">
            <ul class="box" v-if="istrue">
              <li class="goods-body" v-for="(item,index) in el.shoebox" :key="index" @mouseover="mouseover(item)"  @click="toshoe(item)">
                <div class="good-main">
              
                  <img :src="item.mediu_img" alt="" />
                  <p>{{ item.spu_name }}</p>
                  <div class="innerbox">
                    <ul class="image-list">
                      <li v-for="(els,index) in innerbox" :key="index">
                        <img :src="els.smallpic1" alt="" />
                      </li>
                    </ul>
                  </div>
                  <span class="price">{{ item.price }}</span>
                  <span class="price-two">{{ item.price }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-foot">
          <div class="goods-buttom"></div>
          <div class="buttom-main">查看更多</div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ManTwo",
  data() {
    return {
      special: [
        {
          shoebox: [

          ],
        },
      ],
      innerbox:[],
      istrue: false,
      newdata: "",
    };
  },
  methods: {
    getfirst() {
      axios
        .get("/msg")
        .then((response) => {
          console.log(response);
          this.special = [];
          for (let i = 0; i < response.data.length; i++) {
            this.$nextTick(() => {
              this.special.push(response.data[i]);
            });
          }
          // console.log(this.special);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getsecond() {
      axios
        .get("/man")
        .then((response) => {
          console.log(response);
          // console.log(this.special);
          // this.special.shoebox=[];
          let data = [];
          // if ((el.id = 1)) {
          for (let i = 0; i < 6; i++) {
            data.push(response.data[i]);
          }
          this.special[0]["shoebox"] = data;
          // }
          let one = [];
          for (let i = 6; i < 12; i++) {
            one.push(response.data[i]);
          }
          this.special[1]["shoebox"] = one;
          let data2 = [];
          for (let i = 12; i < 18; i++) {
            data2.push(response.data[i]);
          }
          this.special[2]["shoebox"] = data2;
          let data3 = [];
          for (let i = 18; i < 24; i++) {
            data3.push(response.data[i]);
          }
          this.special[3]["shoebox"] = data3;
          // console.log(this.special, "cyz");
          this.newdata = this.special;
          // console.log(this.special[0].shoebox.id, "wxj");
          this.istrue = true;
          console.log(this.special);

        })
        .catch(function (error) {
          console.log(error);
        });
    },
     mouseover(el){
      // console.log(el.gid);
      axios
      .post("/smallimg",{
        data:el.gid
      })
      .then((response) => {
        // console.log(response);
        this.innerbox=[]
        // console.log(response.data[0]);
        for (let j = 0; j < response.data.length; j++) {
          this.innerbox.push(response.data[j])
        }
        // console.log(this.innerbox);


      })
      .catch(function (error) {
        console.log(error);
      });
    },
    toshoe(item){
      console.log(item.gid);
      this.$router.push(`/productsdetail?gid=${item.gid}`)
    }
  },
  created() {
    // 为给定 ID 的 user 创建请求
    this.getfirst();
    this.getsecond();
  },
   watch: {

    // special() {
    //   this.$nextTick(() => {
    //  console.log(this.special[0].shoebox,"test")
    //   });
    // },
    special:{
      handler(){
        // console.log('testttttttt123')
       this.$nextTick(() => {
    //  console.log(this.newdata,"test")
      });
      },
      deep:true,
      immediate:true
    }
  },
};
</script>

<style lang="scss">
@import "../componentcss/public.scss";
@import "../componentcss/ManTwo.scss";
</style>