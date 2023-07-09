
$(document).ready(()=>{
   const $home = $("#homepage");
   const $about = $("#aboutpage");
   const $contact = $("#contactpage");


  $home.on("click", ()=>{
    $("html,body").animate({
        scrollTop : $("#home").offset().top
    },2000)
  })
  $about.on("click", ()=>{
    $("html,body").animate({
        scrollTop : $("#about").offset().top
    },2000)
  })
  $contact.on("click", ()=>{
    $("html,body").animate({
        scrollTop : $("#contact").offset().top
    },2000)
  })
})









