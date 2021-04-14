<template>
  <div class="footerBG" >
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" xl="6" md="12" sm="12">
          <h1>{{ $t("headings.newsletters") }}</h1>
          <p>{{ $t("texts.newsletter") }}</p>
          <v-text-field
            dark
            height="68"
            :label="$t('inputs.email')"
            outlined
            rounded
            background-color="#272748"
          >
          >
            <template v-slot:append>
              <Buttons style="width:100px;"/>
            </template>
          </v-text-field>
          <div class="news"></div>
        </v-col>
        <v-col cols="12" lg="6" xl="6" md="12" sm="12" xs="12">
          <h1>{{ $t("headings.contactForm") }}</h1>
          <p>{{ $t("texts.contactForm") }}</p>
          <div class="d-flex flex-row">
            <v-text-field
              dark
              dense
              rounded
              :label="$t('inputs.name')"
              background-color="#272748"
              height="68"
            ></v-text-field>
            <v-text-field
              dark
              dense
              rounded
              :label="$t('inputs.email')"
              background-color="#272748"
              height="68"
            ></v-text-field>
          </div>
          <v-textarea
            dark
            rounded
            :label="$t('inputs.typeYourMessage')"
            background-color="#272748"
            height="266"
          ></v-textarea>
          <Buttons style="float:left;" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xl="3" lg="3" md="6" sm="6" xs="12">
          <h1 class="pb-5">{{ $t("headings.quickAccess") }}</h1>
          <div v-for="item in quickMenu" :key="item.title">
            <nuxt-link :to="item.route" style="color:black;"
              ><p>{{ item.title }}</p></nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="6" sm="6" xs="12">
          <h1 class="pb-5">{{ $t("headings.services") }}</h1>
          <div v-for="item in services" :key="item.title">
            <nuxt-link :to="item.route" style="color:black;"
              ><p>{{ item.title }}</p></nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="6" sm="6" xs="12">
          <h1 class="pb-5">{{ $t("headings.educations") }}</h1>
          <div v-for="item in educations" :key="item.title">
            <nuxt-link :to="item.route" style="color:black;"
              ><p>{{ item.title }}</p></nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="6" sm="6" xs="12">
          <div d-flex align-end>
            <v-icon large class="px-5" color="#35bfc1">mdi-instagram</v-icon>
            <v-icon large color="#35bfc1">mdi-telegram</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quickMenu: [
        {
          title: this.$t("menu.homePage"),
          route: "/home"
        },
        {
          title: this.$t("menu.news"),
          route: ""
        },
        {
          title: this.$t("menu.articles"),
          route: ""
        },
        {
          title: this.$t("menu.kripto"),
          route: ""
        },
        {
          title: this.$t("menu.education"),
          route: ""
        }
      ],
      services: [
        {
          title: this.$t("services.digitalCurrenctPrices"),
          route: ""
        },
        {
          title: this.$t("services.exchangeOffices"),
          route: ""
        },
        {
          title: this.$t("services.digitalCurrencyCalculator"),
          route: ""
        },
        {
          title: this.$t("services.mining"),
          route: ""
        },
        {
          title: this.$t("services.dictionary"),
          route: ""
        }
      ],
      educations: [
        {
          title: this.$t("educations.start"),
          route: ""
        },
        {
          title: this.$t("educations.bitOrEth"),
          route: ""
        },
        {
          title: this.$t("educations.altCoin"),
          route: ""
        },
        {
          title: this.$t("educations.blogWorlds"),
          route: ""
        },
        {
          title: this.$t("educations.oscillation"),
          route: ""
        }
      ],
      news:[
        {
          title:"",
          image:""
        }
      ]
    };
  }
};
</script>
<style scoped>
.footerBG{
  background-image: url('~assets/images/homePage/Asset 1.svg');
  background-repeat: no-repeat;
  background-size:cover;
  background: linear-gradient(183deg, rgba(18,13,59,1) 55%, rgba(79,9,95,1) 90%);;

}
p{
  line-height: 50px;
}
.newsletter{
  width: 616px;
}
.contact{
  width: 616px;
}

</style>
