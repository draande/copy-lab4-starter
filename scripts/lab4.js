/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        // changed "0" to "num1 + num2"
        const result = num1 + num2;

        // remove "result = num1 + num2;"

        return result;
    }
    else {
        // changed "!add" to "false"
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
    // add: if the array is empty, false
    if (prices.length === 0) {
        return false;
    }
    
    const discounted = []
    const length = prices.length;
    
    // remove "let discountedPrice = 0" 
    
    for(let i = 0; i < length; i++) {
        // "let" and replace "+=" with "="
        let discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};
