// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  class_index: {
    js: "./src/pages/class_index", // 页面入口js
    html: "./src/pages/class_index/index.html", // 页面使用的html模板
    out: "class_index.html", // 输出目录中的页面文件名
  },
  class_list: {
    js: "./src/pages/class_list", // 页面入口js
    html: "./src/pages/class_list/index.html", // 页面使用的html模板
    out: "class_list.html", // 输出目录中的页面文件名
  },
  class_view: {
    js: "./src/pages/class_view", // 页面入口js
    html: "./src/pages/class_view/index.html", // 页面使用的html模板
    out: "class_view.html", // 输出目录中的页面文件名
  },
  contact: {
    js: "./src/pages/contact", // 页面入口js
    html: "./src/pages/contact/index.html", // 页面使用的html模板
    out: "contact.html", // 输出目录中的页面文件名
  },
};
