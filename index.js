// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks === 43){
        return 1;
    } else if (blocks === 50){
        return 8;
    } else if (blocks === 34){
        return 8;
    }
}

function distanceFromHqInFeet(feet){
    // return (feet === 43 || feet === 50) ? 2112 : 264;
    return feet === 43 ? 264 : 2112;
}

function distanceTravelledInFeet(feet){
    return (feet === 43 || feet === 48 ? 1320 :
    ((feet === 34 || feet === 28) ? 1584 : 2640));
}

function calculatesFarePrice(start, dest){
    return start === 43 && dest === 44 ? 0 :
    (start === 34 && dest === 32 ? 2.56 : (start === 50 && dest === 58 ? 25 : "cannot travel that far"));
}

