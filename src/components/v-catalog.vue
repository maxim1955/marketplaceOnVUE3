<template>
  <h3 class="title">{{title}}</h3>
  <div class="v-catalog">
    <router-link :to="{ name:'cart', params: { cart_data: CART } }">
      <div class="v-catalog___link">
        <i class="material-icons right" >shopping_cart</i>
        {{ CART.length }}</div>
    </router-link>

    <div class="v-catalog__list">
      <v-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>

  </div>

</template>

<script>
import vItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-catalog",
  data() {
    return {
      title: 'Marketplace by Maxon'
    };
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log("Данные пришли");
          }
        })
  },
  components: {
    vItem,
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
  }

}
</script>

<style lang="scss">
.title{
 color: aliceblue;
}
.v-catalog,
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #323568;
  border-radius: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: chartreuse;
  align-items: center;
  min-width: 900px;

}

.v-catalog___link {
  position: absolute;
  top: 30px;
  right: 30px;
  color: red;
}

.v-catalog-title {
  text-align: center;
  width: 100%;
}
</style>
