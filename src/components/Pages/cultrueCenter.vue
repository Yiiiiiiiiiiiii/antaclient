<template>
  <div class="main-container J_minicart_close cul-story">
    <div class="culture-top w-1920">
      <img
        src="https://img.fishfay.com/theme/images/antacom/culture/story-bg-20191011.jpg"
        alt=""
        class="loading"
      />
      <div class="culture-title flex-center">
        <img
          src="https://img.fishfay.com/theme/images/antacom/culture/text-anta-story-w.svg"
          alt=""
          class="loading"
        />
      </div>
    </div>
    <div class="culture-infos" data-tab="story">
      <div class="culture-tabs clearfix">
        <a
          data-tab="story"
          href="javascript:;"
          class="culture-tab current"
          v-for="el in iconimg"
        >
          <span class="tab-icon icon-story">
            <img :src="el.img" alt="" />
          </span>
          <span class="tab-name">{{ el.text }}</span></a
        >
      </div>
      <div class="culture-body">
        <p class="center bold">KEEP MOVING 安踏集团简介</p>
        <br />
        <p>
          <img
            class="loading"
            original="https://img.fishfay.com/theme/images/antacom/culture/2019/1011/st-01.jpg"
            alt=""
            src="https://img.fishfay.com/theme/images/antacom/culture/2019/1011/st-01.jpg"
            style="display: inline"
          />
        </p>
        <br />
        <div v-for="el in article">
          <p class="indent30">
            {{ el }}
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
        
    <script>
export default {
  data() {
    return {
      article: [
        " 安踏集团是一家专门从事设计、生产、销售运动鞋服、配饰等运动装备的综合性、多品牌的体育用品集团。公司创立于1991年，2007年在香港上市。2018年安踏集团销售流水超过400亿人民币，同比增长超过44.4%。2019年上半年，安踏实现营收148亿，同比增长40%。经过近30年的发展，安踏集团已经从一家传统的民营企业转型成为具有现代化治理结构和国际竞争能力的公众公司。从2015年起，安踏集团一直是中国最大的体育用品集团，市值在2019年8月超过了1700亿港币，位列全球体育用品行业第三位。",

        "2018年，集团共销售7000万双运动鞋、1亿件运动服，拥有门店超过12000家，直接创造就业10万人。安踏集团坚持“单聚焦、多品牌、全渠道”的发展策略。集团旗下拥有安踏ANTA（中国）、斐乐FILA（意大利）、迪桑特DESCENTE（日本）、可隆KOLON（韩国）等多个中国及国际知名的运动品牌,全面满足消费者的多元化需求。2019年3月，由安踏体育、方源资本、AnameredInvestments及腾讯组成的投资者财团完成收购亚玛芬体育公司，正式开启了全球化进程，并于今年4月份成立亚玛芬集团新一届董事会。亚玛芬体育旗下的国际知名品牌也加入了安踏集团的多品牌阵营，包括萨洛蒙Salomon（法国）、始祖鸟Arc’teryx（加拿大）、阿托米克Atomic（奥地利）、颂拓Suunto（芬兰）、威尔胜Wilson（美国）、必确Precor（美国）及PeakPerformance（瑞典）等。这些品牌在户外运动、滑雪、球类及运动器械等各自的运动细分领域位居全球前列，在欧洲、美国和亚太等世界主要市场均有布局。安踏集团与亚玛芬并购之后，将成为全球第三大综合体育用品集团，服务全球消费者。",

        "一直以来，安踏始终支持中国体育事业的发展，推动全民战略的实施。2009至2024年，安踏将连续16年成为中国奥委会的官方合作伙伴。2017年，安踏集团成为中国奥委会和北京2022冬奥会官方合作伙伴。安踏为36支国家代表队、中国体育代表团征战温哥华冬奥会、广州亚运会、伦敦奥运会、仁川亚运会、索契冬奥会、里约奥运会、平昌冬奥会和雅加达亚运会等在内的30多项重大国际体育赛事提供了领奖装备、比赛装备以及生活训练装备。至2024年，安踏还将与中国体育健儿共同征战东京奥运会、北京冬奥会、杭州亚运会、巴黎奥运会等重大国际体育赛事。",

        "安踏集团始终坚持“创新为企业生存之本”，不断地加大研发投入。截止到2018年年底，安踏集团创新研发的投入占销售成本的5.2%，在美国洛杉矶、日本东京、韩国首尔、意大利米兰、中国大陆和中国香港等地建立了全球设计研发中心，吸纳了近200名来自20个不同国家和地区的设计研发专家。目前安踏累计申请国家创新专利超1200项。",

        " 安踏集团自建司以来积极履行企业社会责任、关爱社会。过去多年，在重大自然灾害发生期间，总计为受灾地区的捐款捐物超过数亿元。2017年，联合中国青少年发展基金会和上海真爱梦想基金会创立了“茁壮成长公益”计划，总计捐助5亿元人民币的现金和物资，通过扶体扶智的体育扶贫项目，包括捐建运动装备、捐建梦想中心推广素养教育、普及快乐运动和奥运文化的乐动汇和安踏运动梦想课程，帮助近1000万的青少年享受运动的快乐，茁壮成长。",
        " 一直以来，安踏集团坚持以“将超越自我的体育精神融入每个人的生活”作为企业的使命，确立了“消费者导向、专注务实、创新超越、尊重包容、诚信感恩”的五大核心价值观，坚持“以消费者为导向、以市场地位为目标、以贡献者为榜样、以创新为生存之本”的安踏之道，崇尚创新超越、铁军文化和永不止步的集团文化。2018年度，安踏集团屡获殊荣——福布斯全球最受信赖公司，福布斯最佳雇主，亚洲最佳上市公司50强，中国企业公民责任品牌50强，中国最具价值企业——赢得社会广泛认可；同时，安踏董事局主席兼CEO丁世忠先生荣获2018 “中国十大经济年度人物”称号。展望未来，安踏集团致力于成为受人尊重的世界级的多品牌体育用品集团。",
      ],
      iconimg: [
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-story-r.svg",
          text: "品牌故事",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-culture-g.svg",
          text: "企业文化",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-history-g.svg",
          text: "大事记",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-logo-g.svg",
          text: "标识的含义",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-signed-g.svg",
          text: "签约资源",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-responsibility-g.svg",
          text: "社会责任",
        },
        {
          img: "https://img.fishfay.com/theme/images/antacom/culture/icon-sendword-g.svg",
          text: "领导人寄语",
        },
      ],
    };
  },
  name: "Ccenter",
};
</script>
        
        <style lang="scss" scoped>
@import "../../scss/Ccenter.scss";
</style>