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
    jsonpCallback:"mycallback",
    success: function(json){
        console.log(json);
        var banner= json.data.modules[0].data.banner;
        // console.log(banner);
        bannerList.innerHTML =''
        for(var i = 0;i<banner.length;i++){
            // console.log(banner[i].image);
            bannerList.innerHTML += `<div class="swiper-slide"><a href="javascript:;"><img src="${banner[i].image}" alt=""></a></div>`
        };
        //新品----------------------------------
        var newpin= json.data.modules[2];
        // console.log(newpin);
        Newpin.innerHTML =`<div class="newpin">${newpin.title}</div>`


        var newlist=newpin.data.product_items;
        // console.log(newlist);
        newList.innerHTML =''
        for(var i = 0;i<newlist.length;i++){
            // console.log(newlist[i]);

            newList.innerHTML += `
            <li data="${newlist[i].id}" id="goods"><div class="aa"><a href="javascript:;">
                <div class="bb">
                    <div class="img">
                        <img src="${newlist[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h4>${newlist[i].title}</h4>
                        <h5>${newlist[i].desc}</h5>
                        <span>￥${newlist[i].price}</span>
                    </div>
                </div>
            </div></a></li>
            `
        };
      var lis = document.querySelectorAll("#goods");
      lis.forEach(function(val,i){
          lis[i].onclick = function(){
              var data = lis[i].getAttribute('data');
              localStorage.setItem('id',data);
              location.href = 'details.html';
          }
      });
        //人气-------------------------------
        var renqi= json.data.modules[4];
        // console.log(renqi);
        Renqi.innerHTML =`<div class="newpin">${renqi.title}</div>`


        var renlist=renqi.data.product_items;
        // console.log(newlist);
        renList.innerHTML=''
        for(var i = 0;i<renlist.length;i++){
            // console.log(newlist[i]);

            renList.innerHTML += `
            <li data="${renlist[i].id}" id="goods"><div class="aa"><a href="javascript:;">
                <div class="bb">
                    <div class="img">
                        <img src="${renlist[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h4>${renlist[i].title}</h4>
                        <h5>${renlist[i].desc}</h5>
                        <span>￥${renlist[i].price}</span>
                    </div>
                </div>
            </div></a></li>
            `
        };
        var lis = document.querySelectorAll("#goods");
        lis.forEach(function(val,i){
            lis[i].onclick = function(){
                var data = lis[i].getAttribute('data');
                localStorage.setItem('id',data);
                location.href = 'details.html';
            }
        });
    },
    error: function(){
        alert('错误');
        window.location.href = "index.html";
    }
})



var Jdhed = document.querySelector(".jdhed");
var Jdlist = document.querySelector(".jdlist");
$.ajax({
    type: "get",
    url: "https://market.douban.com/api/v2/market/category/homelife?start=0&count=4",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback:"mycallback",
    success: function(json){
        // console.log(json);
        var jdhed= json.data;
        // console.log(jdhed);
        Jdhed.innerHTML =`<div class="product-list-title jdhed">
        ${jdhed.title}
        <span>${jdhed.description}</span>
        <a href="../html/list.html">查看更多 ></a>
    </div>`



        var jdList= json.data.products;
        console.log(jdList);
        
        Jdlist.innerHTML=''
        for(var i=0;i<jdList.length;i++){
            // console.log(jdlist);
            
            Jdlist.innerHTML +=`<li data="${jdList[i].id}" id="goods"><div class="aa"><a href="javascript:;">
            <div class="bb">
                <div class="img">
                    <img src="${jdList[i].image}" alt="">
                </div>
                <div class="info">
                    <h4>${jdList[i].title}</h4>
                    <h5>${jdList[i].desc}</h5>
                    <span>￥${jdList[i].price}</span>
                </div>
            </div>
        </div></a></li>`
        };
        var lis = document.querySelectorAll("#goods");
        lis.forEach(function(val,i){
            lis[i].onclick = function(){
                var data = lis[i].getAttribute('data');
                localStorage.setItem('id',data);
                location.href = 'details.html';
            }
        });
    },
    error: function(){
       console.log('错误');
       window.location.href = "index.html";
    }
})


var Happy = document.querySelector(".happy");
$.ajax({
    type: "get",
    url: "https://market.douban.com/api/v2/market/evaluations?start=0&count=8",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback:"mycallback",
    success: function(json){
        // console.log(json);

        var aaList= json.data.items;
        // console.log(aaList);
        Happy.innerHTML =''
        for(var i=0;i<aaList.length;i++){
            
            Happy.innerHTML +=`
            <li>
                <div class="product-card product-card-evaluation">
                    <a href="javascript:;" class="a1">
                        <img src="${aaList[i].image}" alt="">
                        <h6>${aaList[i].title}</h6>
                    </a>
                    <a href="#"  class="a2">
                        <img src="${aaList[i].user_avatar}" alt="">
                        <span>${aaList[i].user_name}</span>
                    </a>
                </div>
            </li>`
        };
    },
    error: function(){
        alert('错误');
        window.location.href = "index.html";
    }
})