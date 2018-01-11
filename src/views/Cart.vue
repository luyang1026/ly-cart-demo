<template>
  <div class="full">
    <v-list class="list">
      <v-subheader>购物车</v-subheader>
        <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
          <v-list-tile-avatar>
            <img v-bind:src="item.imgUrl"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name" class="indent"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple @click="currentItem = item; dialog = true">
              <v-icon medium color="grey lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
    </v-list>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>确定删除此商品?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">取消</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="deleteItem()">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        currentItem: null,
        items: this.$store.state.cart
      }
    },
    methods: {
      deleteItem () {
        this.$store.commit('deleteItem', this.currentItem.id)
        this.dialog = false
      }
    },
    mounted () {}
  }
</script>
<style lang="less">
  .full{
    height: 100%;
    width: 100%;
  }
  .list{
    width: 90%;
    height: 90%;
  }
  .indent{
    padding-left: 5%;
  }
</style>
