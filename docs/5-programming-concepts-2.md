---
prev: ./4-markup-languages.md
next: ./6-interpreted-languages.md
---
# Programming Concepts 2

## Arrays and other Data Structures

Variables are incredibly useful, but if the only types of variables programmers had at their disposal were numbers, strings, and booleans, we would be limited in what we could accomplish.

If you worked on the Kindle development team at Amazon, you'd have to figure out how to store a book in your code and display it to a reader. You could store every page as a `string` variable, but that would be very tedious and you would have to know how many pages are in every book so each page could have its variable created -- yuck.

```javascript
var page1 = 'In the beginning, there was a lot of words on page 1.'
var page2 = 'Then on page 2, some more stuff happened.'
var page3 = 'Finally, things concluded on page 3'
console.log(page1)
console.log(page2)
console.log(page3)
```

You may be able to see how a 300 page book would be painful with this model. Thankfully, we have more advanced types of variable at our disposal.

There are many data structures, for this class we're going to focus on Arrays, also known as Lists. Code.org has a great series of videos introducing arrays

* [Introduction to Lists][3]
* [Accessing elements in a list][4]
* [Updating and adding elements in a list][5]
* [Getting the length of a list][6]

**How would you change in the Kindle example above using arrays?**

One way is outline below. NOTE: the specific syntax will be different depending on the language.

Create an array and assign it to the variable `book`

`var book = []`

Add each page as a `string` of words to the array.

```javascript
book.push('In the beginning, there was a lot of words on page 1.')
book.push('Then on page 2, some more stuff happened.')
book.push('Finally, things concluded on page 3')
```

That doesn't look too different from the example above. If we had a 300 page book, we would still need 300 `.push` statements to add them all to the `book` array. The powerful change comes when you try to print.

```javascript
for (page in book){
    console.log(page)
}
```

We'll talk about loops below. Read the code above as "for each page in the array named book, print that page". This is an amazing savings, because it works for a 1, 100, or 1000 page book. The `for` loop processes the array the same, without you having to know how many pages.

## Control Structures

To solve real-world problems, we use control structures which allow our code to flow logicly similar to the way our brains do. For example, how would you explain the rules of the game "Rock, Paper, Scissors" to a friend who has never heard it? You might say something like:

1. each player makes a fist
1. each player shakes their fist three times saying 'Rock, Paper, Scissors'
1. each player shakes their fist a fourth time and changes their fist to one of the shapes for rock, paper, or scissors
1. player 1 wins if she chooses rock and player 2 chooses scissors or she chooses paper and player 2 chooses rock or she chooses scissors and player 2 chooses paper

In programming, we use control structures to accomplish logic like this.

1. [If, If Else, and Else statements][7]
1. [And/Or statements][8]
1. [While and For loops][9]

After watching the videos above, you may see some places where we could use control structures to write rock, paper, scissors in code. For example "each player shakes their fist three times", would be an opportunity to use a `for` loop

```javascript
for (shakes=1; shakes<4; shakes++){
    //code for fist shaking here
}
```

The code above reads as "for every `shake` starting at 1, as long as `shakes` is less than 4, add 1 to the current value of `shakes` and do whatever I say between these curly braces `{}`.

The rules around who wins could be expressed with if, and, or statements. The `&&` represents AND, the `||` represents OR.

```javascript
if (player1.fist == 'rock' && player2.fist == 'scissors' ||
    player1.fist == 'paper' && player2.fist == 'rock' ||
    player1.fist == 'scissors' && player2.fist == 'paper') {
        winner = player1
    }
```

## Procedures, Functions, and Libraries

[Functions, also called procedures or methods][12] (there are differences between the three, but for our introductory purposes, they serve the same purpose) allow you to right code once and call it again and again without writing it multiple times. In the kindle example above, when we wrote

```javascript
for (page in book){
    console.log(page)
}
```

We used a function called `console.log` which the creators of the JavaScript language wrote because they knew that would be a common thing people would need to do and people shouldn't have to write their own code every time they want want to do something as simple as "print something on the screen". But what if you want to store something more complex and reuse it later? You can write your own functions to accomplish that. In fact, we could write

```javascript

function showBook (book){
    for (page in book){
        console.log(page)
    }
}

myBook = []
myBook.push('In the beginning, there was a lot of words on page 1.')
myBook.push('Then on page 2, some more stuff happened.')
myBook.push('Finally, things concluded on page 3')

showBook(myBook)

myBook2 = []
myBook.push('Page 1 text')
myBook.push('Page 2 text')
myBook.push('Page 3 text')
myBook.push('Page 4 text')

showBook(myBook2)
```

Notice, we still need to define an array to store our book and use the push method to add pages to each book. But when it came time to print out the book, we can call the `showBook` function we wrote and use it for both `myBook` and `myBook2`. Functions allow you to scale your code to complete complex logic 1000s of times with minimal effort.

Libraries take this one step further and are groups of related functions. [saml2-js][10] is a javascript library for integrating single-sign on to javascript applications. Single-Sign On (SSO) is an often required security practice for enterprise applications and implimenting it is complex and requies many functions. When you logon to myRCC and get access to Blackboard, SIS, and other applications with 1 login, that is SSO. The saml2-js library, would allow a developer to integrate their app securely with SSO and is one example of a library that someone has written that includes all the necessary functions to implement SSO in one package.

## Scope

Read [What is scope?][11] and watch [this lecture on functions and scope][13] which has lots of live coding examples and some audience Q&A.

[//]: # (References)
[1]: https://en.wikiversity.org/wiki/Operators_and_expressions
[2]: programming-concepts-1
[3]: https://youtu.be/n1exiRH00x0
[4]: https://youtu.be/TL0Y_GI4NZg
[5]: https://youtu.be/rWSsVSMGXXY
[6]: https://youtu.be/H__zi1BiXJM
[7]: https://youtu.be/UDi7xgIIW8E
[8]: https://youtu.be/kyFdniI-ZZs
[9]: https://youtu.be/RQ6GJt9f2vg
[10]: https://www.npmjs.com/package/saml2-js
[11]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Scope
[12]: https://youtu.be/yPWQfa4CHbw
[13]: https://frontendmasters.com/courses/javascript-basics/scope/