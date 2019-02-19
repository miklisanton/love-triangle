/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  

let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let y = preferences[i] - 1;
      if (y == i) continue;
      let z = preferences[y] - 1;
      if (y == z) continue;
      let p = preferences[z] - 1;
      if (p == z) continue;
      if (p == i) {
          count++;
      }
   }
   return count / 3;

};
