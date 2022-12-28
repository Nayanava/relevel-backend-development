/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(petrol, distance) {
    let totalAvailablePetrol = 0, totalRequiredPetrol = 0;
    for(let i = 0; i < petrol.length; i++) {
        totalAvailablePetrol += petrol[i];
        totalRequiredPetrol += distance[i];
    }
    if(totalAvailablePetrol < totalRequiredPetrol) {
        return -1;
    }

    let totalAvailableGas = 0, startingPoint = 0;
    for(let i = 0; i < petrol.length; i++) {
        totalAvailableGas += petrol[i] - distance[i];
        if(totalAvailableGas < 0) {
            totalAvailableGas = 0;
            startingPoint = i+1;
        }
    }
    return startingPoint;
};