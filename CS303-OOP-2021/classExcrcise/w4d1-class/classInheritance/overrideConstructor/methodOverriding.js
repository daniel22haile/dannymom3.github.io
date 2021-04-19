"use strict";
//Here’s the same code, but instead of this.name field we call this.showName() method:

class Animal {
    showName() { // instead of this.name = 'animal'
        console.log('animal');
    }

    constructor() {
        this.showName(); // instead of console.log(this.name);
    }
}

class Rabbit extends Animal {
    showName() {
        console.log('rabbit');
    }
}

new Animal(); // animal
new Rabbit(); // rabbit

/*
Please note: now the output is different.

And that’s what we naturally expect. When the parent constructor is called in the derived class, 
it uses the overridden method.
…But for class fields it’s not so. As said, the parent constructor always uses the parent field.

Why is there the difference?
Well, the reason is in the field initialization order. The class field is initialized:

    -> Before constructor for the base class (that doesn’t extend anything),
    -> Immediately after super() for the derived class.

In our case, Rabbit is the derived class. There’s no constructor() in it. 
As said previously, that’s the same as if there was an empty constructor with only super(...args).

So, new Rabbit() calls super(), thus executing the parent constructor, and 
(per the rule for derived classes) only after that its class fields are initialized. 
At the time of the parent constructor execution, there are no Rabbit class fields yet, 
that’s why Animal fields are used.

This subtle difference between fields and methods is specific to JavaScript
Luckily, this behavior only reveals itself if an overridden field is used in the parent constructor. 
Then it may be difficult to understand what’s going on, so we’re explaining it here.

If it becomes a problem, one can fix it by using methods or getters/setters instead of fields.
*/