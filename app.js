//TODO: Create thumnbail images, when user clicks on one in the thumbnail list, makes it appear in the fullscreen container

//STEP 1: store image data

// const imageAssort = [
//   {
//     imageName: "1",
//     imageSRC: "external url OR local relative path",
//     imageAlt: "value",
//   },
//   {
//     imageName: "1",
//     imageSRC: "external url OR local relative path",
//     imageAlt: "value",
//   },
//   {
//     imageName: "1",
//     imageSRC: "external url OR local relative path",
//     imageAlt: "value",
//   },
// ];

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
