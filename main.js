const dynamicContent = document.getElementById("dynamic-text");
const phrases = ["Frontend Developer...", "Human Being..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printLetters(phrase) {

    if (letterIndex == phrase.length){
        clearLetters();
    }

    else if (letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;

        setTimeout(function(){
            printLetters(phrase)
        }, typingSpeed)
    }
}

function clearLetters() {
    if (letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if (letterIndex > -1) {
        let updatedPhrase = "";
        for (let index=0; index < letterIndex; index++) {
            updatedPhrase += phrases[phraseIndex].charAt(index);

        }
        dynamicContent.textContent = updatedPhrase;
        letterIndex -= 1;
        setTimeout(clearLetters, erasingSpeed)

    }
}

printLetters(phrases[phraseIndex]);

window.addEventListener("scroll", function() {
    let intro = this.document.querySelector(".intro");
    if(this.window.scrollY >= (intro.offsetHeight + intro.offsetTop)) {
        this.document.querySelector(".header").style.position = "sticky";
    } else {
        this.document.querySelector(".header").style.position = "revert";
    }
})