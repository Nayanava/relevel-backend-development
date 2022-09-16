function circularTour(petrol, distance) {
    let totalRemainingPetrol = 0, remainingPetrolNow = 0;
    let startingPoint = 0;

    for(let i = 0; i < petrol.length; i++) {
        totalRemainingPetrol += petrol[i] - distance[i];
        remainingPetrolNow += petrol[i] - distance[i];
        if(remainingPetrolNow < 0) {
            remainingPetrolNow = 0;
            startingPoint = i+1;
        }
    }

    return totalRemainingPetrol >= 0 ? startingPoint : -1;
}
