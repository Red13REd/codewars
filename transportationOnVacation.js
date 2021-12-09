function rentalCarCost(d) {
    switch(d){
        case 1:
        case 2:
        return  d * 40
        case 3:
        case 4:
        case 5:
        case 6:
            return d * 40 - 20 
        default: return d * 40 - 50 
    }
      
    }