var imgs = Array.from( document.querySelectorAll(".item img"));
// console.log(imgs);
var LightBoxContainer = document.getElementById("LightBoxContainer");
var LightBoxItem = document.getElementById("LightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var currentIndex = 0;

 for( var i=0;i<imgs.length;i++)
 {
     imgs[i].addEventListener("click",function(eventInfo)
     {
         LightBoxContainer.style.display="flex";
        var ImgSrc = eventInfo.target.getAttribute("src");
        LightBoxItem.style.backgroundImage="url("+ImgSrc+")";
        currentIndex = imgs.indexOf(eventInfo.target);
        // console.log(currentIndex);

     }
     )
 }
 function nextSlide()
 {  
    
     currentIndex++;
    //  console.log(currentIndex);
     if(currentIndex==imgs.length)
     {
         currentIndex=0;
     }
     var ImgSrc = imgs[currentIndex].getAttribute("src");
     LightBoxItem.style.backgroundImage="url("+ImgSrc+")";
 }
 nextBtn.addEventListener("click",nextSlide);

 function prevSlide()
 {  
     currentIndex--;
     
     if(currentIndex<0)
     {
         currentIndex =imgs.length -1;
     }
    // console.log(currentIndex);
     var ImgSrc = imgs[currentIndex].getAttribute("src");
     LightBoxItem.style.backgroundImage="url("+ImgSrc+")";
 }


 prevBtn.addEventListener("click",prevSlide);
 
 