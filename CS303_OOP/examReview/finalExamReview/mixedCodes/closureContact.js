/* This factory function returns a closure.  Solution to exam 2 question. */
function makeContacts() {
    let contacts = [];

    function keepContacts(name) {
        let aContact = contacts.find(contact => (contact.name === name) ? true : false);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            contacts.push({
                name: name,
                phone: prompt("Please enter phone number: ")
            });
        }
    }
    return keepContacts;
}
// test it
const myContacts = makeContacts();
myContacts("Bill");
myContacts("Bob");
console.log("should find number for bill: " + myContacts("Bill"));