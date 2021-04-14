<template>
  <v-container>
    <v-app-bar
      flat
      color="transparent"
      shrink-on-scroll
      prominent
      style="padding-top:3%;"
    >
      <img
        class="logo mx-md-10"
        src="~/assets/images/logo/logo.png"
        style="width:21.187rem; height:5.625rem;"
      />
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down" style="margin:30px 0 0 0;">
        <ul class="d-flex pl-0">
          <li v-for="item in menuItems" :key="item.id">
            <nuxt-link :to="item.route"
              ><p class="menuTitles px-3" style="font-size:18px;">{{ item.title }}</p></nuxt-link
            >
          </li>
        </ul>
        <!-- <v-btn class="hoverColor" active-class color="white" style="font-size:18px;" text v-for="item in menuItems" :key="item.id">
          {{ item.title }}
        </v-btn> -->
      </div>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="white"
            v-bind="attrs"
            v-on="on"
            class="hidden-lg-and-up pt-8"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list rounded>
          <v-list-item
            v-for="item in menuItems"
            :key="item.id"
            :to="item.route"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: this.$t("menu.homePage"),
          route: "/home"
        },
        {
          id: 2,
          title: this.$t("menu.onlineCalculator"),
          route: ""
        },
        {
          id: 3,
          title: this.$t("menu.minerMachines"),
          route: ""
        },
        {
          id: 5,
          title: this.$t("menu.news"),
          route: ""
        },
        {
          id: 7,
          title: this.$t("menu.aboutUs"),
          route: ""
        },
        {
          id: 8,
          title: this.$t("menu.contact"),
          route: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .logo {
    width: 15rem !important;
  }
}
a{
  color: white;
}
.menuTitles:hover{
  color: #3fc1c3;
}
</style>
