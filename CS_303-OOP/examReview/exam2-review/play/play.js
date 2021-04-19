function User(first, last) {
    this.first = first;
    this.last = last;
}

let user1 = Object.create(User.prototype);
user1 = new User("me", "you");
console.log(user1.first);
console.log(user1);