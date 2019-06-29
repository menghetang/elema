<template>
  <div>
    搜索页面
    <div id="menu">
      <div>
        <img @click="login3()" src="../img/SSS.png" alt>
        <p>外卖</p>
      </div>
      <div>
        <img  src="../img/zhinanzhen1.png" alt>
        <p>搜索</p>
      </div>
      <div>
        <img @click="login2()" src="../img/dingdan1.png" alt>
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
  name: "ss",
  methods: {
      login1() {
      this.$router.push({
        name: "wode"
      });
    },
    login2() {
      this.$router.push({
        name: "dingdan"
      });
    },
    login3() {
      this.$router.push({
        name: "waimai"
      });
    }
  },
};
</script>
<style scoped>
</style>
