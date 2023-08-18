# dog-walking

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