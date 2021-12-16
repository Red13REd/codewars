function isDivisible(n, x, y) {
  
    let first = n % x
    let second = n % y
   
   return first === 0 && second === 0 ? true : false
     
   }