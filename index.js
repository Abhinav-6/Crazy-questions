const questions = [`Why can’t you just feel whelmed instead of overwhelmed and underwhelmed?`,
    `If you have described something as indescribable, haven’t you already described it?`,
    `Why is it called “beauty sleep” even though you wake up looking like a hot mess?`,
    `If anything is possible, it’s still possible for anything to be impossible?`,
    `Do fish have a thirst for water?`, ` If man developed from monkeys, why do we still have monkeys?`,
    `Is it permissible for minors who act in R-rated films to see them?`,
    ` Is it possible that morality is derived from morons, just as electricity is derived from electrons?`,
    `Is your time truly wasted if you enjoy wasting it?`, ` Would it be acceptable to say that the opposite of progress is congress because the opposite of pro is con?`, `If 21 is pronounced as Twenty one then why 11 is not pronounced as Onety one?`, `Do bald people still get dandruff?`, `Do bald people still get dandruff?`,
    `Why does the sun make our hair lighter but make our skin darker?`,
    `Do you think coffins have lifetime guarantees?`, `Why are we so terrified of making mistakes if we can learn from them and improve?`, `Why are we so terrified of making mistakes if we can learn from them and improve?`,
    `If you’ll be expecting the unexpected, doesn’t that make the unexpected expected?`,
    `Did you fail or succeed if you were trying to fail and you succeeded?`,
    ` If everyone says that life is totally unfair, doesn’t that just mean that life is fair?`,
    `Is there a synonym for synonym?`, `When you hate a hater doesn't it make you also a hater?`,
    `Why is hippopotomonstrosesquippedaliophobia such a long term if it means “a fear of long words?`,
    `why is it called Building when it is actually built?`,
    `Who is right if two left-handed people had an argument?`,
    `What makes a question a question?`, `Which letter is silent in the word “scent”: S or C?`,
    `Why are deliveries on a ship called cargo But in a car it's called shipment?`, `If one teacher cannot teach all subjects Why is one child expected to study all subjects?`, `Are Orange's named orange because orange's are orange Or is orange named orange because orange's are orange?`, `Dude the youngest picture of you is also the oldest picture of you?`, `Bro Ever realise that human's cut down birdhouse's To make more Birdhouse's?`,
    `If two mind reader's ar reading each other's mind Who's mind are they reading?`,
    `If tomb is pronounced toom, and womb is pronounced woom Why isn't bomb pronounced boom?`, `Dude Ice cubes floats in a pool of their own blood?`, `Bruh Which Orange came first The color or the Fruit?`,
    `If you get out of the shower clean How does your towel get dirty?`, `If apple made a car Would it still have windows??`, `Surgery is hurting someone to make them heal faster?`, `The voice in our head never need to take a breath?`, `You can always see your nose but your brain ignores it?`, `All mirrors are actually used?`, `Baby products never gets fair review's by the user?`, `Scissors only come together to Divide?`, `Why blinks of your eye's get removed from your memeory?`, `People who need Glasses just got bad graphics?`, `Dora the Explorer and Internet explorer takes same amount of time to process simple information?`, `Being ugly is just playing life on hard mode.`, `Why do we have to pretend to sleep to fall a sleep?`,
                   `Is your burp's are just your puke's farts?`,
    `Clapping is just hitting yourself repeatedly because you like something?`, `When you clean a vacuum cleaaner Aren't you the vacuum cleaner?`, `Lightbulbs were such a good idea they became the symbol of a good idea`, `When you say forward's or back your lips move in that directon`, `Why is there a "D" in a Fridge but not in a Refrigerator?`, `You technically have two miutes to live but everytime you breathe it restart the timer.`, `Taxes are just a yearly subscripton to the country you live in..`,
                   `Bro.. Your eraser slowely die's because of your mistakes..`,
                  `When you wait for the waiter, aren't you the waiter?`,
                  `Nothing is on fire, fire is on things.`,
                  `The last kid to leave the school bus knows where everybody lives.`];

sessionStorage.clear();

let length = questions.length;

let btn = document.querySelector(".btn");
let box = document.querySelector(".text");
console.log(box.innerText);
btn.addEventListener('click', function () {
    text();
});

let i = 0;
function text() {
    let random = Math.floor(Math.random() * length);
if(i===length-1){
    sessionStorage.clear();
    i=0;
}
    if (sessionStorage.getItem(random) === null) {
        box.innerText = questions[random];
        sessionStorage.setItem(random, questions[random]);
        i++;
    } else (text());
}



