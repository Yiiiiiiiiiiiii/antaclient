
<template>
  <el-form
    v-if="isShow"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"> </el-input>
    </el-form-item>
    <el-form-item label="商品价格" prop="price">
      <el-input v-model="ruleForm.price"></el-input>
    </el-form-item>
    <el-form-item label="商品款号" prop="spu_id">
      <el-input v-model="ruleForm.spu_id"></el-input>
    </el-form-item>
    <el-form-item label="图片地址" prop="mediu_img">
      <el-input v-model="ruleForm.mediu_img"></el-input>
    </el-form-item>
    <el-form-item label="鞋子类型" prop="category3_id">
      <el-select v-model="ruleForm.category3_id" placeholder="请选择活动区域">
        <el-option label="综训鞋" value="110"></el-option>
        <el-option label="板鞋" value="111"></el-option>
        <el-option label="休闲鞋" value="112"></el-option>
        <el-option label="篮球鞋" value="113"></el-option>
        <el-option label="跑鞋" value="114"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="季节" prop="season">
      <el-select v-model="ruleForm.season" placeholder="请选择季节">
        <el-option label="夏季" value="0"></el-option>
        <el-option label="秋季" value="1"></el-option>
        <el-option label="冬季" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品颜色" prop="pro_color">
      <el-input v-model="ruleForm.pro_color"></el-input>
    </el-form-item>
    <el-form-item label="小图1" prop="smallpic1">
      <el-input v-model="ruleForm.smallpic1"></el-input>
    </el-form-item>
    <el-form-item label="小图2" prop="smallpic2">
      <el-input v-model="ruleForm.smallpic2"></el-input>
    </el-form-item>
    <el-form-item label="小图3" prop="smallpic3">
      <el-input v-model="ruleForm.smallpic3"></el-input>
    </el-form-item>
    <el-form-item label="小图4" prop="smallpic4">
      <el-input v-model="ruleForm.smallpic4"></el-input>
    </el-form-item>
    <el-form-item label="小图5" prop="smallpic5">
      <el-input v-model="ruleForm.smallpic5"></el-input>
    </el-form-item>
    <el-form-item label="大图" prop="bigpic">
      <el-input v-model="ruleForm.bigpic"></el-input>
    </el-form-item>
    <el-form-item>
      
      <el-button type="primary" @click="change('ruleForm')">修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
  <script>
import axios from "axios";
import { pick } from "lodash";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        category3_id: "",
        price: "",
        spu_id: "",
        mediu_img: "",
        season: "",
        pro_color: "",
        smallpic1: "",
        smallpic2: "",
        smallpic3: "",
        smallpic4: "",
        smallpic5: "",
        bigpic: "",
      },
      isShow: false,
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        spu_id: [
          { required: true, message: "请输入商品款号", trigger: "change" },
        ],
        mediu_img: [
          { required: true, message: "请输入显示图片", trigger: "blur" },
        ],

        category3_id: [
          { required: true, message: "请选择鞋子类型", trigger: "change" },
        ],

        season: [{ required: true, message: "季节", trigger: "change" }],
        pro_color: [{ required: true, message: "请输入颜色", trigger: "blur" }],
        smallpic1: [
          { required: true, message: "请输入第一张小图", trigger: "blur" },
        ],
        smallpic2: [
          { required: true, message: "请输入第二张小图", trigger: "blur" },
        ],
        smallpic3: [
          { required: true, message: "请输入第三张小图", trigger: "blur" },
        ],
        smallpic4: [
          { required: true, message: "请输入第四张小图", trigger: "blur" },
        ],
        smallpic5: [
          { required: true, message: "请输入第五张小图", trigger: "blur" },
        ],
        bigpic: [
          { required: true, message: "请输入大图小图", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    change(formName) {
      let newObj1 = _.pick(this.ruleForm, [
        "name",
        "category3_id",
        "price",
        "spu_id",
        "mediu_img",
        "season",
      ]);

      let newObj2 = _.pick(this.ruleForm, [
        "pro_color",
        "smallpic1",
        "smallpic2",
        "smallpic3",
        "smallpic4",
        "smallpic5",
        "bigpic",
      ]);
      console.log(newObj1, newObj2);

      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(1111);
          axios
            .post("http://127.0.0.1:7001/updata1", {
              data: newObj1,
              gid:this.$route.query.gid
            })
            .then((response) => {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          axios
            .post("http://127.0.0.1:7001/updata2", {
              data: newObj2,
              gid:this.$route.query.gid
            })
            .then((response) => {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    axios
      .get(`http://127.0.0.1:7001/getdata1?gid=${this.$route.query.gid}`)
      .then((response) => {
        console.log(response);
        console.log(response.data.data[0].spu_name);
        this.ruleForm.name = response.data.data[0].spu_name;
        this.ruleForm.category3_id = response.data.data[0].category3_id;
        this.ruleForm.price = response.data.data[0].price;
        this.ruleForm.spu_id = response.data.data[0].spu_id;
        this.ruleForm.mediu_img = response.data.data[0].mediu_img;
        this.ruleForm.season = response.data.data[0].season;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .post(`http://127.0.0.1:7001/getdata2`, {
        pro_color: this.$route.query.pro_color,
        gid: this.$route.query.gid,
      })
      .then((response) => {
        // this.ruleForm.season = response.data.data[0].season;
        this.ruleForm.pro_color = response.data.data[0].pro_color;
        this.ruleForm.smallpic1 = response.data.data[0].smallpic1;
        this.ruleForm.smallpic2 = response.data.data[0].smallpic2;
        this.ruleForm.smallpic3 = response.data.data[0].smallpic3;
        this.ruleForm.smallpic4 = response.data.data[0].smallpic4;
        this.ruleForm.smallpic5 = response.data.data[0].smallpic5;
        this.ruleForm.bigpic = response.data.data[0].bigpic;

        this.isShow = true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>