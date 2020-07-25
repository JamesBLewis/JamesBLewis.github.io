const mainText = document.getElementsByClassName("magic-text");
const fact = " Say... wanna hear a random fact? ";
const factsHandler = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(4));
    switch (randomNumber) {
        case 0:
            return `\nJeepers what a significant birthday you have! Lot’s of crazy things have happened on June 7th over the years. Henry II was crowned king of Germany. The Americans were victorious at the battle of midway. Most importantly also the same birthday as Iggy Azalea, coincidence?🤔 I think not! 🥳`;
        case 1: 
            return `\nWell did you know that over 30 words rhyme with Paige🤩? I'm gonna tell you some of them. age, cage, gage, gauge, mage, page, rage, sage, stage, swage, wage,assuage, backstage, encage, engage, enrage, incage, offstage, onstage, Osage, restage, uncage, upstage, disengage and... one more for good luck, preengage. 🥱 gosh that was a lot of words! Really makes you appreciate the need to have a website with your name on it to list them all🤣`;
        case 2:
            return `\nHoly crap have you ever looked up your name in the dictionary? 😂 I have, I’m not kidding this is what it says: Paige A girl who is pretty, but doesnt think it. She sometimes lacks in the confidence department and has some rough days. She's funny and smiles a lot. She won't tolerate being called 'hot' or 'sexy' by a boy. A guy who says that doesn't have a chance. She has loads of friends and has her sassy moments. She loves music and can't dance, but does anyway. Paige has been through a lot and hates when people are negative towards her. She's amazing, but doesnt know it. Get to know her and she'll be less awkward.`;
        case 3:
            return `\nPaige you are such a bubbly awesome person. This isn’t even a ‘random fact’ I just love and apricate you and just how easy you are to talk too. You are such a chill lovely friend, I just wanted to share some love🥰.`;
        }
}

var currentSentenceEnd = 0;
const startPrint = ( target, text, speed) => {
    text += fact;
    var printText = () => {
        target.innerHTML += text[0];
        window.scrollTo(0,document.body.scrollHeight);
        text = text.substring(1);
        if (text.length < 1) {
            clearInterval(timer);
            currentSentenceEnd = target.innerHTML.length;
        }
    };
    const timer=setInterval(printText, speed)
};

const DisplaycrazyText  = (text, speed, target, factsHandler) => {
    target.addEventListener("input", function() {
        console.log(currentSentenceEnd);
        if (["ok", "plz", "ye", "more"].some(function(substring) { 
            return target.innerHTML
            .substring(currentSentenceEnd - 1)
            .indexOf(substring) >= 0; })) {
            // she said yes :)
            displayedText = `. Ha! I was hoping you'd say yes 😅.${factsHandler()}`;
            startPrint(target, displayedText, 70);
        }
    }, false);
    startPrint(target, text, 60);
};

var StringdetectionZone = 0;

DisplaycrazyText("Hey Paige, Just want you to know that you're the best!", 60, mainText[0], factsHandler);