<template>
  <div>
    <v-select rounded :items="options" background-color="white" height="60">
      <template slot="selection" slot-scope="data">
        <img :src="data.item.flag" />{{ data.item.country }}
      </template>
      <template slot="item" slot-scope="data">
        <v-list-item-avatar max-width="16" height="16">
          <img class="me-1" :src="data.item.flag" />
        </v-list-item-avatar>

        <v-list-item-content style="max-width: 70px;">
          <v-list-item-title v-html="data.item.country"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-select>
  </div>
</template>
<script>
export default {
  props: ["options", "height"]
};
</script>
<style scoped></style>
