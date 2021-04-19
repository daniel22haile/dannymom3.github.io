"use strict";
/*
For instance, we have Article objects and need a function to compare them. 
A natural solution would be to add Article.compare method, like this:
*/
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// usage
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

// articles.sort(Article.compare);
console.log(articles.sort(Article.compare));
/*
todo - OUTPUT
[
  Article { title: 'CSS', date: 2019-01-01T06:00:00.000Z },
  Article { title: 'HTML', date: 2019-02-01T06:00:00.000Z },
  Article { title: 'JavaScript', date: 2019-12-01T06:00:00.000Z }
]
*/

console.log(articles[0].title); // CSS

/*
Here Article.compare stands “above” articles, as a means to compare
 them. It’s not a method of an article, but rather of the whole class.
*/