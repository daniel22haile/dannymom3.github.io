/*
Dear students - I have not seen anyone correctly implement the makeBank problem with a private
 transactionsDB.  In order to do this you will need to do something like the "Revealing Module" pattern.  
 Below is a skeleton of the solution code.  Here is a reference on the Revealing Module pattern: 
  https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html  .  
  If you google Revealing Module pattern you will see that it is widely discussed and used in modern 
  JavaScript.
*/
/**
 * @returns {object} bank with closure over the transactionsDB
 */
function makeBank() {
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] }
    ];
    const bank = {};
    bank.debit = function(id, amount) {
        bank.credit = function(id, amount) {
            return bank;
        }
    }
}
//const bank = makeBank();