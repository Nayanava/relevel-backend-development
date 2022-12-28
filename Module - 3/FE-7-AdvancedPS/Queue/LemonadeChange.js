/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let fiveDollarNotes = 0, tenDollarNotes = 0;
    for(const bill of bills) {
        if(bill === 5) {
            fiveDollarNotes++;
        } else if (bill === 10) {
            if(fiveDollarNotes === 0) {
                return false;
            } 
            fiveDollarNotes--;
            tenDollarNotes++;
        } else {
            if(tenDollarNotes && fiveDollarNotes) {
                tenDollarNotes--;
                fiveDollarNotes--;
            } else if(tenDollarNotes === 0) {
                if(fiveDollarNotes < 3) {
                    return false;
                }
                fiveDollarNotes -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};