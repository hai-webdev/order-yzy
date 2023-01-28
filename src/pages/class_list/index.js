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

wow = new WOW(
    {
        boxClass: 'wow',      // 默认属性名
        mobile: false,       // 是否在移动设备中开启动画
    }
);
wow.init();