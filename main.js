//creating main container
const main = document.querySelector(".main");

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
// modal.style.display="none"
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
const renderImages = () => {
  images.forEach((images, i) => {
    // console.log(images);
    const imageBox = document.createElement("div"); //create div for each image
    imageBox.classList.add("img");
    const divBackground = document.createElement("div");
    divBackground.classList.add("background");
    const image = document.createElement("img"); //create image element
    image.src = images.src; //access the src from the object
    image.id = `img-card${i}`;
    divBackground.id = `background${i}`;

    image.classList.add("img-card"); //id for the image
          imageBox.append(image, divBackground); // adding the image inside the div imageBox
    main.append(imageBox); // adding the imageBox div(s) to the main

    // I want to show all the images for 5 sec
    //   setTimeout(() => {
    //     divBackground.style.display = "none";
    // }, 5000);


    divBackground.addEventListener("click", () => {
      divBackground.style.display = "none";
      image.style.display = "block";
            clickedImage.push(images.id);
      background.push(i);
      check(i); //e,a
    });
  });
};
//console.log(clickedImage);
renderImages();
//box for the paragraph and button
const tryAgainBox = document.createElement("div");
tryAgainBox.id = "tryAgain-box";
// creating paragraph after losing
const youLose = document.createElement("p");
youLose.id = "you-lose";
youLose.innerText = " You LOSE! Please try again";
//creat para after win
const youWin = document.createElement("p");
youWin.id = "you-win";
youWin.innerText = " You Win";

// create button try again
const tryAgain = document.createElement("button");
const body = document.createElement("body");
tryAgain.id = "try-again";
tryAgain.innerText = " Try Again";
//creat winning audio
// const winAudio=document.createElement("AUDIO");
// // winAudio.src="";
// winAudio.setAttribute("src","horse.mp3")

tryAgainBox.append(youLose, youWin, tryAgain);
main.append(tryAgainBox);

console.log(modal);
const check = (i) => {
  if (clickedImage.length === 2) {
    //I want to prevent the user from clicking any buttons more than 2 times
    modal.style.display = "block";
    //sound true
    console.log(clickedImage);
    //check the id of clicked images
    if (clickedImage[0] === clickedImage[1]) {
      console.log(true);
      correctIteration += 1;
      //prevent from click for 1 sec
      setTimeout(() => {
        modal.style.display = "none";
      }, 1000);

      if (correctIteration === images.length / 2) {
        youWin.style.display = "inline";
        console.log("win");
      }
      clickedImage.splice(0, clickedImage.length);
      //delete the array elements
      background.splice(0, background.length);
      console.log(clickedImage.length);
    } else {
      console.log(false);
      console.log(background[0], background[1]);

      //query select for the image and background (have the same id)
      const img1 = document.querySelector(`#img-card${background[0]}`);

      const background1 = document.querySelector(`#background${background[0]}`);

      const img2 = document.querySelector(`#img-card${background[1]}`);
      console.log(img2);
      const background2 = document.querySelector(`#background${background[1]}`);
      console.log(background);

      // img1.style.pointerEvents = "none";

      setTimeout(() => {
        img1.style.display = "none";
        background1.style.display = "block";
        img2.style.display = "none";
        background2.style.display = "block";
        //prevent from click when answer is wrong
        modal.style.display = "none";
      }, 3000);

      clickedImage.splice(0, clickedImage.length);
      background.splice(0, background.length);
      wrongiteration += 1;

      //sound wrong
      // console.log(wrongiteration);
      //if 3 wrong iterations => lose

      if (wrongiteration === 3) {
        youLose.style.display = "inline";
      }
    }
  }
};



