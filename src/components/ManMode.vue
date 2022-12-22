<template>
  <div class="man-mode">
    <div class="good-tital">
      <span class="tital-image"></span>
      <span class="tital-masg">猜你喜欢</span>
    </div>
    <div class="shoe-box">
      <manshoe></manshoe>
    </div>
  </div>
</template>

<script>
import manshoe from "./ManShoe.vue"
export default {
  name: "ManMode",
  data() {
    return {
      shoelist: [
        {
          msg: "",
        },
      ],
    };
  },
  components: {
    manshoe,
  },
};
</script>

<style lang="scss" >
@import "../componentcss/ManMode.scss";
@import "../componentcss/public.scss";
</style>