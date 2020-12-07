<!--
 * @Author: your name
 * @Date: 2020-12-06 19:43:48
 * @LastEditTime: 2020-12-07 15:57:55
 * @LastEditors: Please set LastEditors
 * @Description: 支付界面
 * @FilePath: \vue_reception\src\views\pay\index.vue
-->
<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <i class="iconfont icon-gou"></i>
          <span>订单提交成功，请您及时付款，以便尽快为您发货~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">
            请您在提交订单
            <em class="orange time">{{ hour }}: {{ minutes }}:{{ second }}</em>
            之内完成支付，超时订单会自动取消。订单号：
            <em>{{ orderId }}</em>
          </span>
          <span class="fr">
            <em class="lead">应付金额:</em>
            <em class="orange money">￥{{ totalPrice }}</em>
          </span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明:</h4>
        <ol>
          <li>
            尚品汇商城支付平台目前支持
            <span class="zfb">支付宝</span>
            支付方式
          </li>
          <li>其它支付渠道正在调试中，敬请期待。</li>
          <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
        </ol>
        <h4>
          支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）
        </h4>
        <ul>
          <li>支付帐号：11111111</li>
          <li>密码：111111</li>
          <li>支付密码：111111</li>
        </ul>
      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li>
              <img src="./images/pay2.jpg" alt="" />
            </li>
            <li>
              <img src="./images/pay3.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div class="hr"></div>
        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付网银</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li>
                <img src="./images/pay10.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay10.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay11.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay12.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay13.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay14.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay15.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay16.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay17.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay18.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay19.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay20.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay21.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay22.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="hr"></div>

        <div class="submit">
          <el-dialog
            title="请使用微信扫码支付"
            :visible.sync="dialogVisible"
            width="30%"
            center
          >
            <img :src="url ? url : ''" alt="" />
            <span slot="footer" class="dialog-footer">
              <el-button @click="closeDialog">支付中遇到了问题</el-button>
              <el-button type="primary" @click="goPaySuccess"
                >已成功支付</el-button
              >
            </span>
          </el-dialog>
          <el-button :plain="true" @click="dialog_Visible" class="btn"
            >立即支付</el-button
          >
        </div>
        <div class="otherpay">
          <div class="step-tit">
            <h5>其他支付方式</h5>
          </div>
          <div class="step-cont">
            <span>
              <a>微信支付</a>
            </span>
            <span>中国银联</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Pay",
  data() {
    return {
      dialogVisible: false,
      isAlertShow: false,
      url: "",
      second: 59,
      minutes: 59,
      hour: 2,
    };
  },
  computed: {
    ...mapState({
      orderId: (state) => state.trade.orderId,
      codeUrl: (state) => state.trade.nativeList.codeUrl,
    }),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    ...mapActions(["getCreateNative"]),
    // 发送请求,获取二维码
    async dialog_Visible() {
      this.dialogVisible = true;
      const { orderId } = this;
      // mapState映射的数据可能是异步更新,不能立即拿到
      const result = await this.getCreateNative(orderId);
      const res = await QRCode.toDataURL(result.codeUrl);
      this.url = res;
    },
    closeDialog() {
      this.dialogVisible = false;
      this.isAlertShow = true;
      this.$message({
        message: "请联系前台",
        type: "warning",
      });
    },
    goPaySuccess() {
      this.dialogVisible = false;
      this.$router.push("/paysuccess");
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      if (this.$route.path === "/pay") {
        this.$router.push("/carhop");
      }
    });

    setInterval(() => {
      this.second--;
      if (this.second < 1) {
        this.second = 59;
        this.minutes--;
        if (this.minutes < 1) {
          this.minutes = 59;
          this.hour--;
          if (!this.hour) {
            return;
          }
        }
      }
    }, 1000);
  },
};
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;
  .pay-container {
    margin: 0 auto;
    width: 1200px;
    .checkout-tit {
      padding: 10px;
      .tit-txt {
        font-size: 14px;
        line-height: 21px;
        i {
          background-color: #fff;
          border: 2px solid #6aaf04;
          padding: 3px;
          margin-right: 8px;
          border-radius: 15px;
        }
      }
      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;
        .fl {
          float: left;
          .orange {
            color: #e1251b;
          }
        }
        .fr {
          float: right;
          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
          .money {
            font-size: 18px;
          }
        }
      }
    }
    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;
      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }
      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
        .zfb {
          color: #e1251b;
          font-weight: 700;
        }
      }
      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }
    .checkout-steps {
      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }
      .step-cont {
        margin: 0 10px 12px 20px;
        ul {
          font-size: 0;
          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
      .hr {
        height: 1px;
        background-color: #ddd;
      }
      .submit {
        text-align: center;
        .btn {
          display: inline-block;
          padding: 15px 45px;
          margin: 15px 0 10px;
          font: 18px "微软雅黑";
          font-weight: 700;
          border-radius: 0;
          background-color: #e1251b;
          border: 1px solid #e1251b;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
        }
        img {
          display: block;
          margin: 0 auto;
          width: 148px;
          height: 148px;
        }
      }
      .otherpay .step-cont {
        span {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>