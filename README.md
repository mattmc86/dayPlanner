# dayPlanner

About The Project 
This project is to create a simple day planner for entering tasks during a typical 9-5 day. The current time is displayed at the top and the day is split into hour timeblocks. There is logic to colour code the timeblocks depending on the current time and whether the block is in the current hour, the past or the future. Any items entered by the user are saved in local storage so even after the page is refreshed they are still displayed.

Built With HTML CSS Javascript and jQuery.

User Instructions:
Enter a task into one or more of the hours and click the save icon.


Roadmap 
The current build satisfies all of the acceptance criteria but a future improvement would be to add a clear button so the user can clear all the entries. I would also look at adding a feature to prevent the user from adding tasks into a timeblock in the past. From a technical perspecive there is a lot of code refinement which could be done. During testing I discovered when entering a new item it was overiding the previous one in storage so a quick fix was to give each button its own class but it would be better to have one button and would help reduce the amount of code used.

Contact Name: Matthew McKenna email:matthewmckenna1986@hotmail.com

Project Link: https://mattmc86.github.io/dayPlanner/