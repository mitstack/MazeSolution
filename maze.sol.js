



//input :  array of array i.e a maze 
//for simplisity sake it should have same rows and columns 4 *4 

//TODO : Implement logic to move up when moving down is blocked

let maze=[[ 1, 0, 0, 0 ],
          [ 1, 1, 1, 1 ],
          [ 0, 1, 1, 0 ],
          [ 1, 0, 1, 1 ] ];
let size = maze.length;



 
/* This function mainly uses solveTheMaze()
    to solve the problem. It returns false if no
    path is possible, otherwise return true.*/
function findThePath(maze)
{

    if(size>=100) {
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
  
        if (solveTheMaze(maze, 0, 0, backtrackingArray) == false) {
           
            return false;
        }
  
       
        return true;
}

function solveTheMaze(maze,x,y,backtrackingArray)
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
            if (solveTheMaze(maze, x + 1, y, backtrackingArray))
                return true;
  
            /* If moving in x direction doesn't give
            solution then Move down in y direction */
            if (solveTheMaze(maze, x, y + 1, backtrackingArray))
                return true;
            
            /* If moving in y direction doesn't give
            solution then Move backwards in x direction */
            if (solveTheMaze(maze, x - 1, y, backtrackingArray))
                return true;
        }
  
        return false;
}


function isPathExists(maze,x,y)
{
    // if (x, y outside maze) return false
        return (x >= 0 && x < size && y >= 0
                && y < size && maze[x][y] == 1);
}
 

let result = findThePath(maze);
console.log(result);

