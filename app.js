console.log("My app.js is working");
//TODO: Create thumnbail images, when user clicks on one in the thumbnail list, makes it appear in the fullscreen container

//===============Global Scope Variable Declaration==========//
const thumbnailContainer = document.getElementById("thumbnail-container");
const maximizedImageContainer = document.getElementById(
  "maximized-image-container"
);

const drawFullImg = document.createElement("img");
//===============Global Scope Variable Declaration==========//
//I wish I knew the difference between document.getElementById and document.querySelector

//STEP 1: store image data

const imageAssort = [
  {
    imageName: "1",
    imageSRC: "./images/CSTOManGuardStanceCrop4.png",
    imageAlt: "Medieval Hero Guard Up",
    imageId: "thumbone",
  },
  {
    imageName: "2",
    imageSRC: "./images/CSTOPortfolio1crop4.png",
    imageAlt: "Medieval Hero wearing a bronze chestplate and barbute helmet",
    imageId: "thumbtwo",
  },
  {
    imageName: "3",
    imageSRC: "./images/CSTOUniqueBarbute1crop4.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes from above",
    imageId: "thumbthree",
  },
  {
    imageName: "4",
    imageSRC: "./images/CSTOUniqueBarbute2crop4.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes from the side",
    imageId: "thumbfour",
  },
  {
    imageName: "5",
    imageSRC: "./images/CSTOUniqueBarbute3crop4.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes up close",
    imageId: "thumbfive",
  },
];

const imageFullSize = [
  {
    imageName: "1",
    imageSRC: "./images/fullsize/CSTOManGuardStance.png",
    imageAlt: "Medieval Hero Guard Up",
    imageId: "fullone",
  },
  {
    imageName: "2",
    imageSRC: "./images/fullsize/CSTOPortfolio1.png",
    imageAlt: "Medieval Hero wearing a bronze chestplate and barbute helmet",
    imageId: "fulltwo",
  },
  {
    imageName: "3",
    imageSRC: "./images/fullsize/CSTOUniqueBarbute1.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes from above",
    imageId: "fullthree",
  },
  {
    imageName: "4",
    imageSRC: "./images/fullsize/CSTOUniqueBarbute2.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes from the side",
    imageId: "fullfour",
  },
  {
    imageName: "5",
    imageSRC: "./images/fullsize/CSTOUniqueBarbute3.png",
    imageAlt:
      "Medieval Hero with a unique barbute helmet engraved with runes up close",
    imageId: "fullfive",
  },
];

//===============Create Thumbnails===============//

//For loop contained within a function. Its condition checks the length of the array object imageAssort. The thumbImage variable is contained within this block scope.
//thumbImage creates an img element > which is then appended under the container "thumbnailContainer"
//the last line of the loop action affects the src attribute of the newly appended thumbImages, and on each increment of the loop it selects the imageSRC key:value pair of and matches the increment to the array index (this is what the use of the [i] is after imageAssort). I had this almost working multiple times in the afternoon yesterday but i kept missing the . before imageSRC; so I kept thinking this wouldn't work. Syntax is always the bane of my existence.

function createThumbnails() {
  for (let i = 0; i < imageAssort.length; i++) {
    const thumbImage = document.createElement("img");
    thumbnailContainer.appendChild(thumbImage);
    thumbImage.src = imageAssort[i].imageSRC;
    thumbImage.alt = imageAssort[i].imageAlt;
    thumbImage.id = imageAssort[i].imageId;
  }
}
//Invoke the function
createThumbnails();
//===============Create Thumbnails===============//
//===============Capture Element IDs=============//
//I could probably do this at the start of the app.js file but I don't know if that will still work as thumbImage won't exist yet!

//I'm sure these below don't follow DRY standards, lol. Will figure out a better way later if possible.

const captureThumbId1 = document.getElementById(imageAssort[0].imageId);
const captureThumbId2 = document.getElementById(imageAssort[1].imageId);
const captureThumbId3 = document.getElementById(imageAssort[2].imageId);
const captureThumbId4 = document.getElementById(imageAssort[3].imageId);
const captureThumbId5 = document.getElementById(imageAssort[4].imageId);
//===============Capture Element IDs=============//
//===============Default Image Inject============//
function createDefaultFullImg() {
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[0].imageSRC;
  drawFullImg.alt = imageFullSize[0].imageAlt;
  drawFullImg.id = imageFullSize[0].imageId;
}

createDefaultFullImg();
//===============Default Image Inject============//
//===============Trigger Thumbnails==============//
captureThumbId1.addEventListener("click", function () {
  console.log("Thumb 1 click success. The listener hears!");
  maximizedImageContainer.removeChild(drawFullImg);
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[0].imageSRC;
  drawFullImg.alt = imageFullSize[0].imageAlt;
  drawFullImg.id = imageFullSize[0].imageId;
  //   maximizedImageContainer.replaceChild(drawFullImg, drawFullImg);
});

captureThumbId2.addEventListener("click", function () {
  console.log("Thumb 2 click success. The listener hears!");
  maximizedImageContainer.removeChild(drawFullImg);
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[1].imageSRC;
  drawFullImg.alt = imageFullSize[1].imageAlt;
  drawFullImg.id = imageFullSize[1].imageId;
});

captureThumbId3.addEventListener("click", function () {
  console.log("Thumb 3 click success. The listener hears!");
  maximizedImageContainer.removeChild(drawFullImg);
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[2].imageSRC;
  drawFullImg.alt = imageFullSize[2].imageAlt;
  drawFullImg.id = imageFullSize[2].imageId;
});

captureThumbId4.addEventListener("click", function () {
  console.log("Thumb 4 click success. The listener hears!");
  maximizedImageContainer.removeChild(drawFullImg);
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[3].imageSRC;
  drawFullImg.alt = imageFullSize[3].imageAlt;
  drawFullImg.id = imageFullSize[3].imageId;
});

captureThumbId5.addEventListener("click", function () {
  console.log("Thumb 5 click success. The listener hears!");
  maximizedImageContainer.removeChild(drawFullImg);
  maximizedImageContainer.appendChild(drawFullImg);
  drawFullImg.src = imageFullSize[4].imageSRC;
  drawFullImg.alt = imageFullSize[4].imageAlt;
  drawFullImg.id = imageFullSize[4].imageId;
});

//===============Trigger Thumbnails==============//

//STEP 2: create thumbnail images
// function createThumbnails() {
//Select the DOM Element using getElementByID
//This is a repetitive task, thefore it'll be good to use a loop!
//loop task:
// - Create an img element
// - update the src and other attributes of the img element to match those in the array
// - give each img a className (img.className)
// - Add an event listener to each image -> the event handler of this event is the function you write to create the fullscreen images
// - append the created images to the thumbnail-container
// }

//STEP 3: create fullscreen images
// function createFullSizeImages() {
//this is an event handler
//select the fullscreen-container
//delete the Current fullscreen image
//fullscreenContainer.innerHTML = "" OR null
//create image
//update its values (properties)
//add className for styling (making the image fullscreen)
//append the image to the container
//}

//add the createFullScreenImages function as the event handler of the event above
//you call the createThumbnails function
