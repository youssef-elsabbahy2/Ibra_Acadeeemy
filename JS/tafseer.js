let SurahsContainer = document.querySelector('.surahContainer');
getSurahs();

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

        SurahsTitels.forEach((title,index)=>{

            title.addEventListener('click',()=>{
                title.scrollTo({
                    behavior : "auto"
                });

            fetch(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${index + 1}`)
                .then(response => response.json())
                .then(data=>{
                    AyatContainer.innerHTML = "";
                    let Ayat = data.result;

                    Ayat.forEach(aya=>{
                        
                        popup.classList.add('active');
                        document.body.style.overflow = 'hidden';

                        AyatContainer.innerHTML += `  
                        <div class="container" style=" background-size: cover;  padding: 1em; ">
                            <span style="font-size:26px;    color: wheat;font-family: quran; "><span style="color:#86b7fe">﴿ ${aya.aya} ﴾</span> { ${aya.arabic_text} }  </span>
                           <br><br> <span class="aya-text" style="font-size:20px; margin:20px; color:white"> ${aya.translation}</span>
                            <hr>
                        </div>    
                        `
                    })  
                })
            })
        })  

        let closePopup = document.querySelector('.close-popup');
        closePopup.addEventListener('click',()=>{
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        })   

    })
}    


