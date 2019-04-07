---
prev: ./js-2.md
next: ./js-4.md
---
# Control Structures and Functions

## :books: Watch and Read

### Control Structures

To solve real-world problems, we use control structures which allow our code to flow logicly similar to the way our brains do. For example, how would you explain the rules of the game "Rock, Paper, Scissors" to a friend who has never heard it? You might say something like:

1. each player makes a fist
1. each player shakes their fist three times saying 'Rock, Paper, Scissors'
1. each player shakes their fist a fourth time and changes their fist to one of the shapes for rock, paper, or scissors
1. player 1 wins if she chooses rock and player 2 chooses scissors or she chooses paper and player 2 chooses rock or she chooses scissors and player 2 chooses paper

In programming, we use **control structures** to accomplish logic like this.

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/UDi7xgIIW8E?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/kyFdniI-ZZs?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/RQ6GJt9f2vg?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

After watching the videos above, you may see some places where we could use control structures to write rock, paper, scissors in code.

The rules around who wins could be expressed with if, and, or statements. The `&&` represents AND, the `||` represents OR.

```javascript
if (player1 == 'rock' && player2 == 'scissors' ||
    player1 == 'paper' && player2 == 'rock' ||
    player1 == 'scissors' && player2 == 'paper') {
        winner = player1
}
```

### Procedures, Functions, and Libraries

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/yPWQfa4CHbw?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Functions, also called procedures or methods (there are differences between the three, but for our introductory purposes, they serve the same purpose) allow you to right code once and call it again and again without writing it multiple times. In the example above, we could use a function
to play many games of Rock, Paper, Scissors.

```javascript
function game(player1, player2){
    if (player1 == 'rock' && player2 == 'scissors' ||
        player1 == 'paper' && player2 == 'rock' ||
        player1 == 'scissors' && player2 == 'paper') {

        console.log("winner is " + player1);

    }
}

game("Rock", "Scissors");
game("Paper", "Rock");
```

We wrote a function called `game` and used a pre-made function called `console.log` which the creators of the JavaScript language wrote because they knew that would be a common thing people would need to do and people shouldn't have to write their own code every time they want want to do something as simple as "print something on the screen".

Libraries take this one step further and are groups of related functions. [saml2-js][] is a javascript library for integrating single-sign on to javascript applications. Single-Sign On (SSO) is an often required security practice for enterprise applications and implementing it is complex and requires many functions. When you logon to myRCC and get access to Blackboard, SIS, and other applications with 1 login, that is SSO. The saml2-js library, would allow a developer to integrate their app securely with SSO and is one example of a library that someone has written that includes all the necessary functions to implement SSO in one package.

### Scope

Read [What is scope?][] and watch this [lecture on functions and scope][] which has lots of live coding examples and some audience Q&A.

## Practice on freecodecamp

This video shows a couple ways to watch videos and code in Glitch at the same time.

:::tip New Console
Now that we're coding in JavaScript and not the command line, we're using a different console, the Browser console. This video covers opening the browser console in Chrome. The browser console will show any `console.log` statements you write in your JavaScript files.
:::

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/j8QiWpIz17s?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Complete the lessons below in [freeCodeCamp JavaScript course][].

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

<div class="asn chat">

## :speech_balloon: 06 Chat

**Due: 04/08/19 9 AM**

### Instructions

The purpose of this chat is to continue developing your self-reflection skills.

1. After going through the content above, write out at least two questions you have related to any of the concepts presented.

    Use this opportunity to ask questions about concepts you don't fully understand. If you are confident in your understand of all the concepts, develop questions around how a concept might be applied or why it might be useful to you in your career.

1. Join the the [#sp19-06-chat][] Slack channel and ask your questions.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 100% | Two questions asked in `#sp19-06-chat` related to this module's content. |
| +10% | Bonus points for asking more than 2 questions. |
| +10% | Bonus points for helping other students find answers to their questions. |

</div>

<div class="asn journal">

## :memo: 06 Journal

**Due: 04/08/19 9 AM**

### Instructions

1. `Direct Message` (DM) Michael Greene (profmikegreene) with two lists.
    1. One for the things you understand most confidently.
    1. One for the things you are struggling with.

>The items in these lists can be vocabulary, assignment tasks, concepts, whatever sticks out in your mind. Try to find at least two items per list and feel free to make them as long as you like.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 50% | Direct message to `profmikegreene` containing a list of things you are confident you understand |
| 50% | Direct message to `profmikegreene` containing a list of things you are struggling with |

</div>

<div class="asn project">

## :atom_symbol: 06 Project

**Due: 04/08/19 9 AM**

The purpose of this project is to prove your understanding of the concepts in this lesson.

### Instructions

#### Setup

1. Click `Channels` in the Slack sidebar to view all channels
1. Join the [#sp19-06-project][] slack channel
1. In that Slack channel, you will see a link that will take you to Github Classroom
1. Click the `Accept this assignment` button and Github will create a project repo for you.
1. Once this step is complete, the page should say "Your assignment has been created here: https://github.com/RCC-ITP-175/sp19-06-". Click this link and visit your repository.
1. Create a new Glitch project using the `Clone from Git Repo` option and paste in `RCC-ITP-175/sp19-06-YOURGITHUBUSERNAME` to clone from the repo you just created.

#### Javascript

1. Your Glitch project now contains several exercise.js files which contain instructions and some `console.log` statements to validate that you've completed the instructions.
1. Write some Javascript to complete the instructions for each of the exercise.js files.

#### Submission

1. Open the Glitch Tools menu in the bottom left, and select `Git, Import, and Export`
1. Click `Export to Github` and if asked type `RCC-ITP-175/sp19-06-`

    For example, I would type `RCC-ITP-175/sp19-06-profmikegreene`

1. Click OK and your project should be exported to Github
1. Visit your repo on [github.com][] and click the branches dropdown and you should see a Glitch branch containing your code

All done!

### Grading Rubric

| pts | Explanation|
|-----|:--------|
| 5 | Create a github repo for this project |
| 15 | exercise1.js completed |
| 15 | exercise2.js completed |
| 15 | exercise3.js completed |

</div>

[//]: # (References)
[github.com]: https://github.com "Github homepage"
[saml2-js]: https://www.npmjs.com/package/saml2-js "saml2-js library"
[What is scope?]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Scope "What is scope?"
[lecture on functions and scope]: https://frontendmasters.com/courses/javascript-basics/scope/ "lecture on functions and scope"
[freeCodeCamp JavaScript course]: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/ "freeCodeCamp JavaScript course"
[#sp19-06-chat]: https://rccitp175.slack.com/messages/CHJG6H2QP "#sp19-06-chat Slack channel"
[#sp19-06-project]: https://rccitp175.slack.com/messages/CH8NA7AKB "#sp19-06-project Slack channel"
[freecodecamp curriculum]: https://learn.freecodecamp.org/ "freecodecamp curriculum"