import {base} from './index.js';
import {search} from './se.js';

let searchObj=new search();
let b=new base("https://api.themoviedb.org/3/movie/now_playing?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false")
let a=new base("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
let c=new base("https://api.themoviedb.org/3/movie/popular?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false")
let d=new base("https://api.themoviedb.org/3/movie/top_rated?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false")
let O=new base("https://api.themoviedb.org/3/movie/upcoming?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false")


b.getDetailsApi()

$('#trending').on('click',function(e) {
  
    document.getElementById("row").innerHTML = "";
    
    a.getDetailsApi()

})
$('.popular').on('click',function(e) {
  
  document.getElementById("row").innerHTML = "";
  
  c.getDetailsApi()

})
$('.TopRated').on('click',function(e) {
  
  document.getElementById("row").innerHTML = "";
  
  d.getDetailsApi()

})
$('.Upcoming').on('click',function(e) {
  
  document.getElementById("row").innerHTML = "";
  
  O.getDetailsApi()

})


$('.playing').on('click',function(e) {
  
  document.getElementById("row").innerHTML = "";
  
  b.getDetailsApi()

})

$('.nav-item').on('click', function(e) {
  
  var targetOffset = $("#Contact").offset().top;
  
  
  $('html, body').animate({ scrollTop: targetOffset }, 5000);
});








$("#search").on("input", function(e){
    document.getElementById("row").innerHTML = "";
    console.log(this.value);
    if (this.value==""){
        b.getDetailsApi()
    }else{
        

      searchObj.searchApi(this.value)
    }


})



/// in object const {top:nab}={top,left} => console.log(nab)
$('#navtop')
            .on("click", function () {   $('html,body')
                                                       .animate({scrollTop:"0"},300)})// smooth scroll





// if you want ot add icon  makes scroll to position top 0
// $('.nav-item').on('click',function(e){
//     console.log(e.target)
//     const anchorActive=$(e.target).closest('a');
//     console.log(anchorActive)
// })

const widthNav=$('.contactSide').outerWidth(true); 
  console.log(widthNav)
$('#sideNav').animate({left: -widthNav},0)

// let open = false;
let  open=false;//

$('#btn-hamburger').on('click',function(){

  
  
    let test;
    if (!open) {
        test=0
        open=true; $('li').animate({opacity:1,padding:"25px"},1000)
       
  }else{
    test = -widthNav
    open=false;
   $('li').animate({opacity:0,paddingTop:"20rem"},1000)         
    
  
  }
  
  // width to margin
  console.log(widthNav)
    $("#sideNav").animate({
    left:test

  },1000)

});
var $menuBtn = document.getElementById('btn-hamburger');

$menuBtn.onclick = function(e)

{

  animatedMenu(this);    
  

 
};
function animatedMenu(x) 
{
    x.classList.toggle("animeOpenClose");
}