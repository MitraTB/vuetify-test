<template>
  <v-container>
    <section>
      <v-row
        class="d-flex justify-xl-space-between justify-lg-space-between justify-center"
      >
        <v-col cols="12" xl="6" lg="6" md="8" class="d-felx justify-center">
          <img
            style="width:100%"
            class="bitImg"
            src="~/assets/images/homePage/coin.png"
          />
        </v-col>
        <v-col cols="12" xl="5" lg="5" md="8" class="d-flex flex-column">
          <div class="d-flex justify-center justify-xl-end justify-lg-end">
            <AgahExtractionFarm class="my-xl-16 my-lg-16 mb-16" />
          </div>
          <div>
            <BitEthRate />
          </div>
        </v-col>
      </v-row>
    </section>
    <section>
      <ExtractionRate />
    </section>
    <section>
      <Calculator />
    </section>
    <section>
      <stock-calculator />
    </section>
    <section>
      <extraction-feature />
    </section>
    <section>
      <RoadMap />
    </section>
    <section>
      <last-news />
    </section>
    <div>  
      <v-slider
        thumb-label="always"
        thumb-size="50"
        thumb-color="transparent"
        v-model="ex3.val"
      >
        <template #thumb-label="data">
          <div id="aliali" class="ml-4">{{data.value}}</div>
          <span><h1 class="ml-2">&dtrif;</h1></span>
        </template>
      </v-slider>
    </div>
  </v-container>
</template>
<script>
import AgahExtractionFarm from "~/components/homePage/AgahExtractionFarm.vue";
import BitEthRate from "~/components/homePage/BitEthRate.vue";
import ExtractionRate from "~/components/homePage/ExtractionRate.vue";
import Calculator from "~/components/homePage/Calculator.vue";
import StockCalculator from "../../components/homePage/StockCalculator.vue";
import ExtractionFeature from "../../components/homePage/extractionFeature.vue";
import RoadMap from "~/components/homePage/RoadMap.vue";
import LastNews from "../../components/homePage/LastNews.vue";
import SelectBox from "../../components/inputs/SelectBox.vue";
import ExerciseIng from "../../components/homePage/ExerciseIng.vue";

export default {
  components: {
    AgahExtractionFarm,
    BitEthRate,
    ExtractionRate,
    Calculator,
    StockCalculator,
    ExtractionFeature,
    RoadMap,
    LastNews,
    SelectBox,
    ExerciseIng
  },
  data() {
    return {
      ex3: { label: "TH/s", val: 50, color: "red" }
    };
  }
};
</script>
<style>
section {
  margin-bottom: 5%;
}
.v-slider--horizontal .v-slider__track-container {
  height: 30px !important;
}
.v-slider__thumb {
  width: 0 !important;
  height: 0 !important;
}
</style>
