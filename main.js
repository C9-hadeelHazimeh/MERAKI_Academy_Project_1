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
  { id: 1, src: "./images/img 3.jpg" },
  { id: 2, src: "./images/img 4.jpg" },
  { id: 3, src: "./images/img 1.jpg" },
  { id: 4, src: "./images/img 5.jpg" },
  { id: 5, src: "./images/img 6.jpg" },
  { id: 6, src: "./images/img 2.jpg" },
];

/*Render the images 
//I want to render the images with the 
shape of layout 3rows*4columns 
then waiting for 10 sec 
then rotate them*
the fucnction will iterate on the images array: creating div for each images
*/

// const toggleBackground=()=>{

//   image.style.display = inline
// }
const renderImages = () => {
  images.forEach((images, i) => {
    console.log(images);
    const imageBox = document.createElement("div"); //create div for each image
    imageBox.classList.add("img");
    const divBackground = document.createElement("div");
    divBackground.classList.add("background");
    const image = document.createElement("img"); //create image element
    image.src = images.src; //access the src from the object
    image.id = "img-card"; //id for the image
    imageBox.append(image, divBackground); // adding the image inside the div imageBox
    main.append(imageBox); // adding the imageBox div(s) to the main
    console.log(imageBox);
    divBackground.addEventListener("click", () => {
      divBackground.style.display = "none";
      image.style.display = "block";
    });
    
  });
};
renderImages();
