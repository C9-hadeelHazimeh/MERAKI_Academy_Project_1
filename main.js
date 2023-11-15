//creating main container
const main = document.querySelector(".main");
const tryAgain = document.querySelector("#try-again");
const lose_win_text = document.querySelector("#lose-win-text");
const start= document.querySelector("#start");
const howToPlay= document.querySelector(".how-to-play");

// array of images shown in the game
const images = [
  { id: 1, src: "./images/img 1.jpg" },
  { id: 2, src: "./images/img 2.jpg" },
  { id: 3, src: "./images/img 3.jpg" },
  { id: 4, src: "./images/img 4.jpg" },
  { id: 5, src: "./images/img 5.jpg" },
  { id: 6, src: "./images/img 6.jpg" },
  { id: 3, src: "./images/img 3.jpg" },
  { id: 4, src: "./images/img 4.jpg" },
  { id: 1, src: "./images/img 1.jpg" },
  { id: 5, src: "./images/img 5.jpg" },
  { id: 6, src: "./images/img 6.jpg" },
  { id: 2, src: "./images/img 2.jpg" },
];
const modal = document.querySelector(".modal");

let clickedImage = [];
let background = [];
let wrongiteration = 0;
let correctIteration = 0;

/*Render the images 
//I want to render the images with the 
shape of layout 3rows*4columns 
then waiting for 10 sec 
then rotate them*
the fucnction will iterate on the images array: creating div for each images
*/
modal.style.display = "none";
const renderImages = (images) => {
  
  images.forEach((images, i) => {
    const imageBox = document.createElement("div"); //create div for each image
    imageBox.classList.add("img");
    const image = document.createElement("img"); //create image element
    image.src = images.src; //access the src from the object
    image.id = `img-card${i}`;
    image.classList.add("img-card"); //id for the image

    // creating backgrounds
    const divBackground = document.createElement("div");
    divBackground.classList.add("background");
    divBackground.id = `background${i}`;
    imageBox.append(image, divBackground); // adding the image inside the div imageBox
    main.append(imageBox); // adding the imageBox div(s) to the main
    //  console.log(main.innerHTML)

    // I want to show all the images for 6 sec
    setTimeout(() => {
      image.style.display = "none";
      divBackground.style.display = "block";
    }, 6000);

    //event listener
    divBackground.addEventListener("click", () => {
      divBackground.style.display = "none";
      image.style.display = "block";
      clickedImage.push(images.id);
      background.push(i);
      check(i);
    });
  });
  //
};

// renderImages(images);
// start.addEventListener("click",disapearGreeting=()=>{howToPlay.style.display="none"});
// start.removeEventListener("click",disapearGreeting);
start.addEventListener("click",renderImages(images))


//box for the paragraph and button
const tryAgainBox = document.createElement("div");
tryAgainBox.id = "tryAgain-box";
const body = document.createElement("body");
//creat winning audio
const quickWinAudio = document.createElement("AUDIO");
const winAudio = document.createElement("AUDIO");
quickWinAudio.setAttribute("src", "QuickWin.wav");
winAudio.setAttribute("src", "winning.mp3");

//lose audio
const quickLoseAudio = document.createElement("AUDIO");
const LoseAudio = document.createElement("AUDIO");

quickLoseAudio.setAttribute("src", "QuickLose.wav");
LoseAudio.setAttribute("src", "lose.wav");
tryAgainBox.append(quickWinAudio, winAudio, quickLoseAudio, LoseAudio);

main.append(tryAgainBox);


//lose win functions  place
const winGame = () => {
  //creat para after win
const youWin = document.createElement("p");
youWin.id = "you-win";
youWin.innerText =
  " You Win    Congratulations" +
 String.fromCodePoint(0x1f389) + String.fromCodePoint(0x1f973);
  lose_win_text.append(youWin);
  
  console.log(" final win");
  lose_win_text.style.display = "block";
  
  winAudio.play();
  // tryAgain .style.display="block";
}
const loseGame = () => {
// creating paragraph after losing
const youLose = document.createElement("p");
youLose.id = "you-lose";
youLose.innerText =
  " You LOSE!" + String.fromCodePoint(0x1f915) + "Please try again";
    lose_win_text.append(youLose);

 // I want to dispaly the modal so the user cant click after end of game
  // the modal will disapper when clicking  try again button
  console.log("final lose");
  lose_win_text.style.display = "block";
  LoseAudio.play();
  console.log(youLose);
  modal.style.display = "block";
  // tryAgain .style.display="block";
};

const check = (i) => {
  if (clickedImage.length === 2) {
    //I want to prevent the user from clicking any buttons more than 2 times
    modal.style.display = "block";
    //check the id of clicked images
    if (clickedImage[0] === clickedImage[1]) {
      console.log(true);
      correctIteration += 1;
      //prevent from click for 1 sec
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
      quickWinAudio.play();
      
      console.log(" win inside fucntion:", correctIteration);
      if (correctIteration === images.length / 2) {
        console.log(correctIteration);
        winGame();
      }

      clickedImage.splice(0, clickedImage.length);
      //delete the array elements
      background.splice(0, background.length);
      console.log(clickedImage.length);
    } else {
      quickLoseAudio.play();
      wrongiteration += 1;
      //query select for the image and background (have the same id)
      const img1 = document.querySelector(`#img-card${background[0]}`);

      const background1 = document.querySelector(`#background${background[0]}`);

      const img2 = document.querySelector(`#img-card${background[1]}`);

      const background2 = document.querySelector(`#background${background[1]}`);

     
      console.log("lose inside fucntion:", wrongiteration);
      if (wrongiteration === 3) {
        console.log("inside if while calling:" ,wrongiteration);
        loseGame();
      }
     else {
      setTimeout(() => {
        img1.style.display = "none";
        background1.style.display = "block";
        img2.style.display = "none";
        background2.style.display = "block";
        //prevent from click when answer is wrong
        modal.style.display = "none";
      }, 2000);
     }

      clickedImage.splice(0, clickedImage.length);
      background.splice(0, background.length);
    }
  }
};
const shuffleImages = (images) => {
  for (i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //random indeces
    [images[i], images[j]] = [images[j], images[i]];
  }
};
const playAgain = () => {
  shuffleImages(images);
  main.innerHTML = "";
  correctIteration = 0;
  wrongiteration = 0;
  lose_win_text.innerHTML = "";

  modal.style.display = "none";

  renderImages(images);
  console.log("Shuffled Images:", images);
};

tryAgain.addEventListener("click", playAgain);


