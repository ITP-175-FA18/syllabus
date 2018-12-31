---
prev: ./js-1.md
next: ./js-3.md
---
# Programming Concepts 2

## :books: Watch and Read

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




## :speech_balloon: Chat 4

### Instructions

The purpose of this chat is to continue developing your self-reflection skills.

1. After going through the content in `programming-concepts-2`, write out two questions you have related to any of the concepts presented.

    Use this opportunity to ask questions about concepts you don't fully understand. If you are confident in your understand of all the concepts, develop questions around how a concept might be applied or why it might be useful to you in your career.

1. [Join the the `#chat-4` Slack channel][14] and ask your questions.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 100% | Two questions asked in `#chat-4` related to the content in `programming-concepts-2`. |
| +10% | Bonus points for asking more than 2 questions. |
| +10% | Bonus points for helping other students find answers to their questions. |

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
[14]: https://itp175fa18.slack.com/messages/CD4JP74G6