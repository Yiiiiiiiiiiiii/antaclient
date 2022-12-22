<template>
  <div class="man">
    <div class="model-cate">
      <div class="model-cate-title">
        <img
          src="https://img.fishfay.com/theme/images/antacom/area/text-man-area-b.svg"
          alt=""
        />
      </div>
      <ul class="model-cate-list">
        <li>
          <div @click="gotoAllshoes">鞋类</div>
          <p>SHOES</p>
        </li>
        <li>
          <div>服类</div>
          <p>CLOTHING</p>
        </li>
        <li>
          <div>配件</div>
          <p>ACCESSORIES</p>
        </li>
        <li>
          <div>新品</div>
          <span class="new">NEW</span>
          <p>NEW PRODUCT</p>
        </li>
      </ul>
    </div>
    <div class="model-box">
      <!-- <img src="http://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/55ce95f81f34d6335e446f9c5aa205d7.jpg" alt=""> -->
    </div>
    <manmode></manmode>
    <mantwo></mantwo>
  </div>
</template>

<script>
import mantwo from "../components/ManTwo.vue";
import manmode from "../components/ManMode.vue";
export default {
  name: "Man",
  data() {
    return {
    };
  },
  components: {
    mantwo,
    manmode,
  },
  methods:{
    gotoAllshoes(){
      this.$router.push('/allshoes')
    },
  }
};
</script>
 
<style lang="scss" >
@import "../componentcss/public.scss";
@import "../componentcss/man.scss";
.man{
  background-color: black;
}
</style>