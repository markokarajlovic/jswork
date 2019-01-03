/* function min(a,b){
    if(a<b){
        return b;
    }
    else return a;
}
console.log(min(0, 10));
console.log(min(0, -10)); */


/* function isEven(a) {
    if (a == 0) {
        return true;
    }
    else if (a == 1) {
        return false;
    }
    else if (a < 0) {
        return isEven(-a);
    }
    else {
        return isEven(a - 2);
    }
  } 
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false
*/


/* function countChar(string, ch) {

    let count = 0;

    for(let i = 0; i<string.length;i++){
        if(string[i]==ch){
            count++;
        }
    }
    return count;
    
  }
  
  function countBs(string) {
    return countChar(string,"B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4 */