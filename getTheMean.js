function getAverage(marks){
    if(marks.length > 0){
     return Math.floor(marks.reduce((a, b) => (a + b)) / marks.length);
   }else{
     return 0
   }
   }