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

/*Render the images 
//I want to render the images with the 
shape of layout 3rows*4columns 
then waiting for 10 sec 
then rotate them*
the fucnction will iterate on the images array: creating div for each images
*/

let clickedImage = [];
const renderImages = () => {
  let click = 0;
  images.forEach((images, i) => {
    // console.log(images);
    const imageBox = document.createElement("div"); //create div for each image
    imageBox.classList.add("img");
    const divBackground = document.createElement("div");
    divBackground.classList.add("background");
    const image = document.createElement("img"); //create image element
    image.src = images.src; //access the src from the object
    image.id = `img-card${images.id}`;
    divBackground.id = `background${images.id}`;

    image.classList.add("img-card"); //id for the image
    imageBox.append(image, divBackground); // adding the image inside the div imageBox
    main.append(imageBox); // adding the imageBox div(s) to the main
    // console.log(imageBox);
    divBackground.addEventListener("click", () => {
      divBackground.style.display = "none";
      image.style.display = "block";
      // console.log(images);
      clickedImage.push(images.id);
      check(); //e,a
    });
    
  });
};
//console.log(clickedImage);
renderImages();

const check = () => {
  // console.log(e.target)
  if (clickedImage.length === 2) {
    // document.querySelectorAll(#img-card)
    console.log(clickedImage);
    if (clickedImage[0] === clickedImage[1]) {
      //check the id of clicked images
      console.log(true);
      clickedImage.splice(0, clickedImage.length); //delete the array elements
      console.log(clickedImage.length);
    } else {
      console.log(false);
      console.log(clickedImage[0], clickedImage[1]);
      const img1 = document.querySelector(`#img-card${clickedImage[0]}`);

      const background1 = document.querySelector(
        `#background${clickedImage[0]}`
      );

      const img2 = document.querySelector(`#img-card${clickedImage[1]}`);

      const background2 = document.querySelector(
        `#background${clickedImage[1]}`
      );
      background1.style.display = "block";
      background2.style.display = "block";
      img1.style.display = "none";
      img2.style.display = "none";
      
      // console.log(clickedImage);
      clickedImage.splice(0, clickedImage.length);
      
    }
  }
};

/* 
  doc.queS( `#img-card${clickedImage[0]}`) => to none
  doc.queS( `#img-card${clickedImage[1]}`) => to none
  doc.queS( `#divBackground${clickedImage[0]}`) => to block
  doc.queS( `#divBackground${clickedImage[1]}`) => to block

    divBackground.id = `background${images.id}`;


*/
