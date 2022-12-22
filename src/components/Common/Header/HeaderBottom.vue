<template>
  <div class="header-nav w-full clearfix">
    <div class="header-logo fl J_head_logo" style="margin-left: 126px">
      <div class="logo-inner" @click="goindex">
        <a href="#"
          ><img src="@/assets/Header/logo.svg" alt="" class="loading"
        /></a>
      </div>
    </div>
    <ul class="nav-list fr">
      <li data-type="chinastyle" class="nav-item first">
        <a href="#" title="冬奥国旗款">冬奥国旗款</a>
      </li>
      <li data-type="man" class="nav-item">
        <a href="#" title="男子" @click="goman">男子</a>
        <div class="sub-nav-panel">
          <div class="w-1920 scroll">
            <div class="sub-nav-inner clearfix">
              <div class="sub-nav-item first">
                <div class="cate-title" @click="gotoAllshoes">
                  <a href="#">所有鞋类</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li>
                      <a href="#">运动鞋</a>
                    </li>
                    <li><a href="#">跑鞋</a></li>
                    <li><a href="#">篮球鞋</a></li>
                    <li><a href="#">休闲鞋</a></li>
                    <li><a href="#">板鞋</a></li>
                    <li>
                      <a href="#">户外综训鞋</a>
                    </li>
                  </ul>
                  <!---->
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有服装</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li>
                      <a href="#">套头卫衣</a>
                    </li>
                    <li>
                      <a href="#">外套夹克</a>
                    </li>
                    <li>
                      <a href="#">羽绒服/马甲</a>
                    </li>
                    <li>
                      <a href="#">短袖T恤</a>
                    </li>
                    <li>
                      <a href="#">长裤</a>
                    </li>
                    <li>
                      <a href="#">运动短裤</a>
                    </li>
                  </ul>
                  <!---->
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有配件</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li>
                      <a href="#">包类</a>
                    </li>
                    <li>
                      <a href="#">运动袜子</a>
                    </li>
                  </ul>
                  <!---->
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#" target="_self">运动项目</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li><a href="#">跑步</a></li>
                    <li><a href="#">篮球</a></li>
                    <li><a href="#">综训</a></li>
                    <li><a href="#">生活</a></li>
                    <li><a href="#">健身</a></li>
                  </ul>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li data-type="woman" class="nav-item">
        <a href="#" title="女子">女子</a>
        <div class="sub-nav-panel">
          <div class="w-1920 scroll">
            <div class="sub-nav-inner clearfix">
              <div class="sub-nav-item first">
                <div class="cate-title">
                  <a href="#">所有鞋类</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li><a href="#">跑鞋</a></li>
                    <li><a href="#">休闲鞋</a></li>
                    <li><a href="#">板鞋</a></li>
                    <li><a href="#">棉鞋</a></li>
                  </ul>
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有服装</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li>
                      <a href="#">羽绒服</a>
                    </li>
                    <li>
                      <a href="#">套头卫衣</a>
                    </li>
                    <li>
                      <a href="#">外套/夹克</a>
                    </li>
                    <li>
                      <a href="#">长裤</a>
                    </li>
                    <li>
                      <a href="#">短袖T恤</a>
                    </li>
                    <li>
                      <a href="#">运动短裤</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有配件</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li>
                      <a href="#">包类</a>
                    </li>
                    <li>
                      <a href="#">运动袜类</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li data-type="kids" class="nav-item">
        <a href="#" title="儿童">儿童</a>
        <div class="sub-nav-panel">
          <div class="w-1920 scroll">
            <div class="sub-nav-inner clearfix">
              <div class="sub-nav-item sub-newtag first">
                <ul class="newtag-list">
                  <li class="icon-new">
                    <a href="#">新品上市</a>
                  </li>
                  <li class="">
                    <a href="#">男中大童</a>
                  </li>
                  <li class="">
                    <a href="#">女中大童</a>
                  </li>
                  <li class="">
                    <a href="#">男小童</a>
                  </li>
                  <li class="">
                    <a href="#">女小童</a>
                  </li>
                  <li class="">
                    <a href="#">婴童</a>
                  </li>
                </ul>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有鞋类</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li><a href="#">跑鞋</a></li>
                    <li><a href="#">篮球鞋</a></li>
                    <li><a href="#">休闲鞋</a></li>
                    <li><a href="#">板鞋</a></li>
                    <li><a href="#">足球鞋</a></li>
                  </ul>
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有服装</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li><a href="#">套头卫衣</a></li>
                    <li><a href="#">羽绒服</a></li>
                    <li><a href="#">短袖T恤</a></li>
                    <li>
                      <a href="#">运动短裤</a>
                    </li>
                    <li><a href="#">长裤</a></li>
                  </ul>
                </div>
              </div>
              <div class="sub-nav-item">
                <div class="cate-title">
                  <a href="#">所有配件</a>
                </div>
                <div class="cate-box clearfix">
                  <ul class="cate-list fl">
                    <li><a href="#">包类</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li data-type="antakids" class="nav-item">
        <a href="#" title="安踏儿童">安踏儿童</a>
      </li>
      <li data-type="culture" class="nav-item" @click="gocultrue">
        <a href="#" title="品牌文化">品牌文化</a>
      </li>
      <li data-type="advert" class="nav-item">
        <a href="#" title="观赏视频">观赏视频</a>
      </li>
      <li data-type="contact" class="nav-item">
        <a href="#" title="联系我们">联系我们</a>
      </li>
      <li class="nav-item last">
        <div class="nav-search-box">
          <a href="#" title="搜索" class="nav-search-btn"></a>
          <input
            type="text"
            placeholder="搜索"
            autocomplete="off"
            value=""
            id="search_box"
            promptvalue=""
            class="nav-search-input"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goindex() {
      this.$router.push('/')
    },
    gocultrue(){
      this.$router.push('/cultrue')
    },
    gotoAllshoes(){
      this.$router.push('/allshoes')
    },
    goman(){
      this.$router.push('/man')
    }
  },
};
</script>

<style>
</style>