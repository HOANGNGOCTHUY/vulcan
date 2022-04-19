//Slider
    var btns = document.querySelectorAll('.btn');
    var sliders = document.querySelectorAll('.slider-item');

    let currentSlide = 1;

    var manualNav = function (manual){
        sliders.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) =>{
                btn.classList.remove('active');
           });
        });
        
        sliders[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn,i) => {
        btn.addEventListener("click",() =>{
             manualNav(i);
             currentSlide = i;
        });
    });

    //autoplay navigation

    var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () =>{
            setTimeout(function(){
                [...active].forEach((activeSlide) =>{
                    activeSlide.classList.remove('active');
                });
                    sliders[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;

                    if(sliders.length == i){
                        i =0;
                    }
                    if(i >= sliders.length){
                        return ;
                    }
                    repeater();
                
            },3000);
        }
        repeater();
    }
    repeat();


    // 360 độ
    $(document).ready(function(){
        //Load the image URLs into an Array.
               var arr = new Array();
               $("#dvImages img").each(function () {
                   arr.push($(this).attr("src"));
               });
   
               //Set the first image URL as source for the Product.
               $("#product").attr("src", arr[0]);
   
               // //Click mode.
               // $("#product1").threesixty({ images: arr,
               //     method: 'click',
               //     sensibility: 1
               // });
   
               //MouseMove mode.
               $("#product").threesixty({ images: arr,
                   method: 'mousemove',
                   sensibility: 1
               });
   
               //Automatic mode.
            //    $("#product").threesixty({ images: arr,
            //        method: 'auto',
            //        direction: 'forward',
            //        autoscrollspeed: 1000
            //    });
               setTimeout(function(){ 
               $(".progressBg").hide();
               $(".overlay").hide();
                 }, 3000);
       
       
       })
