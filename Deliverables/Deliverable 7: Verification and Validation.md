## Team Deliverable 7: Verification and Validation
Project Name - BubbleBots

Date: 11/28/2023

Location: Virtual (Discord)

Team Members: Nicholas Persley, Nicholas Robishaw, Elian Zamora-Rivera, Jeysen Angous, Tyler Chapp, Ibrahim Hmood

## Description

## Verification
For verification testing, we decided to go with the Jest framework to isolate and test our JavaScript classes. Jest is a popular, open-source testing framework that focuses on reactive websites' correctness. \
[Automated Verification Test](https://github.com/N1ckP3rsl3y/TheBubbleBots/blob/main/testing/acceptance_test.py](https://github.com/N1ckP3rsl3y/TheBubbleBots/blob/main/testing/test.board.js)
) \
[Example Verificaiton Test](https://github.com/N1ckP3rsl3y/TheBubbleBots/actions/runs/7078527014/job/19264113247](https://github.com/N1ckP3rsl3y/TheBubbleBots/actions/runs/7081416957/job/19270663766)
) \
In this verification test, we are testing the functionality of the sliders on the gameboard. This test creates a mock gameboard and slider objects locally and separates them from the other dependencies to run an independent test. To test the functionality of the slider, we essentially adjust each slider from 50 to 0, and back to 50 to ensure the proper changes are reflected in real-time on the slider. 

![verification_test](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/75ec7785-6149-48e2-8fbf-9563ffa74e6f)

## Acceptance Test
For acceptance testing, we decided to use Selenium delivered via the Pytest Python library. Selenium is an open-source testing framework that focuses on browser automation and supports a huge number of programming languages.\
[Automated Acceptance Test](https://github.com/N1ckP3rsl3y/TheBubbleBots/blob/main/testing/acceptance_test.py) \
[Example Acceptance Test](https://github.com/N1ckP3rsl3y/TheBubbleBots/actions/runs/7078527014/job/19264113247) \
In this acceptance test, we are creating an internet browser environment that first navigates to our website. After doing so, the test will then search for our button objects and press each of them. Upon clicking the links, we ensure that we actually navigate to the desired destination and that those buttons are functioning visually from a user interface standpoint. Lastly, the test checks that the desired page is properly loaded and visually available. 


![acceptance_test](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/dc4494ef-fde0-49cd-b6d0-9c74e3178996)

## Validation

### Interview #1
Jered Angous (interviewee)  
Jeysen Angous (interviewer)
1. Could you work with the website for a few minutes and let us know what your first impressions are?  
   * Very Simple and Straightforward
2. How would you compare this to actual checkers?  
   * This checkers game is more diverse by having game difficulty, verboseness, and explanation speed along with the visualization.
3. What is your least favorite aspect of the website?
   * Make the gameboard bigger and the settings smaller.
5. What is your favorite aspect of the website?  
   * The simplicity of the website
6. What recommendations do you have for the website?
   * Add a new game option where the game resets if a player wants to quit midgame
8. Would you recommend this website to others?  
   * Yes
9. Do you like the look and feel of the website?  
   * Yes
10. Do you think the website is easy to navigate?  
    * Yes
11. Do you like the how-to-play section on the About page?  
    * Yes, it's great
   
### Interview #2
Gabriella Lara (interviewee)  
Elian Zamora (interviewer)

1. Could you work with the website for a few minutes and let us know what your first impressions are?
   * It looks really nice and I like the colors you guys used for the sliders.
2. How would you compare this to actual checkers?
   * It plays exactly the same.
3. What is your least favorite aspect of the website?
   * I just don’t like that the pieces don’t slide with the mouse. 
4. What is your favorite aspect of the website?
   * I really like the layout of it and the colors that were used. 
5. What recommendations do you have for the website?
   * I think you guys should add the animation for the pieces to move. 
6. Would you recommend this website to others?
   * Yes the game was really fun and it was cool to play against a computer. 
7. Do you like the look and feel of the website?
   * Yes the website looks really cool and professional 
8. Do you think the website is easy to navigate?
   * Yes it was easy to get to the game page and the about page as well. 
9. Do you like the how-to-play section on the About page?
   * Yes, even though i already know how to play checkers it’s a good thing to have for people that don’t know how to play.

### Interview #3
Nick R (interviewer) \
Aaron  (interviewee)

1. Could you work with the website for a few minutes and let us know what your first impressions are?
   * I was very confused because I could not move any of the checkers on the board, and it seems like the board was stretching below my screen, if that makes sense. I realized after I skipped the about page. Maybe having a button next to the start here button that says tutorial will be helpful.

2. How would you compare this to actual checkers?
   * I think it's very similar to checkers, I like how responsive it is.
3. What is your least favorite aspect of the website?
   * The weird background. The bugs I experienced as well.
4. What is your favorite aspect of the website?
   * I like how fast the pieces move in the game.
5. What recommendations do you have for the website?
   * A better background image and sounds for when the checkers move.
6. Would you recommend this website to others?
   * Yes, if they want to play checkers online
7. Do you like the look and feel of the website?
   * I like the feel, but the look could be a little better
8. Do you think the website is easy to navigate?
   * I think this website is pretty easy to navigate and really fast.
9. Do you like the how-to-play section on the About page?
   * Yes, I think it would be cool if it had a pop-up I could reference while on the game page.

### Interview #4
Nick R (interviewer) \
James  (interviewee)

1. Could you work with the website for a few minutes and let us know what your first impressions are? 
   * Good functionality, but was slightly confused on what the website was about upon arrival. Also had issues starting the game. 
2. How would you compare this to actual checkers? 
   * Similar, but does need some tweaking ('Kinging' at the opposite end, pawns switch sides halfway through the board, can move backwards, and the lack of the ability to double jump)
3. What is your least favorite aspect of the website? 
   * The 'About' page font was way too large. 
4. What is your favorite aspect of the website? 
   * The ability to play Checkers quick & easy, with adjustable difficulty sliders. 
5. What recommendations do you have for the website?
   * Adjustments to the 'About' page, less extreme colors, & landing page needs tweaking (not much to catch the eye or explain why someone should continue through your website) 
6. Would you recommend this website to others? 
   * Yes 
7. Do you like the look and feel of the website? 
   * Navigation FEELS good 
8. Do you think the website is easy to navigate? 
   * Yes, very 
9. Do you like the how-to-play section on the About page? 
   * No, text is too large, & 'About Us' & 'How to Play' run together; eye soar

### Interview #5
Nick P (interviewer) \
Aidan  (interviewee)
1. Could you work with the website for a few minutes and let us know what your first impressions are? 
   * Neatly designed.
   * Easy to move the checker pieces.
   * The sliding bars for difficulty levels is a great idea and easy to use. 
2. How would you compare this to actual checkers? 
   * I think the movements are a lot clearner, however, it is slightly harder to see what move the AI made.
3. What is your least favorite aspect of the website? 
   * The sliders for difficulty etc.
4. What is your favorite aspect of the website? 
   * The movement from the AI, stiff hard to tell what exactly has happened quickly.
5. What recommendations do you have for the website?
   * The checkboard looks a little funky that could maybe be redesigned.
   * The line that says "this is where the visualization will be" is somewhat distracting and could be moved.
6. Would you recommend this website to others? 
   * Yes 
7. Do you like the look and feel of the website? 
   * Yes, the colors are nice and don't hurt the eyes from being too bright.
8. Do you think the website is easy to navigate? 
   * Yes 
9. Do you like the how-to-play section on the About page? 
   * There is a lot of scrolling for the how-to-play section that makes it somewhat hard to read. Other than that yes, very nice well done!

### Results
After reading the above interview responses using the given script, the things we have learned are:
* The best features were the settings sliders with their design along with functionality of the board. 
* The features that need work are the boards and overall design. One thing to change on the overall design are the colors, which can be seen, so it may be best to dull the colors.
* Overall, the concenus is that the website is easy to use and does not have much of a learning curve. For the most part, it was found that the website was easy to use without much complaint.
* We allowed the users to roam free on the website for a few minutes so they can test it for themselves. The team believed that having the user do specific tasks may limit them from finding functionality they wouldn't find otherwise, whether they are bugs or expected functionality.
* When working with the website, our interviewees found the look and feel, and navigation, for the most part, pleasing. They were able to make moves as they would expect in Checkers and have fun with the design of the sliders.
* Some things that need to be worked on going forward are the board and parts of the design. The board currently goes off screen for most, so this should be fixed if we want everyone to be able to use it properly. The design, like the about page and landing page need to be changed to either fit the screen to represent our project in the best manner.
