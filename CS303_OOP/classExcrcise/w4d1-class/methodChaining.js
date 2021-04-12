"use strict";

class User {

    constructor(email, name) {
            this.email = email;
            this.name = name;
            this.score = 0;
        }
        // class methods==>login()and logout
    login() {
        console.log(this.email, 'just logged in')
        return this
    }
    logout() {
        console.log(this.email, 'just logged out')
        return this
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this
    }
}
let userOne = new User("danny@gmail.com", "dan");
let userTwo = new User("daniel@gmail.com", "dannyyy");

userOne
    .login()
    .updateScore()
    .updateScore()
    .logout();

userTwo
    .login()
    .updateScore()
    .updateScore()
    .logout();