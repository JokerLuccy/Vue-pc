<template>
  <div class="spec-preview" @mousemove="mask_Move" ref="specPreview">
    <img
      :src="
        imgSrc
          ? imgSrc
          : skuInfo.skuImageList[0] && skuInfo.skuImageList[0].imgUrl
      "
    />
    <div class="event"></div>
    <div class="big">
      <img
        :src="
          imgSrc
            ? imgSrc
            : skuInfo.skuImageList[0] && skuInfo.skuImageList[0].imgUrl
        "
        ref="big"
      />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Zoom",
  data() {
    return {
      imgSrc: "",
    };
  },
  watch: {
    imgSrc: {
      handler(newSrc) {
        this.imgSrc = newSrc;
      },
      immediate: true,
    },
  },
  methods: {
    // 放大镜
    mask_Move(e) {
      const specPreview = this.$refs.specPreview,
        mask = this.$refs.mask,
        big = this.$refs.big;
      const maskMove = {
        x:
          e.clientX -
          specPreview.getBoundingClientRect().left -
          mask.offsetWidth / 2,
        y:
          e.clientY -
          specPreview.getBoundingClientRect().top -
          mask.offsetHeight / 2,
      };
      // 判断临界值
      if (maskMove.x >= specPreview.clientWidth - mask.offsetWidth) {
        maskMove.x = specPreview.clientWidth - mask.offsetWidth;
      } else if (maskMove.x <= 0) {
        maskMove.x = 0;
      }
      if (maskMove.y >= specPreview.clientHeight - mask.offsetHeight) {
        maskMove.y = specPreview.clientHeight - mask.offsetHeight;
      } else if (maskMove.y <= 0) {
        maskMove.y = 0;
      }
      mask.style.left = maskMove.x + "px";
      mask.style.top = maskMove.y + "px";
      const scale = 2;
      const bigAreaMove = {
        x: maskMove.x * scale,
        y: maskMove.y * scale,
      };
      big.style.left = -bigAreaMove.x + "px";
      big.style.top = -bigAreaMove.y + "px";
    },
  },
  mounted() {
    this.$bus.$on("getImg", (imgSrc) => {
      this.imgSrc = imgSrc;
    });
  },
  computed: {
    ...mapGetters(["skuInfo"]),
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>