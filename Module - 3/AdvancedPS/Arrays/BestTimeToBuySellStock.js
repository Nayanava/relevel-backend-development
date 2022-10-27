/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    for(let price of prices) {
        if(price > buyPrice) {
            profit = Math.max(profit, price - buyPrice);
        } else {
            buyPrice = price;
        }
    }
    return profit;
};