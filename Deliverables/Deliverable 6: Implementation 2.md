## Team Deliverable 6: Implementation 2
Project Name - BubbleBots

Date: 11/19/2023

Location: Virtual (Discord)

Team Members: Nicholas Persley, Nicholas Robishaw, Elian Zamora-Rivera, Jeysen Angous, Tyler Chapp, Ibrahim Hmood

### Introduction
  BubbleBots is an educational website that provides an AI for users to play checkers against. Said AI will provide users information such as explanations for the moves it made, and what it is currently “thinking” (the moves it is considering making). It will show what the AI is thinking visually and textually, using a game tree and providing English-formatted text (text that also describes what the AI is thinking). This very much covers its features. BubbleBots has a page that includes a checkers game board and an AI for users to play against. This AI will provide explanations to the end user, allowing them to do things such as see what the AI is thinking. BubbleBots’ source code can be found at [this github repository](https://github.com/N1ckP3rsl3y/TheBubbleBots).

### Requirements

Elian:
Requirements: As someone who likes to help, I want the ability to give feedback on the website if something goes wrong.\
Issue: <https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/25> \
Pull request: <https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/59> \
Implemented by: Elian Zamora \
Approved by: Tyler Chapp, Ibrahim Hmood, Nick Persley \
Print screen:![Feedback Page](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/128747430/b4158a18-1c97-42be-8800-3937440d51f9)

Ibrahim: \
Requirement: As someone who likes to help, I want the ability to give feedback on the website if something goes wrong. \
Issue: [25](https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/25) \
Pull request: [59](https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/59) \
Implemented by: Ibrahim Hmood \
Approved by: Nicholas Persley and Tyler Chapp

Jeysen A:  
Requirement: As someone who likes to be informed, I would like a place to read about the website before I use it  
Issue: https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/24  
Pull request: https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/59  
Implemented by: Jeysen Angous  
Approved by: Nicholas Persley, Elian Zamora, and Nicholas Robishaw \
Print screen:![aboutpage](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93228715/9ea55c3b-73f5-49e3-a3d1-64ee59a28875)

Nick P: \
Requirements: As a fan of online games, I would like to play Checkers against an AI bot.\
Issue: https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/23 \
Pull request: https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/55 \
Implemented by: Nicholas Persley \
Approved by: Tyler Chapp and Ibrahim Hmood

Nick R: \
Requrements: As a fan of online games, I would like to play Checkers against an AI bot.\
Issue: https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/23 \
Pull request: https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/55 \
Implemented by: Nicholas Robishaw \
Approved by: Nick Persley and Tyler Chapp \
Print screen: ![image](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/93451175/8594ffd8-0914-46bd-b59b-0fdbb879dba7)

Tyler:\
Requirement: As a fan of online games, I would like to play Checkers against an AI bot.\
Issue: https://github.com/N1ckP3rsl3y/TheBubbleBots/issues/23 \
Pull request: https://github.com/N1ckP3rsl3y/TheBubbleBots/pull/55 \
Implemented by: Tyler Chapp \
Approved by: Nicholas Persley and Ibrahim Hmood

### Tests
BubbleBots utilizes the unit testing frameworks Pytest and Jest to test code in with python and javascript respectively. The functionality of our C server is being tested with the Pytest requests package which ensures the website's necessary files are being delivered. Our Jest javascript tests are testing the basic functionality of our checkers game. These tests are set to automatically build a testing environment and run both tests anytime a commit occurs in our GitHub repository. A more detailed example of how we are testing the functionality of the checkers game, with Jest, is with an element called query selector. This testing element searches a page’s script for specified objects. In the case of our Jest file, we search for the existence of our black and red game pieces which confirms proper rendering.

[Testing Directory](https://github.com/N1ckP3rsl3y/TheBubbleBots/tree/main/testing) \
[Gameboard Test](https://github.com/N1ckP3rsl3y/TheBubbleBots/blob/feature_playcheckers/testing/__tests__/index.test.js)

![github_action1](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/fadec4da-aaa1-4ee5-b61e-11fa5b1000a5)
![github_action2](https://github.com/N1ckP3rsl3y/TheBubbleBots/assets/95588532/15603f31-d4b6-4dc3-be50-ef0779b1c02a)

### Demo
https://youtu.be/9vhV1RiNQRk 

### Code quality
- The team is using two programming languages which are C and JavaScript as well as two web programming scripting languages which are HTML, and CSS. Furthermore, coding style tests like cpplint, ESLint, atatus, and csslint are used that meet the coding standards. After a team member writes a piece of code another team member views the code and tries to identify any bugs and or ways to improve the code following the coding standards. Automated testing for both C and JavaScript programming languages is used. Lastly, the team does weekly maintenance in ways to improve code quality and take care of any issues that arise.
### Lessons Learned

- The main lesson learned is that development will most likely take a lot longer than originally planned. Going into this, the plan was to have a fully functional AI bot to play checkers against. But problems come up and more time must be allowed for this. So, when dealing with implementations, it is best to start earlier than later no matter the section of the program.
- Throughout a couple of implementations, it has become clear that knowledge on GitHub could be improved upon. So, throughout the deliverables, the team has started to learn about GitHub and as a result can build upon that knowledge. This is important since GitHub is a program that will most likely be used in industry.
- The above points are the main problems/lessons from this implementation. If we were to continue with this implementation, we would attempt to start the assigned implementations as soon as possible. While the fact is that the semester may not allow for this, it would be better to start earlier than cram things in the last three days. And continuing to use GitHub would be a priority because of its functionality and usefulness it provides for developers, along with the fact that it would be better to learn during school than when in a new job.
