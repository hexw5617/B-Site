<?php
header("content-type:text/html;charset=utf8");
$username = $_GET["username"];
$password = $_GET["password"];
$con = mysqli_connect('localhost','root','root','h5-2002');
mysqli_query($con,"set names utf8");
$sql = "select * from user where user='$username'";
$res = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($res);
if($row){
    $sql = "select * from user where user='$username' and pass='$password'";
    $res = mysqli_query($con,$sql);
    $row = mysqli_fetch_assoc($res);
    if($row){
        echo '{"msg":"登陆成功",
            "status":"200"}';
    }else{ 
        echo '{
            "msg":"登陆失败，请重新登陆",
            "status":"4"
        }';
    }
}else{ 
    echo '{"msg":"用户名不存在",
        "status":"3"}';
}
// echo json_encode($arr);