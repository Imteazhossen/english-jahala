function scrollToFAQ() {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
}

function scrollToVocubulary() {
    document.getElementById("vocabulary_section").scrollIntoView({ behavior: "smooth" });
}

function logout(){
     document.getElementById('nav_bar').classList.add("hidden");
     document.getElementById('vocabulary_section').classList.add("hidden")
     document.getElementById('faq').classList.add("hidden");

} 