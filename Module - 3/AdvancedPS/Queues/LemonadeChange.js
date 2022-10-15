/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let notesOf5 = 0, notesOf10 = 0;
    for(const bill of bills) {
        if(bill === 5) {
            notesOf5++;
        } else if(bill === 10) {
            if(notesOf5-- === 0) {
                return false;
            }
            notesOf10++;
        } else {
            if(notesOf5 === 0) {
                return false;
            }
            if(notesOf10) {
                notesOf10--;
                notesOf5--;
            } else {
                notesOf5 -= 3;
            }
            if(notesOf5 < 0) {
                return false;
            }
        }
    }
    return true;
};