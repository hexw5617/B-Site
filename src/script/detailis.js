var headerContent =document.querySelector('.header-content');
var banner =document.querySelector('.pic');
var imgs =document.querySelector('#map');

ajax({
    type: "get",
    url: "../imgs/list.json",
    data:'aaa=1&bbb=33',
    success:function(data){
        var json = JSON.parse(data);
        // console.log(json);
        var jsonCon = json.data.mate;
        console.log(jsonCon);
       var data = localStorage.getItem('id');
       console.log(data);
       
       for(var i = 0;i<jsonCon.length;i++){
           if(jsonCon[i].id == data){
               console.log(jsonCon[i])
               headerContent.innerHTML =`
               <div class="header-content">
                   <span>${jsonCon[i].title}</span>
                   <div class="righaa">
                   <h4><a href="#">登陆查看会员价</a><span>￥<i>${jsonCon[i].price}</i>/个</span></h4>
                   <h5><a href="#">立即购买</a></h5>
                   </div>
               </div>`;
               banner.innerHTML =`<div class="pice" style="background-image: url(${jsonCon[i].banner})"></div>`;    
               
               
               var images = jsonCon[i].image;
               console.log(images) ;
               imgs.innerHTML="";
              for(var i = 0;i<images.length;i++){
                    imgs.innerHTML += `
                    <img src="${images[i]}" alt="">
                    `
              }
           }
       }
    },
    error:function(){
        alert('错误');
    },
    
})
var log= document.querySelector('.toplog');
var loas= localStorage.getItem("obj");
loas = JSON.parse(loas);
// console.log(loas);
if(loas){
    log.firstElementChild.style.opacity="0";
}