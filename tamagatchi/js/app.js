// fix bug with death alert

// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!



// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
class Tamagatchi {
    constructor(name) {
        name = this.name;
    }
    hunger = 0;
    sleepiness = 0;
    boredom = 0;
    age = 0;
}

// Instatiate your Tomagotchi
let tamagatchi = new Tamagatchi(); //put input info, once retrieved and working

// simplify variable names
let hunger = tamagatchi.hunger;
let sleepiness = tamagatchi.sleepiness;
let boredom = tamagatchi.boredom;
let age = tamagatchi.age;

// Morph your pet at certain ages.
class Berserk extends Tamagatchi {
    constructor(name, beserk){
        super(name);
        this.beserk = beserk;
    }
    // berserk button that changes tamagotchi's color, background too?
    berserkMode() {
        // beserkPerksPopup();
        berserkStatIncrease();
        berserkDeathCheck();
        $('.grid-container').css('background', 'url(Images/background-berserk.jpg)');
        $('.item5').empty();
        $('#walking').remove();
        berserkFeedButton();
        berserkSleepButton();
        berserkPlayButton();
        makeBerserkImg();
    }
}
const berserkTama = new Berserk('name', 'berserkMode');

let timePassing;
let seconds = 0;

// INCREASE AGE TIME FOR ACTUAL PLAY
const tamagatchiStatIncrease = () => {
        // Increase your pet's age every x minutes (5 seconds)
        if (seconds % 3 === 0){
            age++;
            $('.age').text('AGE: ' + age);
        }
    
        // Increase your pet's Hunger
        if (seconds % 3 === 0){
            hunger++;
            $('.hunger').text('HUNGER: ' + hunger);
        }
    
        // Increase pet's Sleepiness 
        if (seconds % 5 === 0){
            sleepiness++;
            $('.sleepiness').text('SLEEPINESS: ' + sleepiness)
        }
    
        // Increase pet's Bored metrics
        if (seconds % 4 === 0){
            boredom++;
            $('.boredom').text('BOREDOM: ' + boredom)
        }
}

const berserkStatIncrease = () => {
    // Increase your pet's age every x minutes (5 seconds)
    if (seconds % 3 === 0){
        age++;
        $('.age').text('AGE: ' + age);
    }
    
    // Increase your pet's Hunger
    if (seconds % 2 === 0){
        hunger++;
        $('.hunger').text('HUNGER: ' + hunger);
    }
    
    // Increase pet's Sleepiness 
    if (seconds % 3 === 0){
        sleepiness++;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness)
    }
    
    // Increase pet's Bored metrics
    if (seconds % 2 === 0){
        boredom++;
        $('.boredom').text('BOREDOM: ' + boredom)
    }
}

const secondsGoUp = () => {
    seconds++;
    console.log(seconds);

    if (age < 10) {
        tamagatchiStatIncrease();
        tamagatchiDeathCheck();    
    } else {
        berserkTama.berserkMode();
    }
}

// DON'T FORGET TO SLOW GAME DOWN 
const startGame = () => {
    $('.item3').append('<button id="start">PLAY</button>');
    // sets up seconds
    $('#start').click(function(){
        timePassing = setInterval(secondsGoUp, 1000);
        $('#popup').remove();
    })
    }
    
const pauseGame = () => {
    $('.item3').append('<button id="stop">PAUSE</button>');
    //stops timer
    $('#stop').click(function(){
        clearInterval(timePassing);
    })
}

const createStatDivs = () => {
    // Age
    $('.item1').append('<div class="age">AGE: </div>');
    
    // Hunger
    $('.item1').append('<div class="hunger">HUNGER: </div>');
    
    // Sleepiness
    $('.item1').append('<div class="sleepiness">SLEEPINESS: </div>');
    
    // Bored
    $('.item1').append('<div class="boredom">BOREDOM: </div>');
    
    }  
    
const makeTamaImg = () => {
    $('.item4').append('<img id="walking" src="Images/walking.gif">');
    $('#walking').animate({
        left: '+=600',
    });
}

const makeBerserkImg = () => {
    if (age === 10 && age < 10.0001){
        $('.item4').empty();
        $('.item4').append('<img style="align: center" id="morph" src="Images/morph.gif">');
    }
}

const namePet = () => {
    $('.item2').prepend('<h1 id="title">CHUBBY BUNNY</h1>');
    $('.item2').append('<img id="home" src="Images/home.gif">');
    $('form').on('submit', (e) => {
        e.preventDefault();
        const inputValue = $('#input-name').val();
        name = inputValue;
        $('.item3').append(`<div class="name-line">${name}</div>`);
        $('form').remove();
        $('#home').remove();
        $('#title').remove();
        createStatDivs();
        startGame();
        pauseGame();
        feedButton()
        sleepButton()
        playButton();
        makeTamaImg();
    })
    }
namePet()

const feedButton = () => {
    $('.item5').append('<button id="feed-btn">FEED</button>');
            $('#feed-btn').click(function(){
            hunger--;
            $('.hunger').text('HUNGER: ' + hunger);
            })
}

const berserkFeedButton = () => {
    $('.item5').append('<button id="feed-btn">FEED LIFE FORCES</button>');
        $('#feed-btn').click(function(){
        hunger--;
        $('.hunger').text('HUNGER: ' + hunger);
    })
}

const sleepButton = () => {
    $('.item5').append('<button id="sleep-btn">SLEEP</button>');
    $('#sleep-btn').click(function(){
        sleepiness--;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness);
    })
}

const berserkSleepButton = () => {
    $('.item5').append('<button id="sleep-btn">ZOMBIFY</button>');
    $('#sleep-btn').click(function(){
        sleepiness--;
        $('.sleepiness').text('SLEEPINESS: ' + sleepiness);
    })
}

const playButton = () => {
    $('.item5').append('<button id="play-btn">PLAY</button>');
    $('#play-btn').click(function(){
        boredom--;
        $('.boredom').text('BOREDOM: ' + boredom);
    })
}

const berserkPlayButton = () => {
    $('.item5').append('<button id="play-btn">CAUSE CHAOS</button>');
    $('#play-btn').click(function(){
        boredom--;
        $('.boredom').text('BOREDOM: ' + boredom);
    })
}

const playAgain = () => { 
    $('.item2').append('<br><button id="playAgain">PLAY AGAIN?</button>');
    $('#playAgain').click(function(){
        window.location.reload(true);  
    })

}

const tamagatchiDeathCheck = () => {
        // Your pet should die of Hunger, Boredom, or Sleepiness hits 10.
        // if (seconds % 1 === 0) {
            if (hunger >= 11){
                clearInterval(timePassing);
                $('#walking').remove();
                $('.item4').append('<img id="dead" src="Images/dead.png">')
                $('.item2').append(`${name} has died of hunger`);
                playAgain();
            } else if (sleepiness >= 11){
                clearInterval(timePassing);
                $('#walking').remove();
                $('.item4').append('<img id="dead" src="Images/dead.png">')
                $('.item2').append(`${name} has died of sleepiness`);
                playAgain();
            } else if (boredom >= 11){
                clearInterval(timePassing);
                $('#walking').remove();
                $('.item4').append('<img id="dead" src="Images/dead.png">')
                $('.item2').append(`${name} has died of boredom`);
                playAgain();
            }
        // }
}

const berserkDeathCheck = () => {
            // Berserk pet should die of Hunger, Boredom, or Sleepiness hits 15.
            if (seconds % 1 === 0) {
                if (hunger >= 16){
                    clearInterval(timePassing);
                    $('.item4').empty();
                    $('.item4').append('<img id="dead" src="Images/dead.png">')
                    $('.item2').append(`You failed to feed ${name} enough human effigies. They are dead now.`);
                    playAgain();
                } else if (sleepiness >= 16){
                    clearInterval(timePassing);
                    $('.item4').empty();
                    $('.item4').append('<img id="dead" src="Images/dead.png">')
                    $('.item2').append(`${name} went full on zombie. Hope they don’t come for your brains.`);
                    playAgain();
                } else if (boredom >= 16){
                    clearInterval(timePassing);
                    $('.item4').empty();
                    $('.item4').append('<img id="dead" src="Images/dead.png">')
                    $('.item2').append(`You’re too boring for ${name}. You have killed them.`);
                    playAgain();
                }
            }
}

// const popupPlayButton = () => {
//     $('.item2').empty();
//     $('.item2').append('<button id="start">KEEP PLAYING</button>');
//     // sets up seconds
//     $('#start').click(function(){
//         timePassing = setInterval(secondsGoUp, 300);
//         // $('.item2').empty();
//     })
// }

// const beserkPerksPopup = () => {
//     if (age === 10 && age < 10.0001){
//         $('.item2').empty();
//         clearInterval(timePassing);
//         $('.item2').append("<div id='popup'><h3>LEVEL UP</h3><p>You're now a skele-bunny! You get hungrier, sleepier and bored faster, but you don't die until levels hit 15.</p></div>");
//     // popupPlayButton();
//     }
// }  
  


