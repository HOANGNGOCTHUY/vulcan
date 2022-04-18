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


