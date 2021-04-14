<template>
  <div class="calContainer">
    <v-row>
      <v-col cols="12" xl="6" lg="6" class="d-flex flex-wrap">
        <v-select
          class="px-1"
          style="width:35%;"
          light
          :items="currencies"
          item-text="country"
          item-value="country"
          background-color="white"
          height="60"
          :value="currencies[0].country"
        >
          <template slot="selection" slot-scope="data">
            <img class="me-1 px-2" :src="data.item.flag" />
            {{ data.item.country }}
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
        <v-text-field
          class="px-3"
          style="width:65%;"
          light
          color="white"
          background-color="white"
          height="60"
          label="مبلغ مورد نظر خود را به ریال وارد نمایید"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xl="6" lg="6" class="d-flex">
        <v-select
          class="px-1"
          style="width:35%"
          light
          :items="electricityType"
          background-color="white"
          height="60"
          label="نوع برق"
        ></v-select>
        <v-text-field
          class="px-1"
          style="width:65%"
          light
          color="white"
          background-color="white"
          height="60"
          label="مبلغ هر کیلو وات بر ساعت"
        ></v-text-field>
        <p>KW/h</p>
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="12" xl="6" lg="6" class="d-flex flex-wrap">
        <v-select
          class="px-1"
          style="width:35%"
          dark
          :items="electricityType"
          height="60"
          label="نوع برق"
          color="white"
        ></v-select>
        <v-text-field
          class="px-1"
          style="width:65%"
          light
          color="white"
          background-color="white"
          height="60"
          label="میزان هش را وارد نمایید"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xl="6" lg="6">
        <v-btn class="d-flex mt-4" color="#FE8D01" height="60" width="90%"
          >محاسبه</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="12" xl="5" lg="5"
        ><p style="color:#FE8D01" class="pt-8 px-5">+محاسبات بیشتر</p></v-col
      >
      <v-col
        cols="12"
        xl="7"
        lg="7"
        class="d-flex flex-wrap justify-center flex-row"
      >
        <p style="width:20%;" class="pt-8">درآمد ماهانه</p>
        <div style="width:65%; background-color:#707070;"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currencies: [
        {
          country: "ریال ایران",
          flag: require("~/assets/images/homePage/Iran-Flag.png")
        },
        {
          country: "دلار آمریکا",
          flag: require("~/assets/images/homePage/Iran-Flag.png")
        }
      ],
      electricityType: ["first", "second", "third"]
    };
  }
};
</script>
<style scoped>
.calContainer {
  background: transparent linear-gradient(180deg, #8e8bb14d 0%, #9b9b9b21 100%)
    0% 0% no-repeat padding-box;
  border: 1px solid #9e9e9e;
  border-radius: 118px 0px;
  opacity: 1;
  padding: 5% 10%;
}
</style>
