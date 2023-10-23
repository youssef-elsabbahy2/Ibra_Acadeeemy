var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            this.classList.remove("active");
            content.style.maxHeight = null;
        } else {
            this.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}


// var closeAccordion = (accordion) => {
// 	var content = accordion.querySelector(".item__answer");
// 	accordion.classList.remove("open");
// 	content.style.maxHeight = null;
// };


// Accordin
var accordion = document.getElementsByClassName('item__content');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
        remove.classList.toggle('active')
    })
}

const links = document.querySelectorAll(".scroll-to");
links.forEach((item)=>{
    item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    })
})

// var plus = document.getElementsByClassName('fa-plus');
// var dash = document.getElementsByClassName('fa-minus');

// function myFunction() {
//     coll.addEventListener('click', () => {
//         minus.style.display = 'block';
//         plus.style.display = 'none';
//     });

//     // rest.addEventListener('click', () => {
//     //     success.style.display = 'none';
//     // });
// }




// Scroll to anchor ID using scrollTO event
const scrollSmoothly = () => {
    document.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('item__content'))
            return;
        e.preventDefault();
        const targetClass = target.hash;
        document.querySelector(targetClass).scrollIntoView({
            inline: 'nearest',
            block: 'start',
            behavior: 'smooth',
        });
    });
};
// Scroll to section on link click
scrollSmoothly();



function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // Audio
    var audio = document.getElementById("song");
    audio.play();

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


// let docTitle = document.title;

// window.addEventListener("focus", () => {
//     document.title = docTitle;
// })

// window.addEventListener("blur", () => {
//     document.title = "Come Back ♡";
// })

 // Prayer Function
 function getPrayTime()
 {
 fetch("https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8")
 .then(response => response.json())
 .then(data => {

     let times = data.data.timings;
 
     // Calculating time according to the 12-hour system
     const prayersTimes = {
         الفجر: new Date(`01/01/2000 ${times.Fajr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
         الشروق: new Date(`01/01/2000 ${times.Sunrise}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
         الظهر: new Date(`01/01/2000 ${times.Dhuhr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
         العصر: new Date(`01/01/2000 ${times.Asr}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
         المغرب: new Date(`01/01/2000 ${times.Maghrib}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
         العشاء: new Date(`01/01/2000 ${times.Isha}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
     };
 
     cards.innerHTML = '';
     
     for (let time in prayersTimes)
     {
         cards.innerHTML+= `
             <div class="card">
                 <div class="circle">
                     <svg>
                         <Circle cx="100" cy="100" r="100"></Circle>
                     </svg>
                     <div class="prayTime">${prayersTimes[time]}</div>
                 </div>
                 <p>${time}</p>
             </div>
         `;
     }
 })
}    


















