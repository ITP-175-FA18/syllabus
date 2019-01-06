---
prev: ./git.md
next: ./js-2.md
---
# Programming Concepts

## :books: Watch and Read

Read each of the links below. They contain many links to other pages which you aren't required to read, but are welcome to if the topic peaks your interest.

### History of computing

The [Computing Timeline][1] is useful for seeing the waves of programming languages and how they evolved from one another.

### What is programming?

[About programming][2] covers the purpose of programming, programming languages, and some differences between programming languages.

Programs are [organized][17] logicly which helps both the computer and the programmers understand how the program works.

When writing complex programs or trying to solve an unfamilar problem, it is best to plan your solution before writing code. This is where [algorithms][4] and [pseudocode][5] come in.

Pseudocode isn't written in a programming language, it is a way for you to express what it is you want your code to do before you write it. It is incredibly powerful to understand these concepts and pseudocode, because that will allow you to apply them to any programming language. That is why we're covering these concepts first and specific languages later. We'll use these concepts as a frame of reference when we jump from language to language.

### Commenting code


### Binary number system

Modern computers "speak" in 1s and 0s, referred to as [binary][12]. This is because at the lowest level, the CPU of a computer is working with electricity which is either on or off. This is also why you commonly see electrical and computer engineering together at universities.

Converting decimal to binary [part 1][14] and [part 2][16] videos are helpful resources for practicing conversions.

### Hexadecimal number system

[Hexadecimal][13] is another commonly used number system in computing because it converts to binary very well.

[Converting decimal to hexadecimal][15] shows how to convert numbers between the two systems and this [series from BBC][18] shows some of the ways hexadecimal is used in modern computing.

You aren't requried to be an expert at number system conversions for this course, but you will see them throughout your programming journey.

### Variables

Introduction to programming variables [part 1][8] and [part 2][7] introduce the concepts of initializing (sometimes referred to as creating, allocating, or declaring) and data types. Code.org offers a video introduction [part 1][19] and [part 2][20].

[Numeric variables][9] shows why there are multiple types of numeric variables.

`Strings` are another common data type, almost always represented by using quotes, either single or double, depending on the programming language. An important point is that in most languages

`x = 2` means x is an integer while
`y = "2"` means y is a string

2 and "2" might look the same to humans, but to computers they are different.

[Boolean Variables][10] are incredibly important to programming. Code.org's [video introduction][21] also introduces Boolean Expressions.

Later, we'll explore constructs like `if statments` and `loops` that use Boolean variables to determine which statement a program should execute next.

## :repeat: Practice with freeCodeCamp

Complete the [first 21 lessons freeCodeCamp JavaScript course](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/). The first 21 minutes of the [youtube video](https://www.youtube.com/watch?v=PkZNo7MFNFg) walk you through the lessons. You can access each lesson indivdually below using the Watch or Code links.

1. Running JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=84s)
2. Comment Your JavaScript Code [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=263s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code)
3. Declare JavaScript Variables [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=356s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables)
4. Storing Values with the Assignment Operator [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=375s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)
5. Initializing Variables with the Assignment Operator [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=691s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/initializing-variables-with-the-assignment-operator)
6. Understanding Uninitialized Variables [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=718s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables)
7. Understanding Case Sensitivity in Variables [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=760s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables)
8. Add Two Numbers with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=845s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-two-numbers-with-javascript)
9. Subtract One Number from Another with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=874s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/subtract-one-number-from-another-with-javascript)
10. Multiply Two Numbers with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=892s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-numbers-with-javascript)
11. Divide One Number by Another with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=912s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/divide-one-number-by-another-with-javascript)
12. Increment a Number with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=930s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript)
13. Decrement a Number with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=958s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/decrement-a-number-with-javascript)
14. Create Decimal Numbers with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=982s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/create-decimal-numbers-with-javascript)
15. Multiply Two Decimals with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1008s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript)
16. Divide One Decimal by Another with JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1038s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/divide-one-decimal-by-another-with-javascript)
17. Finding a Remainder in JavaScript [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1053s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript)
18. Compound Assignment With Augmented Addition [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1102s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition)
19. Compound Assignment With Augmented Subtraction [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1162s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction)
20. Compound Assignment With Augmented Multiplication [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1218s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
21. Compound Assignment With Augmented Division [:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1251s)[:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division)

## :speech_balloon: Chat 2

### Instructions

The purpose of this chat is to continue developing your self-reflection skills.

1. After going through the content in `programming-concepts-1`, write out two questions you have related to any of the concepts presented.

    Use this opportunity to ask questions about concepts you don't fully understand. If you are confident in your understand of all the concepts, develop questions around how a concept might be applied or why it might be useful to you in your career.

1. [Join the the `#chat-2` Slack channel][22] and ask your questions.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 100% | Two questions asked in `#chat-2` related to the content in `programming-concepts-1`. |
| +10% | Bonus points for asking more than 2 questions. |
| +10% | Bonus points for helping other students find answers to their questions. |

## :memo: Journal 1

### Instructions

1. Update your freecodecamp profile settings by clicking your profile image in the upper right
1. Scroll back up to the top and click the "Show me my public portfolio" button.
1. Copy the URL of your profile.
1. Visit your codecademy profile by clicking your profile image in the upper right and select My Profile
1. Click the Badges area in the middle of the screen
1. Copy the URL of your badges.

The purpose of this journal is to continue honing your reflection and web search skills. Getting stuck on a problem or concept is very common when learning to program. Finding more resources that help you get over that hump is a critical skill.

While a lot of the steps in this assignment are similar to the last journal, there are some extra steps. To complete this assignment:

1. Join the [`1-concepts-journal` slack channel][24]
1. In that Slack channel, you will see a link that will take you to Github Classroom
1. Accept the `1-concepts-journal` assignment and Github will create a version of the repository for you.
1. Once this step is complete, visit [the Github homepage][23] and you should now see `ITP-175-FA18/1-concepts-journal` in the list on the left under Repositories.

:::tip
Reach out to the professor if you have issues getting to this stage. Do NOT Wait!!
:::

1. Click the `ITP-175-FA18/1-concepts-journal` repository and you will see a copy of these assignment instructions.
1. Click the green `Create new file` button on this page and name it `journal.md`.
1. In `journal.md` write two lists. One for the things you understand most confidently, and another for the things you are struggling with.
1. Pick one of the items from the things you are struggling with and use the web to find a resource that helps you understand it better.

    If you're having trouble finding a resource, check out these tips on [refining web searches][25] and [filtering search results][26]

1. Add the URL of the resource you found and a statement about what made it helpful to you to your `journal.md`.
1. Scroll down and you'll see a section called `Commit new file`. In the smaller textbox type, `create journal.md` and select the Commit directly to the `master` branch option.
1. Click the green `Commit new file` button.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 10% | Completing the Github Classroom process and creating a journal.md file |
| 30% | Having a list of things you're confident you understand and things you are struggling with in journal.md |
| 30% | Having a URL to a resource that helps explain a concept you were struggling with |
| 30% | Having an explanation of how the extra resource helped you |

[//]: # (References)
[1]: https://en.wikipedia.org/wiki/Timeline_of_computing
[2]: https://en.wikiversity.org/wiki/Introduction_to_Programming/About_Programming
[3]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Programming_Languages
[4]: https://en.wikiversity.org/wiki/What_is_an_Algorithm
[5]: https://en.wikiversity.org/wiki/How_to_go_about_implementing_a_problem_solution_as_a_program
[6]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Organization
[7]: https://en.wikiversity.org/wiki/Types_and_variables
[8]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Variables
[9]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Numeric_Variables
[10]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Boolean_Variables

[12]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction
[13]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/hexadecimal-number-system
[14]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/decimal-to-binary
[15]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/decimal-to-hexadecimal
[16]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/large-number-decimal-to-binary
[17]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Organization
[18]: https://www.bbc.com/bitesize/guides/zp73wmn/revision/1
[19]: https://youtu.be/G41G_PEWFjE
[20]: https://youtu.be/ijjVDBPwA1o
[21]: https://youtu.be/y3rCKJNOwpA
[22]: https://itp175fa18.slack.com/messages/CCL65UQJF
[23]: https://www.github.com
[24]: https://itp175fa18.slack.com/messages/CCMBSQX0X
[25]: https://support.google.com/websearch/answer/2466433?hl=en&ref_topic=3081620
[26]: https://support.google.com/websearch/answer/142143?hl=en&ref_topic=3081620