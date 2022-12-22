<template>
  <div id="web-cover" class="web-covers J_minicart_close">
    <div title="返回顶部" class="cover-top goto-top" @click="backTop"></div>
    <div
      href="#"
      title="购物车"
      class="cover-cart"
      @click="gotocar"
    ></div>
    <a href="javascript:;" title="在线客服" class="cover-kefu"></a>
  </div>
</template>
    
    <script>
export default {
  name: "Sidebar",
  methods: {
    backTop() {
      document.documentElement.scrollTop = 0;
    },
    gotocar() {
      this.$router.push("/car");
    },
  },
};
</script>
    
    <style lang="scss">
@import "../../../scss/Sidebar.scss";
.cover-cart {
  bottom: 95px;
}
.cover-kefu {
  bottom: 0px;
}
</style>