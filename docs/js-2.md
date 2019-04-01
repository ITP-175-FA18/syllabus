---
prev: ./js-1.md
next: ./js-3.md
---
# Programming Concepts 2

## :books: Watch and Read

### Variables

Watch Code.org's [programming variables part 1][] and [programming variables part 2][] to recap the concepts of initializing (sometimes referred to as creating, allocating, or declaring) and data types.

[Numeric variables][] shows why there are multiple types of numeric variables.

`Strings` are another common data type, almost always represented by using quotes, either 'single' or "double", depending on the programming language. An important point is that in most languages

`x = 2` means x is an integer while
`y = "2"` means y is a string

2 and "2" might look the same to humans, but to computers they are different.

[Boolean variables][] are incredibly important to programming, allowing us to set things as true or false. Code.org offers a video [introduction to boolean expressions][].

Later, we'll explore constructs like `if statments` and `loops` that use Boolean variables to determine which statement a program should execute next.

### Number Systems

[Binary][] or base 2, a computer's central processing unit (CPU) only understands 1 and 0, called binary. This is because at the lowest level, the CPU of a computer is working with electricity which is either on or off. This is also one reason why you commonly see electrical and computer engineering together at universities.

Converting decimal (base 10) to binary is a common part of most computer science programs. You aren't required to be an expert at number system conversions for this course, but you will see them throughout your programming journey.

[Decimal to binary part 1][] and [decimal to binary part 2][] videos are helpful resources for practicing conversions.

### Hexadecimal number system

[Hexadecimal][] is another commonly used number system in computing because it converts to binary very well.

[Converting decimal to hexadecimal][] shows how to convert numbers between the two systems and this series from BBC shows some of the ways [hexadecimal is used in modern computing][].

### Arrays and other Data Structures

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

There are many data structures, for this class we're going to focus on **Arrays**, also known as **Lists**. Code.org has a great series of videos introducing arrays

* [Introduction to Lists][]
* [Accessing elements in a list][]
* [Updating and adding elements in a list][]
* [Getting the length of a list][]

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

We'll talk about loops in another module. Read the code above as "for each page in the array named book, print that page". This is an amazing savings, because it works for a 1, 100, or 1,000,000 page book. The `for` loop processes the array the same, without you having to know how many pages.

Complete lessons 21-45 in [freeCodeCamp JavaScript course][]. Links to individual lessons and their corresponding youtube video are below.

1. Declare String Variables [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1279s)
1. Escaping Literal Quotes in Strings [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/escaping-literal-quotes-in-strings)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1321s)
1. Quoting Strings with Single Quotes [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1424s)
1. Escape Sequences in Strings [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1518s)
1. Concatenating Strings with Plus Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1606s)
1. Concatenating Strings with the Plus Equals Operator [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1669s)
1. Constructing Strings with Variables [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/constructing-strings-with-variables)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1741s)
1. Appending Variables to Strings [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1814s)
1. Find the Length of a String [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1871s)
1. Use Bracket Notation to Find the First Character in a String [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=1921s)
1. Understand String Immutability [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2007s)
1. Use Bracket Notation to Find the Nth Character in a String [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2063s)
1. Use Bracket Notation to Find the Last Character in a String [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2091s)
1. Use Bracket Notation to Find the Nth-to-Last Character in a String [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2148s)
1. Word Blanks [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/word-blanks)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2188s)
1. Store Multiple Values in one Variable using JavaScript Arrays [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2444s)
1. Nest one Array within Another Array [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2503s)
1. Access Array Data with Indexes [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2553s)
1. Modify Array Data With Indexes [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2614s)
1. Access Multi-Dimensional Arrays With Indexes [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2688s)
1. Manipulate Arrays With push() [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2790s)
1. Manipulate Arrays With pop() [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2849s)
1. Manipulate Arrays With shift() [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2913s)
1. Manipulate Arrays With unshift() [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=2963s)
1. Shopping List [:computer: code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/shopping-list)[:tv: watch](https://youtube.com/watch?v=PkZNo7MFNFg&amp;t=3036s)

<div class="asn chat">

## :speech_balloon: 05 Chat

**Due: 03/25/19 9 AM**

### Instructions

The purpose of this chat is to continue developing your self-reflection skills.

1. After going through the content above, write out at least two questions you have related to any of the concepts presented.

    Use this opportunity to ask questions about concepts you don't fully understand. If you are confident in your understand of all the concepts, develop questions around how a concept might be applied or why it might be useful to you in your career.

1. Join the the [#sp19-05-chat][] Slack channel and ask your questions.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 100% | Two questions asked in `#sp19-05-chat` related to this module's content. |
| +10% | Bonus points for asking more than 2 questions. |
| +10% | Bonus points for helping other students find answers to their questions. |

</div>

<div class="asn journal">

## :memo: 05 Journal

**Due: 03/25/19 9 AM**

### Instructions

1. Visit your freecodecamp settings by clicking your profile image in the upper right
1. Click the "Show me my public portfolio" button at the top center of the page.
1. Copy the URL of your profile.
1. Paste the URL of your freecodecamp profile in a Slack `Direct Message` to Michael Greene (profmikegreene)
1. Aldo `Direct Message` (DM) Michael Greene (profmikegreene) with two lists.
    1. One for the things you understand most confidently.
    1. One for the things you are struggling with.

>The items in these lists can be vocabulary, assignment tasks, concepts, whatever sticks out in your mind. Try to find at least two items per list and feel free to make them as long as you like.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 40% | Having the first Javascript lessons 21-45 complete in your freecodecamp profile |
| 30% | Direct message to `profmikegreene` containing a list of things you are confident you understand |
| 30% | Direct message to `profmikegreene` containing a list of things you are struggling with |

</div>

<div class="asn project">

## :atom_symbol: 05 Project

**Due: 03/25/19 9 AM**

The purpose of this project is to prove your understanding of the concepts in this lesson.

### Instructions

**Setup**

1. Click `Channels` in the Slack sidebar to view all channels
1. Join the [#sp19-05-project][] slack channel
1. In that Slack channel, you will see a link that will take you to Github Classroom
1. Click the `Accept this assignment` button and Github will create a version of the project for you.
1. Once this step is complete, the page should say "Your assignment has been created here: https://github.com/RCC-ITP-175/sp19-05-". Click this link and visit your repository.
1. Create a new Glitch project using the `hello-webpage` option

**Javascript**

1. Open the script.js file created in your Glitch project. It will contain some comments and a console.log statement
1. At the end of the file, you'll write some new Javascript
1. Create a new variable named `name` and set if equal to your first name
1. Use concatenation to add your last name to the `name` variable
1. Create a new variable named `nameLength` and set it equal to the length of the `name` variable
1. Create an array named `shinigami` with the following elements

    * `Ichigo`
    * `Gin`
    * `Shunsui`

1. Add the following element to the array `Kyoraku`
1. Create a new variable named `substitute` and use bracket notation to set it equal to the `Ichigo` element of the `shinigami` array
1. Remove the `Ichigo` element of the `shinigami` array

**Submission**

1. Open the Glitch Tools menu in the bottom left, and select `Git, Import, and Export`
1. Click `Export to Github` and type in your github username/sp19-04-username

    For example, I would type `profmikegreene/sp19-05-profmikegreene`

1. Click OK and your project should be exported to Github
1. Visit your repo on [github.com][] and click the branches dropdown and you should see a Glitch branch containing your code

All done!

### Grading Rubric

| pts | Explanation|
|-----|:--------|
| 5 | Create a github repo for this project |
| 5 | `name` contains your first name |
| 5 | concatenation adds your last name to `name` |
| 5 | `nameLength` equal to the length `name` |
| 10 | `shinigami` array contains 3 strings |
| 10 | another string added to `shinigami` |
| 10 | `Ichigo` element removed from `shinigami` |

</div>

[//]: # (References)
[programming variables part 1]: https://youtu.be/G41G_PEWFjE "programming variables part 1"
[programming variables part 2]: https://youtu.be/ijjVDBPwA1o "programming variables part 2"
[1]: https://en.wikiversity.org/wiki/Operators_and_expressions
[2]: programming-concepts-1
[Introduction to Lists]: https://youtu.be/n1exiRH00x0 "Introduction to Lists"
[Accessing elements in a list]: https://youtu.be/TL0Y_GI4NZg "Accessing elements in a list"
[Updating and adding elements in a list]: https://youtu.be/rWSsVSMGXXY "Updating and adding elements in a list"
[Getting the length of a list]: https://youtu.be/H__zi1BiXJM "Getting the length of a list"
[7]: https://youtu.be/UDi7xgIIW8E
[8]: https://youtu.be/kyFdniI-ZZs
[old9]: https://youtu.be/RQ6GJt9f2vg

[11]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Scope
[12]: https://youtu.be/yPWQfa4CHbw
[13]: https://frontendmasters.com/courses/javascript-basics/scope/
[#sp19-05-chat]: https://rccitp175.slack.com/messages/CH2MTEE6B "#sp19-05-chat Slack channel"
[#sp19-05-project]: https://rccitp175.slack.com/messages/CH1KPPGTC "#sp19-05-project Slack channel"
[3]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Programming_Languages
[hexadecimal is used in modern computing]: https://www.bbc.com/bitesize/guides/zp73wmn/revision/1 "hexadecimal is used in modern computing"
[19]: https://youtu.be/G41G_PEWFjE
[20]: https://youtu.be/ijjVDBPwA1o
[introduction to boolean expressions]: https://youtu.be/y3rCKJNOwpA "introduction to boolean expressions"
[6]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Organization
[7]: https://en.wikiversity.org/wiki/Types_and_variables
[8]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Variables
[Numeric variables]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Numeric_Variables "Numeric variables"
[Boolean variables]: https://en.wikiversity.org/wiki/Introduction_to_Programming/Boolean_Variables

[Binary]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction "Binary"
[Hexadecimal]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/hexadecimal-number-system " Hexadecimal"
[Decimal to binary part 1]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/decimal-to-binary "Decimal to binary part 1"
[Converting decimal to hexadecimal]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/decimal-to-hexadecimal "Converting decimal to hexadecimal"
[decimal to binary part 2]: https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/large-number-decimal-to-binary "Decimal to binary part 2"
[23]: https://www.github.com
[24]: https://itp175fa18.slack.com/messages/CCMBSQX0X
[25]: https://support.google.com/websearch/answer/2466433?hl=en&ref_topic=3081620
[26]: https://support.google.com/websearch/answer/142143?hl=en&ref_topic=3081620
[freeCodeCamp JavaScript course]: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/ "freeCodeCamp JavaScript course"