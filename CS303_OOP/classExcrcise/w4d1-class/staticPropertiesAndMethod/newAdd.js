"use strict";
/*
A recent addition
This is a recent addition to the language. Examples work in the recent Chrome.
Static properties are also possible, they look like regular 
class properties, but prepended by static:
*/
class Article {
    static publisher = "Ilya Kantor";
}
console.log(Article.publisher); // Ilya Kantor