<template>
  <v-container grid-list-md text-xs-center>
    <v-layout class="wrap">
      <v-flex xs3 v-for="product in productList" :key="product.id">
        <v-card>
          <v-card-media :src="product.imgUrl" height="200px"></v-card-media>
          <v-card-text class="px-0">{{product.name}}</v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="addToCart(product)">加入购物车</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-alert
      class="alert"
      color="success"
      icon="check_circle"
      :value="alert"
    ></v-alert>
  </v-container>
</template>
<script>
  export default {
    mounted () {
      this._api.getProdustList(res => {
        this.productList = res
      })
    },
    data () {
      return {
        productList: [],
        alert: false
      }
    },
    methods: {
      addToCart (item) {
        this.$store.commit('addToChart', item)
      }
    }
  }
</script>
<style lang="less">
  .wrap{
    flex-wrap: wrap;
  }
  .indent{
    text-indent: 2em;
  }
  .alert{
    position: absolute;
    margin: 0 auto;
    bottom: 0;
  }
</style>
