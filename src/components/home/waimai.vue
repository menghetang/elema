<template>
  <div>
    外卖页面
    <div id="menu">
      <div>
        <img src="../img/SSS1.png" alt>
        <p>外卖</p>
      </div>
      <div>
        <img @click="login2()" src="../img/zhinanzhen.png" alt>
        <p>搜索</p>
      </div>
      <div>
        <img @click="login3()" src="../img/dingdan1.png" alt>
        <p>订单</p>
      </div>
      <div>
        <img @click="login1()" src="../img/touxiang2.png" alt>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "waimai",
  methods: {
    login1() {
      this.$router.push({
        name: "wode"
      });
    },
    login2() {
      this.$router.push({
        name: "ss"
      });
    },
    login3() {
      this.$router.push({
        name: "dingdan"
      });
    }
  }
};
</script>
<style scoped>
</style>
