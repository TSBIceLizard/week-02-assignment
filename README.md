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

## A few things I tried that weren't fruitful

I successfully managed to display the alt= text of each full size image above the image location, however due to some of the alt descriptions being long, I had to see if I could change the CSS (font-size, specifically) of the displayed descriptions using JS. I tried to do this using DOM commands and also used well known resources like w3schools but couldn't get the font size to be affected. Perhaps we will learn how to do this in the following workshops.

I also wanted to play a small oneshot sound every time the user selected a new image so that the user gets some 'feedback' or que to let them realize they have interacted with the page, but over the weekend I was at my partner's house, and I don't have access to all my sound resources there (the alternative could be to use pixabay, but I am wary about sourcing content like that from websites incase of technical clauses or licenses around using the content).

At this point there's alot of ways I can improve the interface, but was also quite scared about breaking the layout or the logic in the process, so going to settle with what I've got until I'm alot more confident with CSS/JS!

## Final closing notes

I think similar to how alot of the class feels - we have learnt much about alot of these topics in separate compartments (the workshops). Several of these workshops I found easy to marry the concepts together of, but joining all of them together which proved essential ended up being quite a challenge. There were even one or two workshops I went the extra mile and tried to combine them with other workshop topics to get interesting results. DOM is quite easy on paper and in principle, when it becomes tedious seems to be when you have to keep track of which variables you have tied to Ids, what they were called and I think if you have a chain of created elements vectored through .appendChild, it can be really easy to forget one link in that chain and then feeling stumped as to why X, Y or Z part isn't working.

## That's my assignment done. Thanks for reading!
