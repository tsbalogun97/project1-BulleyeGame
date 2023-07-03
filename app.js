// making the dart disappear
const darts = () => {
  let dart = document.querySelector('.dart')
  dart.classList.toggle('darthidden')
}
// storing number where dart hit
let dartPosition;
// object that stores the point for hit location for playOne 
let boardScore = { 
  1:0, 19:0, 6:0, 24:0, 2:20, 3:30, 4:30,
  5:10, 7:20, 8:50, 9:100, 10:100,
  11:50, 12:20, 13:20, 14:50, 15:70,
  16:70, 17:50, 18:10, 20:10, 21:20,
  22:20, 23:10 
}
const checkMiss = () => {
  if(dartPosition === 1 || dartPosition === 19 || dartPosition === 24 || dartPosition === 6){
    console.log('checkMiss');
    playMusic()
    let img = document.querySelector('.mk')
    img.classList.remove('hidden')
    // setting timeout to rehidden mk
    setTimeout(() => {
      img.classList.add('hidden')
    }, 500)
  }
}
const playMusic =() => {
  let audio = new Audio('http://soundfxcenter.com/video-games/mortal-kombat-3-trilogy/8d82b5_Mortal_Kombat_3_Toasty_Sound_Effect.mp3')
  audio.play()
}




// creating score count for both players
let num = 0
let num2 = 0
const scoreLeft = () => {
  moveDart()
  let score = document.querySelector('.leftScore')
  num += boardScore[dartPosition]
  score.innerHTML = `Score: ${num}, dartPosition ${dartPosition}`
// calling scoreRight to shoot after scoreLeft
  setTimeout(scoreRight, 2000)
}

const scoreRight = () => {
  moveDart()
  score = document.querySelector('.rightScore')
  num2 += boardScore[dartPosition]
  score.innerHTML = `Score: ${num2}, dartPosition ${dartPosition}`
  
}



//  resetting the game 
const restart = () => {
  location.reload()

}
let reset = document.querySelector('.reset')
reset.addEventListener('click', ()=>{
  location.reload()
})

// creating function to move the dart

const moveDart = () => {
  let boxes = document.querySelectorAll('.box')
  console.log(boxes)
  dartPosition = randomSpots(1, 24)
  checkMiss()
  let currentBox = boxes[dartPosition -1]
  let dart = document.createElement('img')
  dart.className = "dart"
  // let dart = document.querySelector('.dart').cloneNode()
  currentBox.append(dart)
}

// random hitspots
const randomSpots =(min,max) => {
  return Math.floor(min + Math.random()* (max-min))
  
}
// creating countdowm timer

// creating win state and lose state

// call the function to start the game/check the game status




// create a function that checks the game is still ongoing.
const gameStatus = () =>{
  if(num >= 500) {
    alert( 'playerOne wins')
    num = 0; num2 = 0
    // restart()
    // location.reload()

  }else if(num2 >= 500){
    alert('playerTwo wins') 
    num = 0; num2 = 0
    // restart()
    // location.reload()
  }

}



// add key frames that shows messages like " you miss your shot"

// add a toggle function that shows "MK guy that says - Toasted!" possibly add the actual sound

setInterval(gameStatus,500)

