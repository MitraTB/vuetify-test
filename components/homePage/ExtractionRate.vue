<template>
  <v-row class="d-flex flex-wrap">
    <v-col cols="12" xl="6" lg="6" md="6" v-for="currency in currencies" :key="currency.title" class="d-flex justify-end">
      <div class="extractionRate d-flex flex-column">
        <img class="bit" width="20%" height="20%" :src="currency.image" />
        <div>
          <h3>میزان استخراج لحظه ای</h3>
          <div class="ths d-flex justify-space-between">
            <div class="first">1</div>
            <div class="first">2</div>
            <div class="first">3</div>
            <div class="first">4</div>
          </div>
          <h3>میزان استخراج کلی</h3>
          <div class="d-flex justify-end">
            <div class="rectangle"></div>
          </div>
          <h3>نمودار میزان استخراج</h3>
          <div class="d-flex flex-row justify-center ">
            <v-btn class="weekly">هفتگی</v-btn>
            <v-btn class="weekly">ماهانه</v-btn>
            <v-btn class="weekly">سالانه</v-btn>
          </div>
          <div class="chart d-flex justify-center">
            <div></div>
          </div>
        </div>
        <div class="vertical"></div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      currencies: [
        {
          title: "bitcoin",
          style: "",
          image: require("~/assets/images/homePage/bitcoin.png")
        },
        {
          title: "ethereum",
          style: "",
          image: require("~/assets/images/homePage/ethereum.png")
        }
      ]
    };
  }
};
</script>
<style scoped>
.extractionRate {
  width: 95%;
  border: solid 1px #9e9e9e;
  background-image: linear-gradient(
    to bottom,
    rgba(142, 139, 177, 0.3),
    rgba(155, 155, 155, 0.13)
  );
  position: relative;
  padding:15% 12.5% 5% 12.5%;
  border-radius: 70px 0 70px 70px;
}
.bit {
  position: absolute;
  top: -60px;
  right: 45%;
}
h3 {
  color: white;
  text-align: right;
  padding:6% 0 4%;
  
}
.first {
  width: 15%;
  padding:4% 5%;
  border-radius: 25px;
  background-color: #696585;
}
.rectangle {
  width: 323px;
  height: 34px;
  background-color: #8c9bde;
  border-radius: 25px;
  background-color: #696585;
}
.weekly {
  width: 29%;
  height: 72px;
  margin:0 3% 7%;
  padding: 24px 39px 23px;
  border-radius: 25px;
}
.chart div {
  height: 10.187rem;
  width: 100%;
  background-color: #696585;
}
.vertical {
  position: absolute;
  width: 15%;
  height: 30.5rem;
  background-image: linear-gradient(to top, #99a9ed, #2b3271);
  border-radius: 0 40px 0 40px;
  right: -7%;
  top: -5%;
}
</style>
