<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage <= 1"
      @click="setMyCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button
      :class="{ active: myCurrentPage === 1 }"
      @click="setMyCurrentPage('1')"
    >
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
      v-for="item in ergodicPage"
      :key="item"
      @click="setMyCurrentPage(startEnd.start + item - 1)"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPages }"
      @click="setMyCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="myCurrentPage >= totalPages"
      @click="setMyCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 显示按钮的数量
    pagerCount: {
      type: Number,
      validator(val) {
        /**
         * 验证数据格式
         * 显示的数量大于 5 小于 21 的奇数
         * 返回true 验证成功,返回false
         */
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    // 总页数
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算开始和结束的页数
    // eslint-disable-next-line vue/return-in-computed-property
    startEnd() {
      const { myCurrentPage, pagerCount, totalPages } = this,
        // 中间显示的个数
        count = pagerCount - 2,
        // 中间的一般
        halfCount = Math.floor(count / 2);
      let start, end;
      if (myCurrentPage > totalPages - halfCount) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      if (start <= 1) {
        start = 2;
      }
      // 正常情况
      end = start + count - 1;
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
    // 需要遍历的东西
    ergodicPage() {
      const { start, end } = this.startEnd,
        count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setMyCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>