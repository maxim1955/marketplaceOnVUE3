<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/'+ product_data.image)" alt="cart-logo">
    <h3 class="v-catalog-item__name">{{ product_data.name }}</h3>
    <p class="v-catalog-item__price">{{ product_data.about }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <a class="waves-effect waves-light btn" @click="addToCart"><i class="material-icons left" >add</i>add to cart</a>
  </div>

</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {
      title: "item"
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart',this.product_data)//первым аргументом ключ по которому идентифицируем, а вторым что мы делаем
    }
  }
}
</script>

<style lang="scss">

.v-catalog-item {
flex-basis: 40%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
  justify-content: center;
}

.v-catalog__btn {
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: rgb(21, 2, 2);
  font-size: 17px;
  &:hover{
    color: #d20505;
    background-color: rgba(107, 94, 94, 0.76);

   }
}
.v-catalog-item__image{
  width: 150px;
  display: block;
  margin: 0 auto;
}
.v-catalog-item__price{
  font-size: 20px;
  color: cyan;
}
</style>
