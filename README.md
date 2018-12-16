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

##### Directory Structure
- The client side directory is broken up into three main folders in the root directory
1. assets
    * this will hold the main style sheets and images
2. components
    * Contains reusable components 
3. containers
    * The containers are components that serve as views

##### Views
- I've created the perception of having different routes (without having to use React Router) by rendering each of the container components with a switch statement. The Header component takes an event handler that changes the parents state to render the respective view.

<img src="https://github.com/Bhavikpatel576/react-hangman/blob/master/assets/render.png" alt="render container" border="10"/> 


##### Game Engine
- The game engine is obstensible a state machine. The Game component handle the logic of fetching data from our express server to get a magic word, checking to see if the correct character is guessed, and keeping track of the number of remaining guesses the user has. 
1. A function is created to hit our API endpoint to get a list of words. The data is stored into an array and a random element is picked and set to the components state. The function is called when the component is mounted with the lifecycle function  `ComponentDidMount()`

<img src="https://github.com/Bhavikpatel576/react-hangman/blob/master/assets/fetch.png" alt="render container" border="10"/>

2. When the player selects a letter from the virtual character list, an event handler gets fired and calls the checkCharacter function. The function checks to see the character guessed is part of the magic word and pushes the character into an array called guesses. This array will also be served as a prop to the keyboard component to disable any guessed values. If the character guessed is correct, we add it into an additional array to keep track of correct characters, and then check the game status. If the character is incorrect, we update the state and decrement the amount of guesses the player has. 

<img src="https://github.com/Bhavikpatel576/react-hangman/blob/master/assets/checkletter.png" alt="render container" border="10"/>

3. The function checkGameStatus  checks the number of attempts left. If the value is 0, we know the user lost. The other piece of logic is to see if all the characters in the guesses array matches teh characters of the magic word. The way the game is designed, we only need to guess the correct character, which means we need to find only unqiue values in the magic word. If the unqiue characters in the magic word equal the characters in the `guesses` array, we know the user has won. 

<img src="https://github.com/Bhavikpatel576/react-hangman/blob/master/assets/gamestatus.png" alt="render container" border="10"/>

4. The game state is updated and renders the Winner container. 

<img src="https://github.com/Bhavikpatel576/react-hangman/blob/master/assets/gameover.png" alt="render container" border="10"/>




##### CSS
-Reset


## Usage

### Install
  1. Clone the repo with `git clone`
  2. run `npm install` to install server dependencies
  3. cd into teh client folder and run `npm install` to install client dependencies
  4. run `npm run build` to create build folder
  3. run `npm start` to have the application server run on your browser via 'http://localhost:50001/'
  