function maximiseProfitFromStock(price) {
    let buyingPrice = price[0], maxProfit = 0;
    for(let i = 1; i < price.length; i++) {
        if(price[i] < buyingPrice) {
            buyingPrice = price[i];
        } else {
            maxProfit = Math.max(maxProfit, price[i] - buyingPrice);
        }
    }
    return maxProfit;
}

console.log(maximiseProfitFromStock([7, 1, 5, 3, 6, 4]));
console.log(maximiseProfitFromStock([7, 6, 4, 3, 1]));