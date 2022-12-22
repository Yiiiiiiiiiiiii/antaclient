<template>
  <div class="main-container J_minicart_close">
    <div class="page-container">
      <!---->
      <div class="model-box model-custom" v-for="el in imgsrc">
        <div class="custom-box">
          <img class="loading" :src="el" style="display: block" />
          <div class="custom-links">
            <a
              href="#"
              target="_blank"
              style="
                width: 99.8698%;
                height: 103.422%;
                top: -1.52091%;
                left: 0.130208%;
              "
            ></a>
          </div>
        </div>
      </div>
      <!---->
      <div class="model-box model-hoverup">
        <div class="hoverup-box">
          <img class="loading" :src="img5" />
          <div class="hoverup-inner clearfix" style="padding-top: 50px">
            <a href="#" class="hoverup-item" v-for="el in starinfo"
              ><img
                class="hoverup-bg loading"
                :src="el.img"
                style="display: none"
              />
              <div class="hover-main">
                <img :src="el.intro" alt="" class="hoverup-cover" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <!---->
      <div class="model-box model-custom">
        <div class="custom-box">
          <img
            class="loading"
            src="http://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/37fb43dfd27d20bd3cd68a41dc444bcd.jpg"
            style="display: block"
          />
          <div class="custom-links">
            <a
              href="#"
              target="_blank"
              style="width: 19.5312%; height: 77.6667%; top: 3%; left: 18.3594%"
            ></a
            ><a
              href="https://www.anta.com/goods-209358.html"
              target="_blank"
              style="
                width: 18.8802%;
                height: 77.6667%;
                top: 3.66667%;
                left: 40.4948%;
              "
            ></a>
          </div>
        </div>
      </div>
      <!---->
      <div class="model-box model-swiperGoods autoWidth">
        <div class="swiperGoods-infos">
          <h3>猜你喜欢</h3>

          <a href="/list/?k=服" target="_blank">即刻选购</a>
        </div>
        <div
          class="
            swiper-container
            swiperGoods-list
            swiper-container-initialized swiper-container-horizontal
          "
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 1480.25px; margin-right: 15px"
              v-for="el in like"
            >
              <a href="#" target="_blank"
                ><img :src="el.img" alt="" /> <span>{{ el.text }}</span></a
              >
            </div>
          </div>
        
        
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>
      
      <script>
export default {
  data() {
    return {
      imgsrc: [
        "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/be723a3caca3bb18c00464764f317767.jpg",
        "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/46b71a3a35d9bce15253d6027f2b8b93.jpg",
        "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/63d8675e0f836b31f7e2cc8413389cb5.jpg",
        "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/7d90b21bcd44303174d723945dd13001.jpg",
      ],
      img5: "https://anta-cn-web.obs.myhwclouds.com/anta-cn-web/descente/2021/03/11/e510b60d5c447e1d1c5ca21f90463ca6.jpg",
      starinfo: [
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/fbabbba82f5e671445774c0c4332e4d5.jpg",
          intro:
            "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/30/ca67857a53ff80a7d597c249b8aafec7.png",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/9264a11e00ac4a27b26d47bfc9a150bd.jpg",
          intro:
            "https://anta-cn-web.obs.myhwclouds.com/anta-cn-web/descente/2021/07/01/f008acfb52c0115089717350dc98bb57.png",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/085a7e95943072bf5f85657a6cae7590.jpg",
          intro:
            "https://anta-cn-web.obs.myhwclouds.com/anta-cn-web/descente/2021/03/11/978d21579dd986d403b21e49c6e1cb94.png",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/158adaec434ce920206cd76a0cba5ab0.jpg",
          intro:
            "https://img.fishfay.com/anta-cn-web/descente/2020/07/17/0bfc2a210d43211f20fd2b9e9b6c3d44.png",
        },
      ],
      like: [
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/96eb3eea2dfe05ab377cd9336ec773ae.jpg",
          text: "【安踏冠军全天候】男子羽绒马甲防风透湿",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/515abfe37e28d31dca3d6dc4b56d4df0.jpg",
          text: "【安踏冠军运动文化系列】安踏男子羊羔绒国旗款针织上衣",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/09/29/d8321244ddbcb78d06f54a84f0256a38.jpg",
          text: "【安踏冠军全天候系列】安踏国家队同款拒水科技男子国旗款针织运动上衣",
        },
        {
          img: "https://anta-cn-web.obs.myhuaweicloud.com/anta-cn-web/descente/2022/10/17/e6efb5b1ac23db5312e52cbacf8605fb.jpg",
          text: "【安踏冠军全天候系列】安踏密暖绒科技防风透湿男子国旗款梭织运动外套",
        },
      ],
    };
  },
  name: "innerCenter",
};
</script>
      
      <style lang="scss" scoped>
@import "../../scss/innerCenter.scss";
</style>