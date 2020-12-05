<!--
 * @Author: your name
 * @Date: 2020-12-04 18:52:26
 * @LastEditTime: 2020-12-05 08:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\views\Detail\ImageList\ImageList.vue
-->
<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        @click="getImgMsg"
        v-for="skuImg in skuImageList"
        :key="skuImg.id"
      >
        <img :src="skuImg.imgUrl" :alt="skuImg.imgName" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { mapGetters } from "vuex";
Swiper.use([Navigation]);
export default {
  name: "ImageList",

  computed: {
    ...mapGetters(["skuImageList"]),
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        // loop: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    getImgMsg() {
      this.$bus.$emit("getImg", event.target.src);
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>