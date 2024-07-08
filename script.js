 let search_btn = document.querySelector("#search_btn");
 let search_bar = document.querySelector(".search_bar_container");
 let form_btn = document.querySelector("#login_btn");
 let login_form = document.querySelector(".login_form_container");
 let form_close = document.querySelector("#form_close");
 let menu= document.querySelector("#menu_bar");
 let navbar= document.querySelector(".navbar");
 
 let video_btn= document.querySelectorAll(".vid_btn");


window.onscroll = () =>{
   search_btn.classList.remove('fa-times'); 
   search_bar.classList.remove('active'); 
   menu.classList.remove('fa-times'); 
   navbar.classList.remove('active');
   login_form.classList.remove('active');  
}

menu.addEventListener('click',()=>{
   menu.classList.toggle('fa-times'); 
   navbar.classList.toggle('active');  
});

search_btn.addEventListener('click',()=>{
    search_btn.classList.toggle('fa-times'); 
    search_bar.classList.toggle('active');  
 });

form_btn.addEventListener('click',()=>{
   login_form.classList.add('active');  
});

form_close.addEventListener('click',()=>{
   login_form.classList.remove('active');  
});


video_btn.forEach(btn => {
   btn.addEventListener('click',()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data_src');
      document.querySelector('#video_slider').src=src;
   });
});

var swiper = new Swiper(".review_slider", {
   spaceBetween: 20,
   loop:true,
   autoPlay:{
      delay:2500,
      disableOnInteraction:false,
   },
   breakpoints:{
      640:{
         slidesPerView:1,
      },
      768:{
         slidesPerView:2,
      },
      1024:{
         slidesPerView:3,
      },
   },
   
});

var swiper = new Swiper(".brand_slider", {
   spaceBetween: 20,
   loop:true,
   autoPlay:{
      delay:2500,
      disableOnInteraction:false,
   },
   breakpoints:{
      450:{
         slidesPerView:2,
      },
      768:{
         slidesPerView:3,
      },
      991:{
         slidesPerView:4,
      },
      1024:{
         slidesPerView:5,
      },
   },
   
});