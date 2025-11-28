# week-02-assignment

Image Gallery of renders

## This week's objective was to create an Image Gallery webpage

The image gallery webpage should have small thumbnails of images to render full-size, all on the same page. In my case, I wondered where I wanted the thumbnail navigation until I finally settled for the top.

To achieve this we're using HTML, CSS _AND_ JavaScript. The more complex part is the JavaScript logic.

## Requirements:

1. Implement responsive design methods. This means the website must adapt to different resolutions (devices too).
2. Implement atleast one meaningful media query (I have two with multiple CSS rules, just to make it more comfortable).
3. The alt= attribute of images must have a decent descriptor for accessibility.
4. Use event handlers to swap out the main image based on what thumbnail the user clicks on.

## The result:

The webpage should be published on Github already. I first worked out the Javascript logic (well, a bit simultaneously to laying out the thumbnails), which required the bulk of the mental gymnastics. Got caught up on trying to set an appended image .src attribute to use the specific key-value pair from an array object, I struggled with this for hours on the first day of the assignment until I noticed I was missing a dot to notate the property, once I did that - the rest mostly fell into place.

Some of the Javascript logic definately isn't as **DRY** as it could be, but at this point I'm nervous to improve it incase I end up breaking it!

### The logical flow followed these steps:

1. Declare global (scope) variables
2. Store the array objects. These contained all the necessary attributes about each image. (They also have a redundant name!).
3. A function containing a loop which creates all of the thumbnails on the image navigation row. I used the length of the array to set the condition. It gives each thumbnail in the navigation row its attritubes in incremental sequence.
4. After the thumbnail navigation row was created with DOM, I declared the variables to get their ID's.
5. Created a default max size image to show using DOM, so that when the user lands on the page it doesn't just have a pointless empty space.
6. Gave each thumbnail on the row above an event listener and handler. In this stage, I chose to first **removeChild** from the max size image container and then **appendChild** (the new one), and it would create the max size image with DOM manipulation and automatically issue it it's attributes.

## That's my assignment done. Thanks for reading!
