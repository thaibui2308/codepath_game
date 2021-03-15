# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Thai D. Bui**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/let-groove)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- An indicator allows user to know how many chances he/she has left.
- Instead of adding different sounds to each buttons when they are clicked, I only added sound to button that incorrectly clicked during  
  in comparison to a clue sequence.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/ -> I used this website to help me find some JavaScript functions that allow the user to modify the text content of a HTML tag as well as figuring out how to add the image and audio features to a button.]
[https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -> this one help me to scale the game to make it more eye-catching.]
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[There are challenging features I encountered during the process of building this project. The first is the 3-strikes feature. I found it difficult because I was struggling to figure out where should the logic operations be placed in order to run a check-up on user's attempts. I solved this problem by changing my approach to the game logic and took a closer look at the flow chart to come up with the idea to check the attempt remaining right after the user clicks the wrong button. It turned out that the solution for this issue was not as hard as I expected and all I need to do is to consider and analyze the problem under a different degree of inspection. The second challenging features I had to deal with is to add an image to button when it is clicked. I found it hard because I had difficulty in resolving the conflict happened as a result of many nested event handlers fired when there is a Mouse Up or Mouse Down action. This hindrance encourages me to research more about Event Listener and along the way, I was able to know the issue lied at the refactoring of code in such function.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Having finished the Prework Project with such an interesting game, I wonder if one can create an 3D game using just JavaScript and runs it on a browser. Other than that, what happens if we instead of dealing with each component by representing it using a function as well as a HTML tag, should we group it into a class to make our code cleaner and more organized? ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours on this project, there are some modifications I would like to add to my code. First, I want to change the tag which used to indicate the remaining attempts a user has into a health bar. After that, instead of leaving the interface just like the original template, I want to custom it into a more attracting, starting with the letter font. There are also a few features I would love to add to my project. One of them is an input field that allows the player to freely modify the clue sequence. What’s more, it would be cool to let the player “chooses” the level by clicking a button that indicates how hard they want it be. For example, a “Easy” level game will have only 3 buttons while a “Hard” one will contain around 5-6 buttons. It would be great to add a scoring guideline even though the play couldn’t make it to the last round. With this feature being added, a scoreboard would be great to find out the winner if two or more players are playing.]



## License

    Copyright [Thai D. Bui]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.