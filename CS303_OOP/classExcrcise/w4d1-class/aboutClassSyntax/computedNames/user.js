"use strict";

//Here’s an example with a computed method name using brackets [...]:

class User {

    //TODO - ['say' + 'Hi']() --> method name sayHi()
    ['say' + 'Hi']() {
        console.log("Hello");
    }

}
new User().sayHi();