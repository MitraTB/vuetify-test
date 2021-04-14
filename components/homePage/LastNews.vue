<template>
  <div>
    <div><h1>آخرین اخبار</h1></div>
    <v-row class="d-flex justify-space-between mt-10">
      <v-col
        cols="12"
        xl="5"
        lg="5"
        class="cards d-flex my-5"
        style="height:182px; padding:0; overflow:hidden;"
        v-for="element in news"
        :key="element.id"
      >
        <div style="width:30%">
          <img style="width:100%; height:100%;" :src="element.image" />
        </div>
        <div style="width:70%" class="pa-10">
          <h2>{{ element.title }}</h2>
          <div class="d-flex justify-first pt-10">
            <p>{{ element.date }}</p>
            <p>{{ element.time }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: "همه چیز راجب بلاکچین",
          date: "اسفند99",
          time: "12:52",
          image: require("~/assets/images/homePage/download.jpg")
        },
        {
          id: 2,
          title: "پیشرفت با بیت کوین",
          date: "اسفند99",
          time: "12:52",
          image: require("~/assets/images/homePage/coinNews.jpg")
        },
        {
          id: 3,
          title: "همه چیز راجب بلاکچین",
          date: "اسفند99",
          time: "12:52",
          image: require("~/assets/images/homePage/download.jpg")
        },
        {
          id: 4,
          title: "پیشرفت با بیت کوین",
          date: "اسفند99",
          time: "12:52",
          image: require("~/assets/images/homePage/coinNews.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.cards {
  border: 1px solid #9e9e9e;
  background: transparent linear-gradient(180deg, #8e8bb14d 0%, #9b9b9b21 100%)
    0% 0% no-repeat padding-box;
  border-radius: 50px;
  opacity: 1;
}
h2 {
  color: white;
}
p {
  color: #ff8600;
}
</style>
