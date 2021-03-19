
var greet;
var date=new Date();
var hour=date.getHours();
var minute=date.getMinutes();
var second=date.getSeconds();
if(minute<10){
    minute="0"+minute;
}
if(second<10){
    second="0"+second;
}
if(hour<12){
    greet="Good morning";

}
else if(hour<17){
    greet="good afternoon"
}
else{
    greet="good evening";
}
window.onload=()=>{
    document.getElementById("hour").innerHTML=(hour);
    document.getElementById("minute").innerHTML=minute;

document.getElementById("gree").innerHTML=greet;
}
