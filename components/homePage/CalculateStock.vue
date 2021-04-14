<template>
  <div>
    <div class="header mb-10"><h1>محاسبه میزان سرمایه برای ماینینگ</h1></div>
    <div class="calculate">
      <div class="d-flex flex-wrap">
        <SelectBox />
        <TextInput />
        <SelectBox />
        <TextInput />
      </div>
      <div class="d-flex flex-wrap pt-5">
        <SelectBox />
        <TextInput />
        <v-btn rounded color="#FE8D01" width="579px" height=" 3.625rem"
          >محاسبه</v-btn
        >
      </div>
      <div class="d-flex justify-space-between pt-10">
        <div>
          <nuxt-link to="/"><p class="py-5" style="color:#FE8D01;">+ محاسبات بیشتر</p></nuxt-link>
        </div>
        <div class="d-flex">
          <p class="pa-5" style="color:#CBCBCB;">درآمد ماهانه</p>
          <input
            style="width:579px; height:3.625rem; background-color:#707070"
          />
        </div>
      </div>
      <div class="calculate">
          <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "~/components/inputs/SelectBox.vue";
import TextInput from "~/components/inputs/TextInput.vue";
export default {
  components: {
    SelectBox,
    TextInput
  }
};
</script>
<style scoped>
.calculate{
border: solid 1px #9e9e9e;
background-image: linear-gradient(to bottom, rgba(142, 139, 177, 0.3), rgba(155, 155, 155, 0.13));
padding: 5% 7%;
border-radius: 118px 0px;
}
</style>
