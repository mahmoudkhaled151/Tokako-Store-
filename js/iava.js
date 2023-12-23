let x= $("#new-car").offset().top;
$("#navb").css("backgroundColor","rgba(0,0,0,0.7)");
$(window).scroll(function () { 
    let ws= $(window).scrollTop();
    if (ws>=x-100)
    {
        $("#navb").css("backgroundColor","rgba(0,0,0,0.7)");
        $("#bt").fadeIn(100);
        
    }
    else
    {
        $("#navb").css("backgroundColor","transparent");
        $("#bt").fadeOut(100);
    }

});
$("#bt").click(function () { 
    
    $("body , html").animate({scrollTop :'0'} ,100);
});

$("a").click(function () { 
    let yu=$(this).attr("href");
    let z= $(yu).offset().top;
    $("body , html").animate({scrollTop :z} , 100 )
    console.log(z);
});
let arr=document.getElementsByClassName("choose");
let arr1=document.getElementsByClassName("choice");
let choo=0;
arr[0].style.color="red";
        arr1[0].style.display="inline";
for(let i=0; i<arr.length; i++) {
        arr[i].addEventListener("click", function(e) {
        choo=i
        arr[i].style.color="red";
        arr1[i].style.display="inline";
        for(var j=0; j<arr.length; j++) {
            if(choo !=j) {
                arr[j].style.color="black";
                arr1[j].style.display="none";
               
        }
        else
        {
           continue;
        }
    }
    });
}
   

let coloritem=$(".colori");
coloritem.eq(0).css("backgroundColor" , "red");
coloritem.eq(1).css("backgroundColor" , "green");
coloritem.eq(2).css("backgroundColor" , "blue");
coloritem.eq(3).css("backgroundColor" , "black");
coloritem.eq(4).css("backgroundColor" , "white");
coloritem.click(function () { 
    let y=$(this).css("backgroundColor");
    $("body , html").css("color" , y)
});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
let yy= $(".box-color").css("width");
$("#opt").css("left" ,`-`+yy+`` );
$(".fa-gear").click(function () {
    //$(".box-color").toggle(1000);
    let y= $(".box-color").css("width");
    if($("#opt").css("left")=="0px")
    {
        $("#opt").animate({left :`-`+yy+``} , 1000);
    }
    else
    { 
        $("#opt").animate({left :"0px"} , 1000);
        
    }
    //console.log($(".box-color").css("width"));
});

/*let im=window.localStorage.getItem("image");
$("header").css("background-image" ,`url(`+im+`)`);*/
$(document).ready (function(){
    $("#loading").fadeOut(2000);
   // $("body ").css("overflow" , "auto");
});