<template>
  <div id="app">
    <transition name="el-fade-in-linear">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Citylist from './components/home/citylist'
// import Detail from './components/detail'
export default {
  name: 'App',
  components:{
    Citylist
  }
}
</script>

<style>
     
</style>
