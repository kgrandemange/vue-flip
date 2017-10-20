<template>
  <div id="app">
    <flip flip="true" active-hover="true">
      <span slot="flip">face 1</span>
      <span slot="flap">face 2</span>
    </flip>
  </div>
</template>
<script>
import Flip from './components/Flip'

export default {
  name: 'app',
  components: {
    Flip
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

