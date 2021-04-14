<template>
  <v-app
    light
    :dir="selectedLanguage()"
    style="background: rgb(79,9,95);background: linear-gradient(138deg, rgba(79,9,95,1) 0%, rgba(18,13,59,1) 30%);"
  >
    <Navbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
  created() {
    if(this.$i18n.locale ==="fa"){
      this.$nuxt.$vuetify.rtl = true;
    }
  },
  methods: {
    selectedLanguage() {
      return this.$i18n.locale === "en" ? "ltr" : "rtl";
    }
  }
};
</script>

