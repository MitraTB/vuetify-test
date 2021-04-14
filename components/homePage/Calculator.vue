<template>
  <v-row class="d-flex justify-space-between flex-wrap">
    <v-col cols="12" xl="6" lg="6" md="6" class="py-15">
      <h1>ماشین حساب تبدیل ارزهای دیجیتال</h1>
      <div class="calInput">
        <div class="mb-5 d-flex flex-wrap">
          <v-select
            rounded
            :items="currencies"
            item-text="country"
            item-value="country"
            background-color="white"
            height="60"
            style="max-width:170px;"
            :value="currencies[0].country"
          >
            <template slot="selection" slot-scope="data">
              <img :src="data.item.flag" class="px-1" />{{ data.item.country }}
            </template>
            <template slot="item" slot-scope="data">
              <v-list-item-avatar>
                <img class="me-1" :src="data.item.flag" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-html="data.item.country"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-select>
          <v-text-field
            rounded
            background-color="white"
            height="60"
            style="max-width:350px;"
            class="mx-0 mx-xl-2 mx-lg-2 mx-md-2"
          ></v-text-field>
        </div>
        <div class="d-flex flex-wrap">
          <v-select
            rounded
            :items="currencies"
            item-text="country"
            item-value="country"
            background-color="white"
            height="60"
            style="max-width:170px;"
            :value="currencies[0].country"
          >
            <template slot="selection" slot-scope="data">
              <img :src="data.item.flag" class="px-1"/>{{ data.item.country }}
            </template>
            <template slot="item" slot-scope="data">
              <v-list-item-avatar>
                <img class="me-1" :src="data.item.flag" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-html="data.item.country"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-select>
          <v-text-field
            rounded
            background-color="white"
            height="60"
            style="max-width:350px;"
            class="mx-0 mx-xl-2 mx-lg-2 mx-md-2"
          ></v-text-field>
        </div>
      </div>
    </v-col>
    <v-col cols="12" xl="6" lg="6" md="6">
      <img style="width:100%" src="~/assets/images/homePage/321321.png" />
    </v-col>
  </v-row>
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
      ]
    };
  }
};
</script>
<style scoped>
.calInput {
  margin-top: 3rem;
}
</style>
