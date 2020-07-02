setInterval(function(){
    var boxImg = document.querySelector('.boximg');
   var img = document.querySelector('.on');
   if(boxImg.lastElementChild === img){
       img.removeAttribute('class');
       boxImg.firstElementChild.setAttribute('class','on');
   }else{
    img.nextElementSibling.setAttribute('class','on');
    img.removeAttribute('class')
   }
   
},3000)


var login = document.querySelector('#login');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');


login.onclick=function(){
    ajax({
        type:'get',
        url:"http://localhost/two-stage/DOUBAN/src/imgs/user.php", 
        data:{
            'type':'login',
            'user':user.value,
            'pass':pass.value
        },
        success:function(data){ 
            
            var json=JSON.parse(data);
            
            if(json.err == 0){
                alert(json.msg);
                window.location.href = "index.html";
            }else{
                alert(json.msg);
            }
            console.log(data);
        }
    })
}

