<template>
  <div class="v-main-wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "v-main-wrapper",

  data() {
    return {
      title: 'Wrapper'
    }
  },
  methods: {},

  computed: {
    ...mapGetters(['CART'])
  },
}
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
