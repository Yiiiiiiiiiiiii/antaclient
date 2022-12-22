<template>
  <el-table
    :data="allData"
    border
    style="width: 100%; margin-top: 20px"
    v-if="isShow"
  >
    <el-table-column prop="gid" label="编号" width="100"> </el-table-column>
    <el-table-column prop="spu_name" label="商品名称" width="150">
    </el-table-column>
    <el-table-column prop="spu_id" label="款号" width="120"> </el-table-column>
    <el-table-column prop="price" label="价格" width="120"> </el-table-column>
    <el-table-column prop="category3_id" label="类型" width="120">
    </el-table-column>
    <el-table-column prop="season" label="关键字" width="120">
    </el-table-column>
    <el-table-column prop="pro_color" label="颜色" width="120">
    </el-table-column>
    <el-table-column prop="smallpic1" label="图片1" width="120">
    </el-table-column>
    <el-table-column prop="smallpic2" label="图片2" width="120">
    </el-table-column>
    <el-table-column prop="smallpic3" label="图片3" width="120">
    </el-table-column>
    <el-table-column prop="smallpic4" label="图片4" width="120">
    </el-table-column>
    <el-table-column prop="smallpic5" label="图片5" width="120">
    </el-table-column>
    <el-table-column prop="bigpic" label="大图" width="120"> </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >下架</el-button
        >
        <el-button type="text" size="small" @click="change(scope.row)"
          >修改</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "Admincenter",
  methods: {
    handleClick(row) {
      // for (let i = 0; i < this.allData.length; i++) {
      //     if (row.gid!=this.allData[i].gid) {

      //     }

      // }
      console.log(row);
      axios
        .post(`http://127.0.0.1:7001/delete2`, {
          pro_color: row.pro_color,
          gid: row.gid,
        })
        .then((response) => {
          //   location.reload();
          console.log(this.allData);
          for (let i = 0; i < this.allData.length; i++) {
            console.log(this.allData[i].gid);

            if (row.gid == this.allData[i].gid) {
              axios
                .post(`http://127.0.0.1:7001/delete1`, {
                  gid: row.gid,
                })
                .then((response) => {
                  location.reload();
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            }
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    change(row) {
      console.log(1111);
      this.$router.push({
        path: "/revise",
        query: { gid: row.gid, pro_color: row.pro_color },
      });
      // this.$router.push('/revise')
    },
  },

  data() {
    return {
      allData: [],
      table1Data: [],
      table2Data: [],
      isShow: false,
      obj: {},
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:7001/allgoods1")
      .then((response) => {
        let datalist = response.data.data;
        for (let i = 0; i < datalist.length; i++) {
          this.table1Data.push(datalist[i]);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("http://127.0.0.1:7001/allgoods2")
      .then((response) => {
        console.log(response);
        let datalist = response.data.data;

        for (let i = 0; i < datalist.length; i++) {
          this.table2Data.push(datalist[i]);
        }

        for (let i = 0; i < this.table1Data.length; i++) {
          for (let j = 0; j < this.table2Data.length; j++) {
            if (this.table1Data[i].gid == this.table2Data[j].gid) {
              this.obj = { ...this.table1Data[i], ...this.table2Data[j] };
              this.allData.push(this.obj);
            }
          }
        }

        this.isShow = true;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
  <style>
</style>