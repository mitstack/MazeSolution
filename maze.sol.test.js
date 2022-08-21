
const findThePath = require('./maze.sol');


  
  describe('positive test', () => {
    

      it('All elements are open', () => {
        expect(findThePath([[
             1, 1, 1, 1 ],
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 1 ] ])).toBe(true);
      });

      it('Excercise x-1 path (backward tracing)', () => {
        expect(findThePath([
            [ 1, 0, 0, 0 ],
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 0 ],
            [ 1, 1, 1, 1 ] ])).toBe(true);
      });

      it('Excercise x-1 path multiple times', () => {
        expect(findThePath([
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 0 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 1, 1 ] ])).toBe(true);
      });

    
  
   
  });


  describe('Negative test', () => {
    

    it('Path is closed', () => {
      expect(findThePath([[
           1, 1, 1, 1 ],
          [ 1, 1, 1, 1 ],
          [ 1, 1, 1, 1 ],
          [ 1, 1, 1, 0 ] ])).toBe(false);
    });

    it('infinite loop', () => {
      expect(findThePath([
          [ 1, 0, 0, 0 ],
          [ 1, 1, 1, 1 ],
          [ 1, 1, 1, 0 ],
          [ 1, 1, 0, 1 ] ])).toBe(false);
    });

    it('stack overflow exception', () => {
        expect(findThePath([
            [ 1, 0, 0, 0 ],
            [ 1, 1, 1, 1 ],
            [ 1, 1, 1, 0 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],
            [ 1, 1, 0, 1 ],

         ])).toBe(false);
      });

      it('Different number of rows and columns', () => {
        expect(findThePath([
            [ 1, 0, 0, 0 ],
            
         ])).toBe(false);
      });

      it('Excercise all 4 routes', () => {
        expect(findThePath([
            [ 1, 0, 0, 0, 1, 1],
            [ 1, 0, 1, 0, 1, 1],
            [ 1, 0, 1, 1, 1, 1],
            [ 1, 0, 0, 1, 1, 1]
            [ 1, 0, 1, 1, 1, 1],
            [ 1, 0, 1, 0, 1, 1],
            [ 1, 1, 1, 1, 0, 1]
            
         ])).toBe(false);
      });


  

 
});
    



