<template>
<div id="app">
  <v-main-wrapper/>
</div>
</template>
<script>

import vMainWrapper from './components/v-main-wrapper.vue'
export default {
  name: "app",
  components: {
    vMainWrapper
  },
  methods:{},
  props:{},
  computed:{},


}
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
background-color: #323568;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
