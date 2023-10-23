
let select = document.querySelector("select");
select.onchange = function () {
    let x = select.value;


    function getSurahs() {
        fetch("https://api.alquran.cloud/v1/meta")
    
        .then(response => response.json())
    
        .then(data => {
            let surahs = data.data.surahs.references;
            let numberOfSurahs = 114;
    
            SurahsContainer.innerHTML = "";
            for (let i = 0; i < numberOfSurahs; i++) {
    
                SurahsContainer.innerHTML += `
                    <div class="surah">
                        <p>${surahs[i].name}</p>
                        <p>${surahs[i].englishName}</p>
                    </div>
                `
    
            }
    
            let SurahsTitels = document.querySelectorAll('.surah');
            let popup = document.querySelector('.surah-popup');
            let AyatContainer = document.querySelector('.ayat');
            let displayedSurah = null;
    
            SurahsTitels.forEach((title, index) => {
    
                title.addEventListener('click', () => {
                    title.scrollTo({
                        behavior: 'smooth',
                    });
    
    
    
                    fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                        .then(response => response.json())
                        .then(data => {
                            AyatContainer.innerHTML = '';
                            let Ayat = data.data.ayahs;
                            let AyatName = data.data;
              
    
    
    
    
    
                        AyatContainer.innerHTML += `
                        <nav class="ayat-name">
                        <h1 class="surahName">${AyatName.name}</h1>
                    
                        <h1 class="surahNum"> عدد الأيات : <span class="surah-num" style="color:wheat;;font-family: quran;">( ${AyatName.numberOfAyahs} )</span></h1>
                       <br> <div class="audio " id="demo" >
                            <audio style="display:none;width: 100%;"  id="quranplay" class="ayah-audio" controls>
                            <source  src="https://download.quranicaudio.com/qdc/${x}/murattal/${AyatName.number}.mp3" type="audio/mp3">
                            </audio>
                           
                        </div>
                        <div style="justify-content: space-between;" class="fixed d-flex ">
                   
                        <button style="z-index:9999;    font-size: 25px;
                        font-family: 'Tajawal';
                        font-weight: bolder;    width: 50%; " class="btn btncolor rounded-5 btncolor m-1  " onclick="myFunction2()">تشغيل </button>
                      
         
         
                        <button style="z-index:9999;    font-size: 25px;
                        font-family: 'Tajawal';
                        font-weight: bolder;    width: 50%;  " class="btn btncolor-2 rounded-5 btncolor m-1  stopbtn_quran" onclick="myFunction3()">ايقاف </button>
                        </div>
                   </nav>
                        <br>
                        `;
    
                        let allAyatText = "";
    
                        Ayat.forEach(aya => {
                            allAyatText += `
                            <span class="aya-text" style="font-family: quran;">${aya.text}</span>
                            <span class="label" style="font-size:24px;color:wheat;;font-family: quran; ">﴿${aya.numberInSurah}﴾</span>`;
                       
                        });
                        popup.classList.add('active');
                        document.body.style.overflow = 'hidden';
    
                        AyatContainer.innerHTML += `
                            <section class="all ">
                                <div id="ayats">
                                    ${allAyatText}
                                </div>
                            </section>
                            <br>
                        `; 
    
                    });
        
    
            });
    
        });
    
        let closePopup = document.querySelector('.close-popup');
        closePopup.addEventListener('click', () => {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        })
    
        });
    }
     console.log(x)
     let SurahsContainer = document.querySelector('.surahContainer');
getSurahs();
}




function getSurahs() {
    fetch("https://api.alquran.cloud/v1/meta")

    .then(response => response.json())

    .then(data => {
        let surahs = data.data.surahs.references;
        let numberOfSurahs = 114;

        SurahsContainer.innerHTML = "";
        for (let i = 0; i < numberOfSurahs; i++) {

            SurahsContainer.innerHTML += `
                <div class="surah">
                    <p>${surahs[i].name}</p>
                    <p>${surahs[i].englishName}</p>
                </div>
            `

        }

        let SurahsTitels = document.querySelectorAll('.surah');
        let popup = document.querySelector('.surah-popup');
        let AyatContainer = document.querySelector('.ayat');
        let displayedSurah = null;

        SurahsTitels.forEach((title, index) => {

            title.addEventListener('click', () => {
                title.scrollTo({
                    behavior: 'smooth',
                });



                fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                    .then(response => response.json())
                    .then(data => {
                        AyatContainer.innerHTML = '';
                        let Ayat = data.data.ayahs;
                        let AyatName = data.data;
          





                    AyatContainer.innerHTML += `
                    <nav class="ayat-name">
                        <h1 class="surahName">${AyatName.name}</h1>
                    
                        <h1 class="surahNum"> عدد الأيات : <span class="surah-num" style="color:wheat;;font-family: quran;">( ${AyatName.numberOfAyahs} )</span></h1>
                       <br> <div class="audio " id="demo" >
                            <audio style="display:none;width: 100%;"  id="quranplay" class="ayah-audio" controls>
                            <source  src="https://download.quranicaudio.com/qdc/abdul_baset/murattal/${AyatName.number}.mp3" type="audio/mp3">
                            </audio>
                           
                        </div>
                        <div style="justify-content: space-between;" class="fixed d-flex ">
                   
                        <button style="z-index:9999;    font-size: 25px;
                        font-family: 'Tajawal';
                        font-weight: bolder;    width: 50%; " class="btn btncolor rounded-5 btncolor m-1  " onclick="myFunction2()">تشغيل </button>
                      
         
         
                        <button style="z-index:9999;    font-size: 25px;
                        font-family: 'Tajawal';
                        font-weight: bolder;    width: 50%;  " class="btn btncolor-2 rounded-5 btncolor m-1  stopbtn_quran" onclick="myFunction3()">ايقاف </button>
                        </div>
                   </nav>
                    <br>
                    `;

                    let allAyatText = "";

                    Ayat.forEach(aya => {
                        allAyatText += `
                        <span class="aya-text" style="font-family: quran;">${aya.text}</span>
                        <span class="label" style="font-size:24px;color:wheat;;font-family: quran; ">﴿${aya.numberInSurah}﴾</span>`;
                   
                    });
                    popup.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    AyatContainer.innerHTML += `
                        <section class="all ">
                            <div id="ayats">
                                ${allAyatText}
                            </div>
                        </section>
                        <br>
                    `; 

                });
    

        });

    });

    let closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    })

    });
}
 let SurahsContainer = document.querySelector('.surahContainer');
getSurahs();



function myFunction2() {
  // Audio
  var quran = document.getElementById("quranplay");
  quran.play();
  document.getElementById('demo').style.display='block';
  var audio_acsses = document.querySelector(".ayah-audio");
  let audio_get = audio_acsses.getAttribute("style");
  audio_acsses.setAttribute("style","display: ; width: 100%;");
  console.log(audio_acsses)



}


function myFunction3() {
    // Audio
    var quran = document.getElementById("quranplay");
    var quran2 = document.getElementsByClassName("close-popup");
    quran.pause();
    quran2.pause();
    document.getElementById('demo').style.display='none';
    document.getElementById('demo').style.display='none';

  }



















// ************************************************************************************

// ***********  Audio ********************


// let SurahsContainer = document.querySelector('.surahContainer');
// getSurahs();

// function getSurahs() {
//   fetch("https://api.alquran.cloud/v1/meta")
//     .then(response => response.json())
//     .then(data => {
//       let surahs = data.data.surahs.references;
//       let numberOfSurahs = 114;
//       SurahsContainer.innerHTML = "";
//       for (let i = 0; i < numberOfSurahs; i++) {

//         SurahsContainer.innerHTML += `
//         <div class="surah">
//           <p>${surahs[i].name}</p>
//           <p>${surahs[i].englishName}</p>
//         </div>
//         `

//       }
//       let SurahsTitels = document.querySelectorAll('.surah');
//       let popup = document.querySelector('.surah-popup');
//       let AyatContainer = document.querySelector('.ayat');
//       let displayedSurah = null;

//       SurahsTitels.forEach((title, index) => {
//         title.addEventListener('click', () => {
//           title.scrollTo({
//             behavior: 'smooth',
//           });

//           if (displayedSurah !== title) {
//             fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
//               .then(response => response.json())
//               .then(data => {
//                 AyatContainer.innerHTML = '';
//                 let Ayat = data.data.ayahs;
//                 let AyatName = data.data;

//                 // عرض اسم السورة قبل عرض الآيات
//                 AyatContainer.innerHTML += `
//                 <div class="ayat-name">
//                   <h1 class="surahName">${AyatName.name}</h1>
//                   <h1 class="surahNum"> عدد الأيات : <span class="surah-num">( ${AyatName.numberOfAyahs} )</span></h1>
//                 </div>
//                 <br>
//                 `;

//                 Ayat.forEach(aya => {
//                   popup.classList.add('active');
//                   AyatContainer.innerHTML += `
//                   <div id="ayats">
//                     <span style="font-size:20px;color:#247429;font-family: quran; "> ﴿ ${aya.numberInSurah} ﴾</span>
//                     <span style="font-size:24px; margin:8px;font-family: quran;">${aya.text} .</span>
//                     <audio id="ayah-audio" controls>
//                       <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/${aya.number}" type="audio/mp3">
//                       Your browser does not support the audio element.
//                     </audio>
//                   </div>
//                   <br>
//                   `;
//                 });
//               });

//             displayedSurah = title;
//           }
//         });
//       });
//       let closePopup = document.querySelector('.close-popup');
//       closePopup.addEventListener('click', () => {
//         popup.classList.remove('active');
//       })
//     });
// }


// *******************  علشان اعرض الايات جنب بعضها  ***************


// let allAyatText = ""; // سلسلة نصية لتخزين جميع الآيات

// Ayat.forEach(aya => {
//     allAyatText += `<span style="font-size:20px;color:#247429;font-family: quran; "> ﴿ ${aya.numberInSurah} ﴾</span>
//     <span style="font-size:24px; margin:8px;font-family: quran;">${aya.text} .</span>`;
// });
// popup.classList.add('active');
// // إضافة النصوص إلى العنصر الأم
// AyatContainer.innerHTML += `
//     <section class="all">
//         <div id="ayats">
//             ${allAyatText}
//         </div>
//     </section>
//     <br>
// `; 