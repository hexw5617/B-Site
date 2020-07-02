"use strict";

var bannerList = document.querySelector("#bannerlist");
var newList = document.querySelector("#newlist");
var renList = document.querySelector("#renqi");
var Newpin = document.querySelector(".newpin");
var Renqi = document.querySelector(".renqi");
$.ajax({
  type: "get",
  url: "https://market.douban.com/api/v2/market/home/modules?dt_market_source=pc",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "mycallback",
  success: function success(json) {
    console.log(json);
    var banner = json.data.modules[0].data.banner; // console.log(banner);

    bannerList.innerHTML = '';

    for (var i = 0; i < banner.length; i++) {
      // console.log(banner[i].image);
      bannerList.innerHTML += "<div class=\"swiper-slide\"><a href=\"javascript:;\"><img src=\"".concat(banner[i].image, "\" alt=\"\"></a></div>");
    }

    ; //新品----------------------------------

    var newpin = json.data.modules[2]; // console.log(newpin);

    Newpin.innerHTML = "<div class=\"newpin\">".concat(newpin.title, "</div>");
    var newlist = newpin.data.product_items; // console.log(newlist);

    newList.innerHTML = '';

    for (var i = 0; i < newlist.length; i++) {
      // console.log(newlist[i]);
      newList.innerHTML += "\n            <li data=\"".concat(newlist[i].id, "\" id=\"goods\"><div class=\"aa\"><a href=\"javascript:;\">\n                <div class=\"bb\">\n                    <div class=\"img\">\n                        <img src=\"").concat(newlist[i].image, "\" alt=\"\">\n                    </div>\n                    <div class=\"info\">\n                        <h4>").concat(newlist[i].title, "</h4>\n                        <h5>").concat(newlist[i].desc, "</h5>\n                        <span>\uFFE5").concat(newlist[i].price, "</span>\n                    </div>\n                </div>\n            </div></a></li>\n            ");
    }

    ;
    var lis = document.querySelectorAll("#goods");
    lis.forEach(function (val, i) {
      lis[i].onclick = function () {
        var data = lis[i].getAttribute('data');
        localStorage.setItem('id', data);
        location.href = 'details.html';
      };
    }); //人气-------------------------------

    var renqi = json.data.modules[4]; // console.log(renqi);

    Renqi.innerHTML = "<div class=\"newpin\">".concat(renqi.title, "</div>");
    var renlist = renqi.data.product_items; // console.log(newlist);

    renList.innerHTML = '';

    for (var i = 0; i < renlist.length; i++) {
      // console.log(newlist[i]);
      renList.innerHTML += "\n            <li data=\"".concat(renlist[i].id, "\" id=\"goods\"><div class=\"aa\"><a href=\"javascript:;\">\n                <div class=\"bb\">\n                    <div class=\"img\">\n                        <img src=\"").concat(renlist[i].image, "\" alt=\"\">\n                    </div>\n                    <div class=\"info\">\n                        <h4>").concat(renlist[i].title, "</h4>\n                        <h5>").concat(renlist[i].desc, "</h5>\n                        <span>\uFFE5").concat(renlist[i].price, "</span>\n                    </div>\n                </div>\n            </div></a></li>\n            ");
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
    window.location.href = "index.html";
  }
});
var Jdhed = document.querySelector(".jdhed");
var Jdlist = document.querySelector(".jdlist");
$.ajax({
  type: "get",
  url: "https://market.douban.com/api/v2/market/category/homelife?start=0&count=4",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "mycallback",
  success: function success(json) {
    // console.log(json);
    var jdhed = json.data; // console.log(jdhed);

    Jdhed.innerHTML = "<div class=\"product-list-title jdhed\">\n        ".concat(jdhed.title, "\n        <span>").concat(jdhed.description, "</span>\n        <a href=\"../html/list.html\">\u67E5\u770B\u66F4\u591A ></a>\n    </div>");
    var jdList = json.data.products;
    console.log(jdList);
    Jdlist.innerHTML = '';

    for (var i = 0; i < jdList.length; i++) {
      // console.log(jdlist);
      Jdlist.innerHTML += "<li data=\"".concat(jdList[i].id, "\" id=\"goods\"><div class=\"aa\"><a href=\"javascript:;\">\n            <div class=\"bb\">\n                <div class=\"img\">\n                    <img src=\"").concat(jdList[i].image, "\" alt=\"\">\n                </div>\n                <div class=\"info\">\n                    <h4>").concat(jdList[i].title, "</h4>\n                    <h5>").concat(jdList[i].desc, "</h5>\n                    <span>\uFFE5").concat(jdList[i].price, "</span>\n                </div>\n            </div>\n        </div></a></li>");
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
    console.log('错误');
    window.location.href = "index.html";
  }
});
var Happy = document.querySelector(".happy");
$.ajax({
  type: "get",
  url: "https://market.douban.com/api/v2/market/evaluations?start=0&count=8",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "mycallback",
  success: function success(json) {
    // console.log(json);
    var aaList = json.data.items; // console.log(aaList);

    Happy.innerHTML = '';

    for (var i = 0; i < aaList.length; i++) {
      Happy.innerHTML += "\n            <li>\n                <div class=\"product-card product-card-evaluation\">\n                    <a href=\"javascript:;\" class=\"a1\">\n                        <img src=\"".concat(aaList[i].image, "\" alt=\"\">\n                        <h6>").concat(aaList[i].title, "</h6>\n                    </a>\n                    <a href=\"#\"  class=\"a2\">\n                        <img src=\"").concat(aaList[i].user_avatar, "\" alt=\"\">\n                        <span>").concat(aaList[i].user_name, "</span>\n                    </a>\n                </div>\n            </li>");
    }

    ;
  },
  error: function error() {
    alert('错误');
    window.location.href = "index.html";
  }
});