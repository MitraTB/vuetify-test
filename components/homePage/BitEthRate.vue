<template>
  <div class="d-flex flex-wrap justify-center justify-md-space-between justify-lg-space-between justify-xl-space-between">
    <div
      class="d-flex bitEthRate py-xl-0 py-lg-0 py-md-0  py-5 px-5 px-xl-0 px-lg-0 px-md-0"
      v-for="currency in finalCurrenciesArray"
      :key="currency.title"
    >
      <div :style="currency.bgColor" >
        <v-icon style="color:red" x-large>mdi-menu-down</v-icon>
        <img style="width:20%; height:120px; margin:0 40%" :src="currency.image" />
        <p style="color:white;">{{ currency.price1 }}</p>
        <p style="color:red;">{{ currency.price2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currenciesUI: [
        {
          title: "bitcoin",
          image: require(`~/assets/images/homePage/Path 123.svg`),
          bgColor:"background-image: linear-gradient(to bottom, #f9b51c, #fe8e02)"
        },
        {
          title: "ethereum",
          image: require(`~/assets/images/homePage/Group 3475.svg`),
          bgColor:"background-image: linear-gradient(to bottom, #9babef, #2a3170);"
        }
      ],
      currencies: [
        { title: "bitcoin", price1: 0, price2: 0 },
        { title: "ethereum", price1: 0, price2: 0 }
      ]
    };
  },
  async created() {
    //     const response = await axios.get('');
    //     this.Currencies = response.data;

    setTimeout(
      () =>
        (this.currencies = [
          { title: "bitcoin", price1: 3453450, price2: 32450 },
          { title: "ethereum", price1: 3453450, price2: 345450 }
        ]),
      2000
    );
  },
  computed: {
    finalCurrenciesArray() {
      return this.currencies.map(currency => {
        const findCurrency = this.currenciesUI.find(
          cur => cur.title == currency.title
        );
        return { ...findCurrency, ...currency };
      });
    }
  }
};
</script>
<style scoped>
.bitEthRate div {
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 50px;
}
p {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  line-height: 31px;
}

</style>
