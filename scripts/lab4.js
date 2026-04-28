/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        const n1 = Number(num1);
        const n2 = Number(num2)

        if (isNaN(n1) || isNaN(n2)) {
                return false;
        }
        return n1 + n2;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || isNaN(Number(discount)) || prices.length === 0) {
        return false;
    }
    
    const discounted = []
    const length = prices.length;
        
    for(let i = 0; i < length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    return discounted;
}

module.exports = {sumValues, discountPrices};
