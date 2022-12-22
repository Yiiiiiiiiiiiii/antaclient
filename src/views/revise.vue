<template>
  <div class="outer">
    <revisecenter></revisecenter>
  </div>
</template>
      
       <script>
import revisecenter from "@/components/Pages/reviseCenter.vue";

export default {
  name: "revise",
  components: {
    revisecenter,
  },
};
</script >
<style lang="scss">
.outer {
  width: 600px;
  margin: 0 auto;
}
</style>