node1 = {
    value: 50,
    next: null
};
head = {
    value: 10,
    next: node1
};


//-----------------
node2 = {
    value: 15,
    next: null
};

node1 = {
    value: 50,
    next: node2
};

//Declare a new node, node2, with value 15.  Modify node1 to 
//add node2 to the end of the list.







//TODO - 
node1 = { value: 50, next: null };
head = { value: 10, next: node1 };


//Add a node with value 5 to the beginning of the list

let newNode = {
    value: 5,
    next: head
}

//TODO - Insert a node with value 8 in the middle of the list 
node1 = { value: 50, next: null };
head = { value: 10, next: node1 };

let newNode = {
    value: 8,
    next: node1
}
head.next = newNode;