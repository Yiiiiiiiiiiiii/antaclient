<template>
  <div id="app">
    <Header></Header>
    
    <Sidebar></Sidebar>

    <router-view></router-view>
    <Footer2></Footer2>
  </div>
</template>
<script>
import Header from './components/Common/Header/Header.vue';
import Footer2 from './components/Common/Footer/Footer2.vue';
import Sidebar from './components/Common/Sidebar/Sidebar.vue';
// import Header from "./components/Common/Header.vue"
// import HeaderTop from "./components/Common/HeaderTop.vue"
// import HeaderBottom from "./components/Common/HeaderBottom.vue"
export default {
    components: { Header, Footer2, Sidebar }
}
</script>

<style lang="scss">
@import './scss/common.scss' 
</style>
