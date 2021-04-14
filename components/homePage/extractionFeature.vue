<template>
  <div>
    <div class="pb-10"><h1>ویژگی های استخراج آگاه ماینینگ</h1></div>
    <div :style="[feature.id%2=== 0 ? {'direction':'ltr'} : {'direction':'rtl'}]" class="d-flex flex-wrap justify-space-between" v-for="feature in features" :key="feature.title">
      <div><img style="width:100%;" :src="feature.image"/></div>
      <div class="description text-right py-16" style="width:528px;">
        <div><h2>{{feature.title}}</h2></div>
        <div><p style="line-height:2;">{{feature.description}}</p></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
        id:1,
          title: "استفاده ی بهینه از منابع گازی",
          description:
            "به موازات احداث نیروگاه مجهز برای تولید برق با بهره‌مندی از منـابع گازی غنی کشور، مجوزهای لازم از سوی وزارت صمت) صنعت، معدن و تجارت) برای استخراج بیت کوین اتخاذ شد . هم زمان با پیشرفت مراحل فوق،واردات تجهیزات ماینینگ به‌ صورت قانونیو با پرداخت مالیات و عوارض مربوطه در راستـای اهداف فـوق شکل گرفت.",
          image:require("~/assets/images/homePage/Group 4108.svg")
        },
        {
            id:2,
          title: "استفاده از برق تولیدی خود مجموعه",
          description:
            "به موازات احداث نیروگاه مجهز برای تولید برق با بهره‌مندی از منـابع گازی غنی کشور، مجوزهای لازم از سوی وزارت صمت) صنعت، معدن و تجارت) برای استخراج بیت کوین اتخاذ شد . هم زمان با پیشرفت مراحل فوق،واردات تجهیزات ماینینگ به‌ صورت قانونیو با پرداخت مالیات و عوارض مربوطه در راستـای اهداف فـوق شکل گرفت.",
          image: require("~/assets/images/homePage/Group 3466.svg")
        },
        {
            id:3,
          title: "استخراج و ارائه کاملا قانونی و اصیل",
          description:
            "به موازات احداث نیروگاه مجهز برای تولید برق با بهره‌مندی از منـابع گازی غنی کشور، مجوزهای لازم از سوی وزارت صمت) صنعت، معدن و تجارت) برای استخراج بیت کوین اتخاذ شد . هم زمان با پیشرفت مراحل فوق،واردات تجهیزات ماینینگ به‌ صورت قانونیو با پرداخت مالیات و عوارض مربوطه در راستـای اهداف فـوق شکل گرفت.",
          image:require("~/assets/images/homePage/Group 4109.svg") 
        },
        {
            id:4,
          title: "بستر مبادلات بین المللی و داخلی",
          description:
            "به موازات احداث نیروگاه مجهز برای تولید برق با بهره‌مندی از منـابع گازی غنی کشور، مجوزهای لازم از سوی وزارت صمت) صنعت، معدن و تجارت) برای استخراج بیت کوین اتخاذ شد . هم زمان با پیشرفت مراحل فوق،واردات تجهیزات ماینینگ به‌ صورت قانونیو با پرداخت مالیات و عوارض مربوطه در راستـای اهداف فـوق شکل گرفت.",
          image:require("~/assets/images/homePage/Group 3470.svg")
        }
      ]
    };
  },
};
</script>
<style scoped>
@media screen and(max-width:528px) {
    .description{
        width: 350px;
    }
}
h2{
    color: #E8E7EC;
}
p{
    color: #BBBBBB;
}
</style>
