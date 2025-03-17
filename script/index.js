function scrollToFAQ() {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
}

function scrollToVocubulary() {
    document.getElementById("vocabulary_section").scrollIntoView({ behavior: "smooth" });
}

function logout() {
    document.getElementById('nav_bar').classList.add("hidden");
    document.getElementById('vocabulary_section').classList.add("hidden")
    document.getElementById('faq').classList.add("hidden");

}

function logIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === '') {
        alert("Please enter your name");
        return;
    }
    if (password !== '123456') {
        alert("Incorrect password");
        return;
    }

    alert("Login successful");
    //     hide the Banner
    //  display the Navbar, Vocabulary Section, and FAQ Section
    document.getElementById("banner").classList.add("hidden");
    document.getElementById("nav_bar").classList.remove("hidden");
    document.getElementById("vocabulary_section").classList.remove("hidden");
    document.getElementById("faq").classList.remove("hidden");
}

function loadLessons() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((infos) => displayLessons(infos.data))
}

function displayLessons(data) {
    const vocabularySection = document.getElementById("vocubolary_button_div");
    for (let dat of data) {
        const lessonDiv = document.createElement('div');
        lessonDiv.innerHTML = `
        <button class=" btn btn-outline btn-primary btn-lesson" id="btn-lesson" onclick="empty(); loadCatagoryWords(${dat.level_no}) ; setActive(this)"  ><img src="./assets/fa-book-open.png" alt="">Lesson-${dat.level_no}</button>
        `;
         
        vocabularySection.appendChild(lessonDiv);
    }
}

function loadAllWords() {
    fetch("https://openapi.programming-hero.com/api/level/1")
        .then(response => response.json())
       // .then(dat => displayAllWords(dat.data))
}

const displayAllWords = (words) => {
    const allWordsContainer = document.getElementById("all-words-container");
    if(words.length == 0){
        const add = document.getElementById('not-selected-lesson-msg');
        console.log(add);
        add.innerHTML=`
        <div class="next-lesson">
                    <div class="flex justify-center">
                        <img   src="./assets/alert-error.png" alt="">
                    </div>
                    <P class="text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</P>
                    <h1 class="text-2xl font-bold">নেক্সট Lesson এ যান</h1>
                </div>
        `
    }
    words.forEach((word) => {
        const wordCard = document.createElement("div");
        wordCard.innerHTML = `
        <div class="h-[250px] bg-white w-[360px] text-center space-y-4 p-6">
                <h1 class="text-3xl font-bold">${word.word}</h1>
                <p>Meaning /Pronounciation</p>
                <h1 class="text-2xl font-bold ">"${word.meaning} / ${word.pronunciation}"</h1>
                <div class="extra-btn flex justify-between">
                    <button onclick="my_modal_1.showModal() ; modal()" class="btn bg-sky-100 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                      </button>
                    <button class="btn bg-sky-100 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                      </svg>
                      </button>
                </div>
             </div>
        `;
        // 
        allWordsContainer.appendChild(wordCard);
    })
    // document.getElementById('all-words-container').classList.add("hidden")
}
function showWordCards() {
    document.getElementById('not-selected-lesson-msg').classList.add("hidden")
    document.getElementById('all-words-container').classList.add("block")
}

function setActive(button) {
    // First, remove the 'active-btn' class from all buttons
    const buttons = document.querySelectorAll('.btn-lesson');
    buttons.forEach((btn) => {
        btn.classList.remove('active-btn');
    });

    // Now, add the 'active-btn' class to the clicked button
    button.classList.add('active-btn');
}

const loadCatagoryWords = (id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllWords(data.data))
}

function empty(){
    document.getElementById('not-selected-lesson-msg').innerHTML=``;
    document.getElementById('all-words-container').innerHTML=``;
}

function modal(words) {
    const details = document.getElementById('modal_box');
    //details.innerHTML = ""; 

    function loadwordsbylevel (){
        fetch('')
    }

    words.forEach((word) => {
        const wordCard = document.createElement("div");
        wordCard.classList.add("bg-white", "shadow-lg", "rounded-lg", "p-6", "w-96");
           console.log(word);
        wordCard.innerHTML = `
            <h2 class="text-2xl font-bold">
                ${word.word} <span class="text-gray-500">${word.meaning} </span>
            </h2>
            <p class="font-bold mt-2">Meaning</p>
            <p class="text-gray-700">আগ্রহী</p>

            <p class="font-bold mt-4">Example</p>
            <p class="text-gray-700">The kids were eager to open their gifts.</p>

            <p class="font-bold mt-4">সমার্থক শব্দ গুলো</p>
            <div class="flex gap-2 mt-2">
                <span class="badge badge-outline">Enthusiastic</span>
                <span class="badge badge-outline">Excited</span>
                <span class="badge badge-outline">Keen</span>
            </div>
        `;

        details.appendChild(wordCard); 
    });
}

loadAllWords();
loadLessons();
displayLessons();