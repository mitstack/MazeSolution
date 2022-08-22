# MazeSolution
- This is an interesting maze to solve. For simplicity sake I am using same number of rows and columns (meaning maze array length is same as number of elements in individual  array)
and moving in right, left and bottom direction only (need to implement upward).
1's meaning path is open 
0's meaning path is blocked

# Future Enhancements
Todo:
- I will be implementing logic to move upward (Y+1) in Y-axis.
- This maze can be of any number of rows and columns (within specified limit to prevent stack overflow and array outofbound exceptions)

# How To Run the code
- install node JS
- clone the repo or download the code
- download dependencies via yarn or npm package manager (it is using jest for unit testing) CLI - yarn install 
- CLI command to run unit tests : yarn run jest

# unit testing coverage 
- Covered positive scenarios
- Covered negative scenarios (try to break it in several ways :) by entering different number of rows and columns, cause infinite loop, randowm arrays, excercise all 4 paths)
- Todo implementation scenarios should not crash the program. It should handle the exceptions gracefully 
![image](https://user-images.githubusercontent.com/98483366/185811319-87387810-26a7-458a-afc3-74dcdc5e7906.png)
