<template>
  <div class="v-cart-item">
    <img
        class="v-cart-item__image"
        :src="require('../assets/images/'+ cart_item_data.image)"
        alt="cart-logo"
    >
    <div>
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
      <p>{{ cart_item_data.about }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity</p>
      <span>
      {{ cart_item_data.quantity }}
    </span>
    </div>
    <button class="v-cart-item_btn" @click="deleteFromCart(index)">Delete</button>
  </div>

</template>

<script>

export default {

  name: "v-cart-item",

  data() {
    return {}
  },

  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    deleteFromCart(index) {
      this.$emit("deleteFromCart", index)
    }
  }
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #d20505;
  padding: 20px;
  border: 1px solid black;
  margin: 20px;
  font-family: Helvetica;
  border-radius: 20px;
}

.v-cart-item__image {
  min-width: 10%;
}
.v-cart-item__quantity{
  padding-right: 20px;
}
.v-cart-item_btn{
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
cursor: pointer;
  &:hover{
    color: #d20505;
    background: wheat;
  }
}


</style>
