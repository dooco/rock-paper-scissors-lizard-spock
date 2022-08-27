View the live project: Rock Paper Scissors Lizard Spock [here](https://dooco.github.io/rock-paper-scissors-lizard-spock/)

![amiresponsive](./assets/images/readme_images/responsive.png)


# Rock, Paper, Scissors, Lizard, Spock

This website forms part assignment for the Code Institute’s Full Stack Developer course - personal portfolio two. Using principles of javaScript learned on the javaScript essentials and 'Love Maths' walkthrough modules this website was developed to demonstrate students knowledge and ability to implement javaScript code in a simple game.
As well as displaying competence in writing code in javaScript the website is designed using principles of user experience design, html and css, and is designed to be responsive using basic css.
The game Rock, Paper, Scissors, Lizard, Spock is an extension of the Rock, Paper, Scissors game and is credited to Sheldon of the Big Bang television series.





# User Experience (UX)

## Strategy Plane

Website was created to showcase knowledge of HTML, CSS and JavaScript and to provide users with some fun in the form of an online Rock, Paper, Scissors, Lizard, Spock game created with JavaScript.

## User stories

### First Time Visitor Goals

1. As a First Time Visitor, I want to easily understand the main purpose of the game.
2. As a First Time Visitor, I want to be able to easily navigate the site to play the game.
3. As a First Time Visitor, I want to be able to play game on any device.

### Returning Visitor Goals

1. As a Returning Visitor, I want to be able to play game at ease.
2. As a Returning Visitor, I want to compete with computer in simple game of chance.
3. As a Returning Visitor, I want to familiarise myself with rules of the game.

### Frequent User Goals

1. As a Frequent User, I want to continue to enjoy the game and share with family and friends.
2. As a Frequent User, I want to see if I can win against the computer.
3. As a Frequent User, I want to be able to reset game and start a new game.


# Design

## Colour Scheme

The three main colours used in the game are: blueviolet (used as background colour), lightblue (Player background colour) and lightcoral (computer background colour) inspired by the Code Institute’s case study video. Colour pallet was created by tool on mycolor.space website.

![colour pallet](./assets/images/readme_images/colour_pallet.png)

## Typography

The 'DynaPuff' font is the main font used throughout the website with 'cursive' as the fallback font in case for any reason the font isn't being imported into the site correctly. DynaPuff is a quirky font used frequently in children's games / websites.

![DynaPuff google font](./assets/images/readme_images/google_font_dynapuff.png)

### Imagery

Simple emoji characters are used to represent the elements of the game. The heading of the game consists of the elements in text, followed by the emoji for that element.

The game section of the site simply displays five buttons with text to identify the elements that the player can choose from. 

Two display areas displays player choice and score and the other display area the computer choice and score. Again simple enlarged emoji images representing the player choice and computer choice are displayed in their respective display areas.

### Wireframes

Game Page Wireframe 

![Wireframe](./assets/images/readme_images/Rock-Paper-Scissors-Lizard-Spock.png)


# Features

Responsive on all device sizes. 

## Structure

### Header

The header consists of the five elements of the game in text, followed by the emoji for that element. It introduces the player to the game via simple element / image association.

![heading](./assets/images/readme_images/header-section.png)

### Player Selection 

Five buttons with text description for player to make their chioce for next itteration of game. When user’s mouse hovered over button the button animation (expands to 120%) highlighting which button is selected.

![player selection area](./assets/images/readme_images/player-selection.png)

### Message and Reset Game

Message area displays information to the user such as 'New Game', 'Player Wins', Player Looses', It's a Tie'. Below this the player is given the option to 'Reset' the game.

![message and reset game area](./assets/images/readme_images/message-reset.png)

### Player and Computer Image Selection and Score

The two display areas display player and computer choice and score. After game starts or reset both scores start at zero and increment as play progresses with logic operators in javaScript functions of game deciding which score should be incremented. Enlarged emoji images representing the player choice and computer choice are displayed in their respective display areas.


![Player and Computer Image Selection and Score](./assets/images/readme_images/player-computer-selection-score.png)

### Footer (Rules)

The rules of the game need to be available to player but take up a lot of screen space on smaller devices. To view  rules, click on footer and rules will appear in a popup which can be collapsed again by clicking on popup.


![rules](./assets/images/readme_images/Rules-popup.png)


## Technologies Used

### Languages Used

1. HTML5
2. CSS3
3. JavaScript

### Frameworks, Libraries & Programs Used

- Hover.css:
Hover.css was used on the Player selection buttons in the player choice selection area to enlarge button while being hovered over.
- Google Fonts:
Google fonts were used to import the 'DynaPuff' font into the header section of index.html which is used throughout the project by referencing font family in style.css file.
- Font Awesome:
Font Awesome was used in the game to add an icon for game reset.
- Git:
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- GitHub:
GitHub is used to store the projects code after being pushed from Git.
- VS Code:
Integrated Development Environment used to develop the website.

- Balsamiq:
Balsamiq was used to create the wireframes during the design process.

- Code Institute's Student template for gitpod:
Preinstalled tools for students to use and create projects.

- Google Chrome Developer Tool:
Used to test and debug site. 

-  mycolor.space: 
Used to create colour pallet.

## Testing

The W3C Markup Validator and W3C CSS Validator services were used to validate the project to ensure there were no syntax errors. The jshint JavaScript test utility was uses to check for jacaScript errors in the project. The results are shown below.  

- W3C Markup Validator - Results

![W3C Validator](./assets/images/readme_images/html-validator.png)

Validator indicated that no errors were observed.


- W3C CSS Validator - Results

![W3C CSS Validator](./assets/images/readme_images/css-validator.png)

Validator indicated that no errors were observed.


- JavaScript code was tested by passing code through jshint.com

![jshint results](./assets/images/readme_images/jshint-validator.png)



19 warnings

Warnings predominantly relate to variables and their interaction with different version of browsers and are not significant.

No errors were noted.

- Lighthouse analysis

Lighthouse analysis scores quality in five categories; performance, best practice, SEO and qualification as a Progressive Web Application. The analysis was performed on the website on an incognito browser window (as suggested by Lighthouse) for bot mobile and desktop. 

Lighthouse mobile results:

![Mobile lighthouse result](./assets/images/readme_images/lighthouse-mobile.png)


Lighthouse desktop results:

![Desktop lighthouse result](./assets/images/readme_images/lighthouse-desktop.png)




### Further Testing

- The Website was tested on Google Chrome, Firefox Developer and Safari browsers. Game worked as expected except for when screen width went below 540px where the computer display area appeared longer than player s=display area.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7 and iPhoneX.
- A large amount of testing was done to ensure that all components of game, html, css and JavaScript linking correctly.
- Friends and family members were asked to review the site and point out any bugs or issues.

## Known Bugs

On some mobile devices the computer display area is larger than the player display area. 

## Limitations and further improvements

- Further improvements in emoji images whereby the pink background would be replaced with the background colour of the display area would improve contrast and add to visual experience.

- Log in function where user can log their username and game would keep a record of scores. However there may be limitations on recording scores when game is finished and data is lost.


# Deployment

## GitHub Pages
The project was deployed to GitHub Pages using the following steps:

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- Scroll down the Settings page until you locate the "GitHub Pages" Section.
Under "Source", click the dropdown called "None" and select "Main".
- The page will refresh after a while.
Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.


# Credits

## Code

The Code Institute's Portfolio Project 2 Scope video provided the underling html, css and javaScript code for the game. This was modified and expanded to fit five elements of game Rock, Paper, Scissors, Lizard, Spock.

After researching various strategies to implement rules of game through JavaScript a solution was found on stack overflow.

Hash table: [JavaScript hash table:](https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javaScript)

Popup code credited to W3Schooles.com [w3schools.com](https://w3schools.com)


## Content

All content was written by the developer.


## Media

All Images were created by the developer.

## Acknowledgements

My Mentor, Ronan, for continuous helpful feedback.

Tutor support at Code Institute for their support.




