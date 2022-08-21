

//TODO : Implement logic to move up when moving down and moving backward are blocked



 
/* This function mainly uses solveTheMaze()
    to solve the problem. It returns false if no
    path is possible, otherwise return true.*/
function findThePath(maze)
{
    size = maze.length;
    if(size>=10) {
        return false;
    }

    //maze should have same number of rows and columns

    for(let k=0; k<size; k++) {
        if(maze[k].length!=size)
        return false;

    }
    //inititaing the backtrackingArray array for backtracking and initializing all the elements as 0
    let backtrackingArray = new Array(size);
    for(let i=0;i<size;i++)
    {
        backtrackingArray[i]=new Array(size);
        
        for(let j=0;j<size;j++)
        {
            backtrackingArray[i][j]=0;
        }
    }
  
        if (CoreLogicofMaze(maze, 0, 0, backtrackingArray) == false) {
           
            return false;
        }
  
       
        return true;
}

function CoreLogicofMaze(maze,x,y,backtrackingArray)
{
    // reached to the goal (at the end)
        if (x == size - 1 && y == size - 1
            && maze[x][y] == 1) {
            backtrackingArray[x][y] = 1;
            return true;
        } 
  
       
        if (isPathExists(maze, x, y) == true) {

              if (backtrackingArray[x][y] == 1)
                  return false;
            
            // mark x, y as part of solution in backtracking array
            backtrackingArray[x][y] = 1;
  
            /* Move forward in x direction */
            if (CoreLogicofMaze(maze, x + 1, y, backtrackingArray))
                return true;
  
            /* If moving in x direction doesn't give
            solution then Move down in y direction */
            if (CoreLogicofMaze(maze, x, y + 1, backtrackingArray))
                return true;
            
            /* If moving in y direction doesn't give
            solution then Move backwards in x direction */
            if (CoreLogicofMaze(maze, x - 1, y, backtrackingArray))
                return true;

            //move upward in y direction     

            if (CoreLogicofMaze(maze, x , y-1, backtrackingArray))
                return true;
            //unmark the solution if nothing works 
                backtrackingArray[x][y] = 0;
                return false;    

            
        }
  
        return false;
}
let size;

function isPathExists(maze,x,y)
{
    // if (x, y outside maze) return false
    return (x >= 0 && x < size && y >= 0
        && y < size && maze[x][y] == 1);
}
 



module.exports = findThePath;

