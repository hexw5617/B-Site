"use strict";

var headerContent = document.querySelector('.header-content');
var banner = document.querySelector('.pic');
var imgs = document.querySelector('#map');
ajax({
  type: "get",
  url: "../imgs/list.json",
  data: 'aaa=1&bbb=33',
  success: function success(data) {
    var json = JSON.parse(data); // console.log(json);

    var jsonCon = json.data.mate;
    console.log(jsonCon);
    var data = localStorage.getItem('id');
    console.log(data);

    for (var i = 0; i < jsonCon.length; i++) {
      if (jsonCon[i].id == data) {
        console.log(jsonCon[i]);
        headerContent.innerHTML = "\n               <div class=\"header-content\">\n                   <span>".concat(jsonCon[i].title, "</span>\n                   <div class=\"righaa\">\n                   <h4><a href=\"#\">\u767B\u9646\u67E5\u770B\u4F1A\u5458\u4EF7</a><span>\uFFE5<i>").concat(jsonCon[i].price, "</i>/\u4E2A</span></h4>\n                   <h5><a href=\"#\">\u7ACB\u5373\u8D2D\u4E70</a></h5>\n                   </div>\n               </div>");
        banner.innerHTML = "<div class=\"pice\" style=\"background-image: url(".concat(jsonCon[i].banner, ")\"></div>");
        var images = jsonCon[i].image;
        console.log(images);
        imgs.innerHTML = "";

        for (var i = 0; i < images.length; i++) {
          imgs.innerHTML += "\n                    <img src=\"".concat(images[i], "\" alt=\"\">\n                    ");
        }
      }
    }
  },
  error: function error() {
    alert('错误');
  }
});