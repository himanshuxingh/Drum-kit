document.querySelectorAll("button");
// document.querySelectorAll("button")[0].addEventListener("click",handleclick);
// document.querySelectorAll("button")[1].addEventListener("click",handleclick);
// document.querySelectorAll("button")[2].addEventListener("click",handleclick);
// document.querySelectorAll("button")[3].addEventListener("click",handleclick);
// document.querySelectorAll("button")[4].addEventListener("click",handleclick);
// document.querySelectorAll("button")[5].addEventListener("click",handleclick);
// document.querySelectorAll("button")[6].addEventListener("click",handleclick);

var no_of_buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var sound_no=Math.floor(Math.random()*6)+1;
     var audio=new Audio("sounds/"+sound_no+".mp3");
     audio.play();
    //console.log(this.innerHTML); op-->button
    console.log(this.style.color="darkblue");
})}
/* function Audio(fileLocation){
    this.FileLocation=fileLocation;
    this.play()=function(){
        // code here.. 
    }
}*/
document.addEventListener("keypress",function(event){
    console.log(event);
})