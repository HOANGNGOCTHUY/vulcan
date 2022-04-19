
//comment
var nagis = document.querySelectorAll('.nagi');
var experiences = document.querySelectorAll('.experience-items');

let count = 1;

var manualNav = function (manual){
    experiences.forEach((experience) => {
        experience.classList.remove('change');

        nagis.forEach((nagi) =>{
            nagi.classList.remove('change');
       });
    });
    
    experiences[manual].classList.add('change');
    nagis[manual].classList.add('change');
}

nagis.forEach((nagi,i) => {
    nagi.addEventListener("click",() =>{
         manualNav(i);
         count = i;
    });
});

    //autoplay navigation

    var repeat = function(activeClass){
        let active = document.getElementsByClassName('change');
        let i = 1;

        var repeater = () =>{
            setTimeout(function(){
                [...active].forEach((activeSlide) =>{
                    activeSlide.classList.remove('change');
                });
                experiences[i].classList.add('change');
                nagis[i].classList.add('change');
                    i++;

                    if(experiences.length == i){
                        i =0;
                    }
                    if(i >= experiences.length){
                        return ;
                    }
                    repeater();
                
            },3000);
        }
        repeater();
    }
    repeat();

