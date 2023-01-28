// 首页使用的js
import Swiper from "swiper";
import {WOW} from "wowjs";
// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

const banner = new Swiper(".banner-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  effect: "fade",
  speed: 1000,
});
new WOW().init();
