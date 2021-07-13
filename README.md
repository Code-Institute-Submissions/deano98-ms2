# Milestone Project 2 - Rock Paper Scissors Lizard Spock Game

This website is a simple game based on the slightly more complex version of Rock Paper Scissors, created by Sam Kass and which famously featured on The Big Bang Theory TV show. 

"Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitate lizard, lizard eats paper, paper disproves Spock, Spock vaporises rock and as it always has, rock crushes scissors" - *Sheldon Cooper*

The game will be a nod to the show and will appeal to fans, as well as everyone else. It will operate as per the rules above and the user will be up against the computer in a best of 1, 3 or 5 games. The aim is to provide the user with a simple bit of interactive fun.

Responsive design will be employed to provide a smooth experience on any device: On smaller devices, landscape orientation will be required.

# UX

### User Stories

* As a user, I want the site to be intuitive and easy to use
* As a user, I'd like to be able to see the rules of the game
* As a user, I want the site to be visually appealing
* As a user, I want the game to be interactive and engaging to keep me interested

# Wireframes

[Desktop](docs/wireframes/desktop.png)\
[Tablet](docs/wireframes/tablet.png)\
[Mobile](docs/wireframes/mobile.png)

# Design

### Typography

* The font used on the website will be Fjalla One, a simple but interesting looking font that compliments the game perfectly.

### Colour Scheme

* The 2 main colours on the site are navy blue and a lighter blue. Providing a nice contrast with the white background.

# Features

* The site will feature a button in the top left corner of the screen which will open a popup explaining the rules
* The top right corner of the screen will have a radio button to select how many rounds you'd like to play in the game: best of 1, 3 or 5. The radio button will be disbaled once the game has commenced and wont be usable again until the game ends.
* A header will be displayed at the top of the page with the name of the game.
* Beneath the header will be a score tracker for each player, the score will be updated automatically after each round.
* The main part of the game is the 5 buttons, once for each of the actions you can take. Rock, Paper, Scissors, Lizard or Spock. Clicking on one of these buttons selects your move which commences the next part of the game.
* Once your move is selected, only 2 buttons will be displayed, your choice and a blank one for the computer. A countdown from 3 seconds will then begin which is displayed below the buttons.
* When the countdown reaches 0, the computers selection is randomly generated and the winner of the round is calculated. Above the selection will be a desription of the outcome. For example: Rock crushes Scissors!
* Once the outcome of the round has been decided and the scores have updated, the game will check the number of rounds that are selected on the radio button. If the required number of wins has been met, a modal box will appear declaring the winner. The modal will feature a play again button which will reset the game.
* If the required number of wins has not yet been met, a next round button will appear which will reset the round.

### Future Features

* A notice to rotate your device to landscape on mobile and tablets.

# Technologies Used

* HTML
* CSS
* Javascript
* Google Fonts

# Testing

### Code Validation

[W3C Markup Validation](https://validator.w3.org/)\
[W3C CSS Validation](https://jigsaw.w3.org/css-validator/)\
[Beautify Tools Validation](https://beautifytools.com/javascript-validator.php)

# Test Cases

### Testing User Stories

1. As a user, I want the site to be intuitive and easy to use
  * The game is self explanatory, but there are instructions as you go along.
  * The buttons to select your move are the eyecatching part of the site, you're invited to click them and then the game begins.
  * Playing a round of the game is just 1 click.
2. As a user, I'd like to be able to see the rules of the game
  * The rules appear in a modal box when the rules button is pressed in the top left corner.
  * The rules button stands out and is easy to see
3. As a user, I want the site to be visually appealing
  * The site is uncluttered and simple to be easy on the eye
  * A navy blue colour is used against the white background to provide a good contrast
  * The icons for the selections are clean and compelling, making the main part of the game eye-catching
4. As a user, I want the game to be interactive and engaging to keep me interested
  * Each stage of the round requires interaction from the player to continue
  * The site has a 3 second countdown after the action is selecting to provide some dramatic effect.
  * The outcome of each game is displayed on a modal box, providing more dramatic effect
  * The player can select the number of rounds to play using a radio button


### Site Screenshots

[Desktop](docs/screenshots/desktop.PNG)\
[Desktop Rules](docs/screenshots/desktop-rules.PNG)\
[Tablet](docs/screenshots/tablet.PNG)\
[Tablet Rules](docs/screenshots/tablet-rules.PNG)\
[Mobile](docs/screenshots/mobile.PNG)\
[Mobile Rules](docs/screenshots/mobile-rules.PNG)

### Supported Devices

* The site has been tested on and supports the following devices:
  * Moto G4
  * Galaxy S5
  * Pixel 2
  * Pixel 2 XL
  * iPhones 5/SE
  * iPhones 6/7/8 Plus
  * iPhone X
  * iPhone 11
  * iPad
  * iPad Pro
  * Surface Duo

### Supported Browsers

* The site has been tested on and supports the following browsers:
  * Google Chrome
  * Mozilla Firefox
  * Microsoft Edge
  * Safari

### Bug Fixes

* Iterating through the 5 buttons to remove them by using an incrementing for loop was causing 2 buttons to be ignored. Thanks to a post on [Stack Overflow](https://stackoverflow.com/) I realised this was because the array is re-indexed each time something is removed. A simple fix was to use a decrementing for loop instead.

# Deployment

* GitHub Pages
  * Navigate to the site repository on GitHub
  * Click settings
  * Click on to the Pages tab
  * In the "Source" section, click on the button that says "None"
  * Select the Master branch
  * Save. The site is now hosted at https://deano98.github.io/ms2/

* GitPod
  * Navigate to the site repository on GitHub
  * Click the green gitpod button
  * Once loaded, click on the burger icon then select Terminal > New Terminal
  * In the terminal, type the following: python3 -m http.server
  * Click on open in browser to view the site locally.

# External Resources

 * [w3schools](https://www.w3schools.com/) For help with code issues
 * [Stack Overflow](https://stackoverflow.com/) For help with code issues
 * [JavaScript Tutorial](https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/) For the while loop used in the clearBoard function
 * [Google Fonts](https://fonts.google.com/) For the font used on the site

 # Credits

 * Thanks to my mentor Rohit Sharma, for the support with my project.
 * Thanks to everyone on Slack for just being a great source of help and information.