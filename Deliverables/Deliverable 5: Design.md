## Team Deliverable 5: Design
Project Name - BubbleBots

Date: 11/12/2023

Location: Virtual (Discord)

Team Members: Nicholas Persley, Nicholas Robishaw, Elian Zamora-Rivera, Jeysen Angous, Tyler Chapp, Ibrahim Hmood


### Description
Bubble Bots is a web-based application that allows students, gamers, and developers to challenge AI in checkers. While doing so, you can see what it’s thinking, in real time, and analyze what pattern the computer is taking and what it thinks is the best option to win. An educational gaming experience into the world of AI that stands apart by not only allowing you to play but truly understand the underlying mechanics of AI.

### Architecture
![arch_diagram](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/720045b3-17d4-409d-b30d-76338bfd442e)
BubbleBots uses a Model-View-Controller (MVC) architecture to divide the system into three distinct, independent parts that separate the concerns and allow modularity. By referencing the model package, the controller package updates the game being visualized by the presentation package. Because this system is split into three separate sub-systems, this architecture allows
development to be conducted on each part of the system independently.


### Class Diagram
![Class_Diagram_D5](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93451175/6b32d1fe-fe32-4766-93a9-57fabcca8549)


### Sequence Diagram
![Sequence Diagram](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/72055903/4ed0816c-2317-4ae5-97c6-28262191365b)


Use Cases:
1) Move Request - Allows the user to make a move that will then be displayed on screen. Then, the back-end will calculate a response by updating the position for the AI bot's decision and update the textual and visualization descriptions.

2) Update settings - This allows the user to update how they would like the AI bot to act during the next move. This will be checked for and updated after every player move, and before the bot's move.

3) Give Feedback - Users can give feedback on the website when they feel that they would like to the programmers to know what's going on.
 
### Design Patterns

#### Structural Design Pattern(Adapter)
![Structural Design Pattern(Adapter)](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/128747430/16600e84-835e-4ece-b89f-502de38843e0)

For this Design pattern we chose to go with the adapter design pattern which allows an existing class to be wrapped by an interface. In this case we have the moving class where the player makes a move against the AI. We also have the AI Bot class that inspects the user move to come up with it’s own move against the user. Both of these classes are used by the board game class which needs the player to make a move in the game and also requires for the AI to make one as well. Lastly we have the Display class on which the website displays the thought 

### Behavioral Patterns(State)
![Behavioral Patterns(State)](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93228715/40c9e81f-e5b0-4bcc-903f-6eb7c7c9b565)

For the second design model, we chose the state design pattern, the game context class handles the game states and changes. The board game state has 3 implementations which are the user move state, AI bot move state, and game over state. The user first makes a move, then the state moves on to the AI bot state after the AI bot makes a move it moves on to the game over state once the board game has been updated and there are no pieces left.

### Design Principles
This design follows the SOLID principles, with many examples. One example is the Board Game class. It features methods derived from the adapters Move and AI Bot, meaning that it abides by the Dependency Inversion Principle. Another example is the Display class, which has only one responsibility. It is only responsible for displaying data to the end user, meaning that it follows the Single-responsibility Principle. 
