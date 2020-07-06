
var Renqi = document.querySelector("#renqi");
$.ajax({
    type: "get",
    url: "https://market.douban.com/api/v2/market/products?name=all&start=0&count=33",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback:"mycallback",
    success: function(json){
        // console.log(json);

        var list= json.data.products;
        // console.log(list);
        
        
        for(var i=0;i<list.length;i++){
            
            Renqi.innerHTML +=`
            <li data="${list[i].id}" id="goods"><div class="aa"><a href="javascript:;">
                <div class="bb">
                    <div class="img">
                        <img src="${list[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h4>${list[i].title}</h4>
                        <h5>${list[i].desc}</h5>
                        <span>￥${list[i].price}</span>
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
        alert('错误');
    }
})
var log= document.querySelector('.toplog');
var loas= localStorage.getItem("obj");
loas = JSON.parse(loas);
// console.log(loas);
if(loas){
    log.firstElementChild.style.opacity="0";
}