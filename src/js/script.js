

$(function (){
 'use strict';
 //***************************************//
 /************* Start WOW Library *********/
 //***************************************//
  new WOW().init();
  /***************/
  var fixedheight = $(".brandnotlgxl").height() + $(".navbar").height() + 40;
  $(".wrapper-sidenav").css("paddingTop",fixedheight);
  //***************************************//
  /************* Make Navbar Fixed *********/
  //***************************************//

  if($(window).width() <= 991){
  $(".navbar").css("top" , "78px");
}else {
  $(".navbar").css("top","0");
}
 $(window).scroll(function (){
   if($(this).scrollTop() == '0'){
   $(".navbar-brand").css("padding","20px 45px");
   if($(this).width() <= 991){
   $(".navbar").css("top" , "78px");
 }else {
   $(".navbar").css("top" , "0");
 }
 }else {
   $(".navbar-brand").css("padding","10px 45px");
   $(".navbar").css("top" , "0");
 }
 if($(this).scrollTop() >= '78'){
   $(".navbar").css("top" , "0");
 }
//***************************************//
/************* Show ScrollTop Button *********/
//***************************************//
 if ($(this).scrollTop() >= '1000'){
  $(".scrolltop .arrowfixed").css({
    opacity:"1",
    bottom:"10px"
  });
}else{
  $(".scrolltop .arrowfixed").css({
    opacity:"0",
    bottom:"0"
  });
}

//Make index of sidevan is -1 when scroll to Footer
if($(this).scrollTop() >= ($("footer").offset().top - $(this).height())){
  $("#sidebar").css({"zIndex":"-1" , "transition":"all .01s"});
}else{
  $("#sidebar").css("zIndex","10000")
}

$(".wrapper-sidenav").css("paddingTop",$(".navbar").height());
});
//***************************************//
/************* Show ScrollTop Button *********/
//***************************************//
$(".scrolltop .arrowfixed").click(function(){
  $('body , html').animate({scrollTop : 0});
  $(this).css({
    opacity:"0",
    bottom:"0"
  });
  $(this).siblings().css({
    opacity:"1",
    bottom:"10px"
  });
});
$(".scrolltop .topfixed").click(function(){
  $('body , html').animate({scrollTop : "1000"});
  $(this).css({
    opacity:"0",
    bottom:"0"
  })
});
   //***************************************//
   /************* Close PopUP *********/
   //***************************************//
 $(".box .close").click(function (){
     $(this).parent().parent().fadeOut(300);
     $("body").css("overflow","auto")
 });
 //***************************************//
 /************* Shoose Language and Currency *********/
 //***************************************//
 $(".dropdown-menu h5 .arrow").click(function(){
    $(this).parent().siblings("ul").slideToggle(1000);
 });
  $(".dropdown-menu .choose li").click(function (){
    $(this).parent().siblings("h5").find("._val").html($(this).html());
     $(this).addClass("active").siblings("li").removeClass("active");
  });
 //***************************************//
 /*************Start Bootstrap Popup*********/
 //***************************************//
 $(".boot-modal").click(function (){
    $(this).parent().parent().css("position","static");
 });
 $(".modal .modal-header .close").click(function (){
   $(this).parent().parent().parent().parent().parent().parent().css("position","absolute");
   console.log($(this).parent().parent().parent().parent().parent().parent().parent());
 });
 //***************************************//
 /*************Input Number *********/
 //***************************************//
 $('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-chevron-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-chevron-down"></i></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});
/*********************/
$("#sidebarCollapse").click(function (){
  if($(this).css("left" ,"250px")){
    $(this).parent().siblings().find("#sidebar").css("width","0");
    $(this).css("left","0");
  }
  if($(this).css("left" ,"0")){
  $(this).parent().siblings().find("#sidebar").css("width","250px");
  $(this).css("left","250px");
}
});
});
/************=======

/***********<<<<<<< HEAD ************/
// var slider = new Slider('#ex2', {
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
/* ********>>>>>>> 39a02ae8e2280657067c282fed9ff9ab4abdcdc9 *************/
/* ****************************** tabs
***************************/////////// */

function opencours(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// document.getElementById("defaultOpen").click();



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


//for video player

$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});
