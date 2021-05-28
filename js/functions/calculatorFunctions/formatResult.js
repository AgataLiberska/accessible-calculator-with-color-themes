import getDigitCount from './getDigitCount.js';
import isFloat from './isFloat.js';

function formatResult(result, maxLength) {
    //the result value passed here is a number
    const precision = 10;

    // if the result is longer than the max length
    if( getDigitCount(result) > maxLength) {
        //if it's a float
        if (isFloat(result)) {
            //check no of digits before decimal
            const resultInt = parseInt(result);
            const resultIntLength = getDigitCount(resultInt);

            //if more than max length
            if (resultIntLength > maxLength) {
                return result.toLocaleString('en-UK', { maximumSignificantDigits: precision })
            }
            //if less then we can display something after decimal point
            else {
                const digitsAfterDecimal = maxLength - resultIntLength;

                return result.toLocaleString('en-UK', { maximumFractionDigits: digitsAfterDecimal} );
            }
        }

        else {
            return result.toLocaleString('en-UK', { maximumSignificantDigits: precision })
        }
    }
    
    return result.toLocaleString('en-UK')
    //this has to return a string
}

export default formatResult;