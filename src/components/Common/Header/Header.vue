<template>
  <div id="mall_header" class="header w-full J_header">
    <HeaderTop> </HeaderTop>
    <HeaderBottom> </HeaderBottom>
  </div>
</template>
  
  <script>
import HeaderTop from "@/components/Common/Header/HeaderTop.vue";
import HeaderBottom from "@/components/Common/Header/HeaderBottom.vue";

export default {
  name: "Header",
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>
  <style lang="scss" >
@import "@/scss/Header.scss";
</style>