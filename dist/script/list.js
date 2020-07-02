"use strict";

var Renqi = document.querySelector("#renqi");
$.ajax({
  type: "get",
  url: "https://market.douban.com/api/v2/market/products?name=all&start=0&count=33",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "mycallback",
  success: function success(json) {
    // console.log(json);
    var list = json.data.products; // console.log(list);

    for (var i = 0; i < list.length; i++) {
      Renqi.innerHTML += "\n            <li data=\"".concat(list[i].id, "\" id=\"goods\"><div class=\"aa\"><a href=\"javascript:;\">\n                <div class=\"bb\">\n                    <div class=\"img\">\n                        <img src=\"").concat(list[i].image, "\" alt=\"\">\n                    </div>\n                    <div class=\"info\">\n                        <h4>").concat(list[i].title, "</h4>\n                        <h5>").concat(list[i].desc, "</h5>\n                        <span>\uFFE5").concat(list[i].price, "</span>\n                    </div>\n                </div>\n            </div></a></li>");
    }

    ;
    var lis = document.querySelectorAll("#goods");
    lis.forEach(function (val, i) {
      lis[i].onclick = function () {
        var data = lis[i].getAttribute('data');
        localStorage.setItem('id', data);
        location.href = 'details.html';
      };
    });
  },
  error: function error() {
    alert('错误');
  }
});