Total Bugs:
    Main - 1 (1/1 DONE)
    CityList - 3 (3/3 DONE)
    Walkers - 3 (3/3 DONE)
    Assignments - 3 (3/3 DONE)
    CSS - 3 (3/3 DONE)


1. Fixed the 404 Error - in main.css it was importing detail.css instead of correctly importing details.css

2. Fixed the requested modeule error - walkers.js was trying to import getWalker instead of correctly importing getWalkers

3. Fixed the getWalker is not defined error - CityList.js was trying to invoke getWalker instead of correctly invoking getWalkers

4. Fixed the currentWalker is not defined error - CityList.js was trying to find the property of currentWalker instead of correctly finding the property of walker

5. Fixed the findPetWalker is not defined error - Assignments.js was trying to invoke the findPetWalker funciton instead of correctly invoking the findWalker function

6. Fixed the allWalkers is not defined error - Assignments.js has a function called findWalker with two parameters. One of the parameters was set to allWalker instead of being correctly defined as allWalkers

7. Fixed main.css page to have the class of .details be displayed in flex

8. Fixed CityList.js to insert a <ul> instead of an <ol> to get rid of the nubmers beside the cities

9. Fixed Walkers.js to have the correct template literal, it was using .fullName instead of correctly looking for the .name property of the walker object

10. Fixed Walkers.js to return walkerHTML

11. Fixed main.js to template literal the function of RegisteredPets()

12. Fixed Assignments.js to have assignmentHTML in the for loop be += to a string instead of just = to a string. Without the += it was overwriting its value each time the for of loop ran.

13. Removed flex-basis from .details--column in details.css, and replaced it with width: 100% to fix the width of the containers

14. Added a margin of 10px to to the .details--column h2 element

*********************EXPLORER CHAPTERS*********************

Your task for this Explorer Chapter is to think about, discuss, and design a plan for how to ensure that each city only shows up once in the city list. Over time, there may be dozens of walkers working in a single city as DeShawn's business grows.

Consider making the city property on a walker a foreign key instead of a string value. Design an algorithm before you make any code changes.

Remember that your job is to solve the problem, and then write the code for the solution. Never try to solve a problem with code.

What impact would this have in the database module?

    This change would require a new array of cities, all with a unique id. This id would then be used to replace the city string in the walker objects to assign a city.

How would the algorithm for the walker click event be affected?

    Currently the database houses the city of a walker as a string, then uses this string to display the name of the city a walker works in when they are clicked on. Changing this property to a foreign key, by having it match the id of a city, it would require a for...loop to correctly display the information durring click event.

Are there any new dependencies needed for the project?

    At the moment, I don't think so. But this is likely to change.