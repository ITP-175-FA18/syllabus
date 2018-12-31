---
prev: ./js-2.md
next: ./js-4.md
---
### Control Structures

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

### Procedures, Functions, and Libraries

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

### Scope

Read [What is scope?][11] and watch [this lecture on functions and scope][13] which has lots of live coding examples and some audience Q&A.

1. Write Reusable JavaScript with Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3101s)
1. Passing Values to Functions with Arguments [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3221s)
1. Global Scope and Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3343s)
1. Local Scope and Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3571s)
1. Global vs. Local Scope in Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3646s)
1. Return a Value from a Function with Return [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3760s)
1. Understanding Undefined Value returned from a Function [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3835s)
1. Assignment with a Returned Value [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3892s)
1. Stand in Line [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3952s)
1. Understanding Boolean Values [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4121s)
1. Use Conditional Logic with If Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4164s)
1. Comparison with the Equality Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4311s)
1. Comparison with the Strict Equality Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4398s)
1. Practice comparing different values [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4483s)
1. Comparison with the Inequality Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4538s)
1. Comparison with the Strict Inequality Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4580s)
1. Comparison with the Greater Than Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4625s)
1. Comparison with the Greater Than Or Equal To Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4659s)
1. Comparison with the Less Than Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4689s)
1. Comparison with the Less Than Or Equal To Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4724s)
1. Comparisons with the Logical And Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4757s)
1. Comparisons with the Logical Or Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4841s)
1. Introducing Else Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4897s)
1. Introducing Else If Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=4947s)
1. Logical Order in If Else Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5010s)
1. Chaining If Else Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5085s)
1. Golf Code [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/golf-code)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5265s)
1. Selecting from Many Options with Switch Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5535s)
1. Adding a Default Option in Switch Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5746s)
1. Multiple Identical Options in Switch Statements [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5843s)
1. Replacing If Else Chains with Switch [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=5960s)
1. Returning Boolean Values from Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=6071s)
1. Return Early Pattern for Functions [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=6140s)
1. Counting Cards [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=6218s)



[//]: # (References)
[7]: https://youtu.be/UDi7xgIIW8E
[8]: https://youtu.be/kyFdniI-ZZs
[9]: https://youtu.be/RQ6GJt9f2vg
[10]: https://www.npmjs.com/package/saml2-js
[11]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Scope
[12]: https://youtu.be/yPWQfa4CHbw
[13]: https://frontendmasters.com/courses/javascript-basics/scope/