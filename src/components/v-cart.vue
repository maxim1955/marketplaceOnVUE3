<template>
  <div class="v-cart">
    <h1>{{ title }}</h1>
    <router-link :to="{ name:'catalog', }">
      <div class="v-catalog___link">
        <i class="material-icons right">shopping_basket</i>
        {{ CART.length }}</div>
      <a class="waves-effect waves-light btn-small"><i class="material-icons left">arrow_back</i>Return to catalog</a>
    </router-link>

    <p v-if="!CART.length">Пустая корзина, наполни меня пожалуйста</p>
    <vCartItem
        v-for="(item,index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart = deleteFromCart(index)
    />
    <div
        class="total_value"
        v-if="CART.length"
    ><p>общая сумма: {{TOTAL_VALUE}}</p></div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import {mapActions, mapGetters} from "vuex";

export default {

  name: "v-cart",

  data() {
    return {
      title: 'Marketplace by Maxon',
    }
  },

  components: {
    vCartItem
  },

  computed: {
    ...mapGetters(['CART','TOTAL_VALUE'])
  },

  methods: {
    ...mapActions(['DELETE_FROM_CART','ADD_TO_TOTAL']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },

  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: gray;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding-top: 100px;

}

p {
  text-align: center;
  font-size: 26px;
}
</style>
