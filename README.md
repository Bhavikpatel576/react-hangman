#link
https://linkedin-bhavik.herokuapp.com/

## Hangman
 - A classic word guessing game. The application is a single player game where the user will guess a word the computer will create, based off player's selected difficulty level. The player will try to guess the individual characters in the word. The game is lost when 6 incorrect letters are selected.

## Project Description

### Tech Stack
 - React
 - Express
 - Heroku

### Details and Code

#### Server
##### API call and Handeling CORS
 - The backend of the application is an Express Server using Node.js. The application has two routes. The first being the default route ("/") that serves up the static files from the client folder. The express method `static` is used to serve up the content. 

    ```javascript
    app.use(express.static(path.join(__dirname, './client/build')))
    ```
 A second route is created in order to make an API call to hit the endpoint that returns the requested list of words. 



#### Client Side Code

##### Views
- I've created the perception of having different routes (without having to use React Router) by rendering each of the container components with a switch statement. The Header component takes an event handler that changes the parents state to render the respective view.

<img src="https://github.com/robertnowell/hangman/blob/master/images/game_loop.png"  
alt="game loop" width="550" height="600" border="10"/> 


##### Game Engine
- The game engine is obstensible a state machine. The Game component handle the logic of fetching data from our express server to get a magic word, checking to see if the correct character is guessed, and keeping track of the number of remaining guesses the user has. 




##### Directory Structure
- The client side directory is broken up into three main folders in the root directory
1. assets
    * this will hold the main style sheets and images
2. components
    * Contains reusable components 
3. containers
    * The containers are components that serve as views

├── App.js
├── assets
│   ├── man1.png
│   ├── man2.png
│   ├── man3.png
│   ├── man4.png
│   ├── man5.png
│   ├── man6.png
│   ├── man7.png
│   └── stylesheets
│       ├── index.css
│       ├── reset.css
│       └── skeleton.css
├── components
│   ├── gameConsole.js
│   ├── hangman.js
│   ├── header.js
│   ├── header.test.js
│   ├── index.css
│   ├── keyboard.js
│   └── winner.js
├── containers
│   ├── game.css
│   ├── game.js
│   ├── score.js
│   └── welcome.js
├── index.js
├── serviceWorker.js
└── setupTests.js


##### CSS
-Reset


## Usage

### Install
  1. Clone the repo with `git clone`
  2. run `npm install` to install server dependencies
  3. cd into teh client folder and run `npm install` to install client dependencies
  4. run `npm run build` to create build folder
  3. run `npm start` to have the application server run on your browser via 'http://localhost:50001/'
  
### 

Preview: 
![alt text](https://github.com/Compost-it/compost-it/blob/master/public/R-It.png "Demo")