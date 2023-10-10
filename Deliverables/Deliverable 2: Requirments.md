## Team Deliverable #2: Requirements

Project Name - BubbleBots

Date: 10/1/2023

Location: Virtual (Discord)

Team Members: Nicholas Persley, Nicholas Robishaw, Elian Zamora-Rivera, Jeysen Angous, Tyler Chapp, Ibrahim Hmood

### 1. Positioning:
_Problem Statment_\
The problem of modern AI in games is that they can be boring and mundane, the players can't see what the AI is thinking. The impact of which is repetitive AI doing the same tasks and upcoming developers who study how to implement AI make the same mistake.

_Product Position Statement_\
For fellow gamers who want an exquisite challenge Bubble Bots is a website that allows players that love board games to play against an AI. unlike playing against a normal person. Our product allows the user to always play against a skilled AI and allows the difficulty to be changed depending on what the user’s skill level is. As well as allowing the player to actually see what the AI is thinking and doing in real time. The display output will change depending on the AI difficulty level.

_Value proposition and customer segment_\
Value proposition: Bubble Bots is a web based application that allows students, gamers, and developers to challenge AI and see what its thinking in real time, analyze what pattern the computer is taking and what it thinks is the best win option.\
\
Customer segment: AI game developers who are looking for better ways to make challenging AI algorithms. Regular gamers who are interested in the thinking path of a computer bot, and students who are brand new to the game development industry.



### 2. Stakeholders:

   1. **Gamers** - typical day-to-day gamers who love gaming, their responsibility is to play the game and engage with the gaming content.
   2. **Streaming Platforms** - platforms like Twitch and YouTube will stream/broadcast the website using ads featuring all the games to the global audience. It will promote viewer engagement by encouraging the players to visit the website and take part in the online gaming experience.
   3. **AI enthusiasts** - individuals who have a strong interest in AI and are interested in AI decision-making. Their responsibility is to see what decision(s) the AI makes in the game and to see the result of that game-making decision(s).


### 3. Functional requirements (features):
1. Web server
2. Statistics on how many people join the site and how many times a game is played
3. Various games for users to play
4. A homepage that provides easy access to all games
5. A homepage (may be separate from the one mentioned in (4)) that is an “about” page explaining to the user how/what the website works
6. AI agents for each game that calculates a position against the player, ultimately resulting in a somewhat intelligent move being played
7. AI agent explanation sections on the front-end when playing a game
8. Difficulty, depth of AI agent explanation, and explanation speed sliders/configuration for the user to change
9. “Play again” button, score counter (wins, losses, draws), and position calculation for each player, if applicable (e.g., Player1: 1, Player2: 2 for Tic-Tac-Toe)
10. Ability to get user feedback directly through the website



### 4. Non-functional requirements:
1. Portability: our system needs to be able to run on different platforms with minimal adaptation

- Measurement: Once we are able to interact with our site from Linux, Mac, and Windows systems.

2. Availability: our system needs to be available when users want to access it

- Measurement: Once our system is accessible 24/7.

3.  Usability: our system needs to be easy to use and understand

- Measurement: Positive user feedback.

4. Compatibility: Our system needs to be compatible with multiple systems.

- Measurement:  Once we are able to interact with our site from Linux, Mac, and Windows systems.

5. Scalability: Because we will start with a small number of games and increase games offered as well as potential users, our system will need to be scalable.

- Measurement: User numbers and user feedback.

6. Performance: our system needs to be able to handle all AI bot instances, as well as a varying number of users.

- Measurement: High user numbers.

### 5. Minimum Viable Product:
Our minimal viable product is a program that allows users to play against bots and shows to the user a list of decisions the bot is going through before making a move. Those are also the features we intend on validating. We intend on validating these features using early user feedback.

### 6. Use cases:
Elian:
| Use Case | Player uses website |
| --- | --- |
| Actor | Player |
| flow | -The player opens up the website <br /> -Player then chooses a game to play<br /> -Player set’s difficulty <br /> -Player plays game on set difficulty. <br /> -Player can replay games<br />-Player beats AI every time!|
| Alternative Flow | -The player opens up the website<br /> -Checks about tab to see how website works. <br /> -Players goes back to main screen<br /> -Player then chooses a game to play<br /> -Player set’s difficulty <br /> -Player plays game on set difficulty. <br /> -Player can replay games<br /> -Player beats AI every time! |

<img width="268" alt="Elian Diagram" src="https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/128747430/2f734e84-b42a-4fee-9116-8480c0811a8a">

<img width="399" alt="Interface Diagram" src="https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/128747430/172c8c8d-1cca-4cf9-a786-a8001da1fc87">


Nick R:
| Use Case | Player studying the bots |
| --- | --- |
| Actor | Student |
| Flow | -When logging onto the Bubble Bots website, the student plays a selection of games and records the AI’s moves and thoughts. The student writes the notes depending on the game style. The student plays the game. Then look at the text display next to the game window. Then I can try playing again to look for different outcomes. The student then eliminates all duplicate outcomes. |
| Alternative Flow | If the student doesn't get any different outcomes when trying different strategies against the bot then an issue can be reported to the game forms. |

![alt-text](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93451175/8b99ecec-b7e1-45c4-9f51-d280dad36df6)
![alt-text](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93451175/93271ee5-1dfb-4567-b534-80b055938003)


Jeysen:
| Use Case | Player visits BubbleBots.com |
| --- | --- |
| Actor | Player |
| Flow | The player sees all available games and makes a decision playing a board game <br /> player beats AI<br /> |
| Alternative Flow | Player changes the difficulty level of the game |

![Screenshot 2023-10-09 at 7 00 55 PM](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93228715/a1f926c2-b83d-4b5c-9bb2-4788f8f38cb1)
![Screenshot 2023-10-09 at 7 01 04 PM](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93228715/bce9b40a-4b2e-4bcb-bda2-ca023dbe82ab)

Ibrahim H:
| Use case | Player visits BubbleBots |
| --- | --- |
| Actor | Gamer |
| Flow | 1. Player opens BubbleBots home page<br />2. Player finds game to play<br />3. Player selects game to play |
| Alternative flow | 1. Player opens BubbleBots home page <br />2. Player visits BubbleBots about page |

![Use case](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/26929477/4856da3f-dfe9-4c46-9f46-7d65689dcb42)

![User interface](https://user-images.githubusercontent.com/26929477/271854803-d9fd3561-f836-4afc-b3c1-31b3bbcb8302.png)

Nicholas P:
| Use Case | Plays a game |
| --- | --- |
| Actor | Website User |
| The user will click on a provided game and start making moves against the Artificial Intelligence Agent |  |
| Alternative Flow 1 | Before the user plays the game, they change the difficulty, explanation depth/speed |
<img width="545" alt="General Use Case" src="https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/72055903/42775662-dbce-489c-89bf-7b66dbc4fb0f">
<img width="566" alt="Interface" src="https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/72055903/f79a035f-3db9-47de-8269-8f2428d7e31f">

Tyler C:
| Use Case | User submits feedback |
| --- | --- |
| Actor | Website User |
| Flow | User clicks on feedback button, the user fills out the feedback form and submits it, then the system acknowledges receiving feedback form. |
| Alternative Flow | User tries to submit feedback form without completing all mandatory fields |

![Capture](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/f693afab-48ab-4046-ad87-972bb1d27b62)

![ui_feedback](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/f5e6b10b-c4fe-4909-a460-04d56f9b8208)


### 7. User stories:
Elian:
1. As a gamer who loves board games I would like to challenge an AI to play games of my liking so that I can get the satisfaction of       beating AI
2. As a person who likes a challenge I want to play against an AI and see if the level of thinking is the same as mine.

Nick R:
1. As a game designer, I would like to learn how an AI thinks so I can implement it in my own games.
2. As a senior AI designer, I would like a way to test new AI algorithms connected to game based decisions so that I can see how strong the algorithms are.


Jeysen A:
1. As a game enthusiast who enjoys gaming during my free time, I want to be able to play board games online so that I can have an incredible gaming experience playing against an AI.
2. As a student who is currently enrolled in an HTML course, I want to learn the fundamentals of how online games that use AI work, so that in the future I can try to create my own board game that plays against the AI.

Ibrahim H:
1. As a gamer with no friends, I would like to be able to play board games with an AI, so that I can play my favorite board games.
2. As a software developer and a gamer, I would love to make an AI system for board games, so that I can learn how to make one for my favorite games.

Tyler C:
1. As a casual gamer, I want to easily play a game without a lengthy setup, so that I can have a quick gaming session whenever I have time.
2. As an AI enthusiast, I want to play a variety of games with AI bots, so that I can analyze move by move how AI makes decisions.

Nick P:
1. As a student in an Artificial Intelligence class, I want to get ahead of the class and learn intelligent decision making in a game setting.
2. As a person who plays board games, I want to be able to easily load-up a wide variety of games.


### 8. Issue Tracker:
Link: https://github.com/N1ckP3rsl3y/TheBubbleBots/issues
![Issue Tracker](https://user-images.githubusercontent.com/93228715/271760942-07a0b34f-44b7-41a4-9941-fecbc97e5f96.png)

