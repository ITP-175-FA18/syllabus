# Programming Concepts

Read each of the links below. They contain many links to other pages which you aren't required to read, but are welcome to if the topic peaks your interest.

## History of computing

The [Computing Timeline][1] is useful for seeing the waves of programming languages and how they evolved from one another.

## What is programming?

[About programming][2] covers the purpose of programming, programming languages, and some differences between programming languages.

Programs are [organized][17] logicly which helps both the computer and the programmers understand how the program works.

When writing complex programs or trying to solve an unfamilar problem, it is best to plan your solution before writing code. This is where [algorithms][4] and [pseudocode][5] come in.

Although pseudocode isn't written in a programming language, it uses some of the constructs we'll cover below and in the next few weeks. It is incredibly powerful to understand these concepts and pseudocode, because that will allow you to apply them to any programming language. That is why we're covering these concepts first and specific languages later. We'll use these concepts as a frame of reference when we jump from language to language.

## Programming concepts and constructs

### Binary number system

Modern computers "speak" in 1s and 0s, referred to as [binary][12]. This is because at the lowest level, the CPU of a computer is working with electricity which is either on or off. This is also why you commonly see electrical and computer engineering together at universities.

Converting decimal to binary [part 1][14] and [part 2][16] videos are helpful resources for practicing conversions.

### Hexadecimal number system

[Hexadecimal][13] is another commonly used number system in computing because it converts to binary very well.

[Converting decimal to hexadecimal][15] shows how to convert numbers between the two systems and this [series from BBC][18] shows some of the ways hexadecimal is used in modern computing.

You aren't requried to be an expert at number system conversions for this course, but you will see them throughout your programming journey.

## Variables

Introduction to programming variables [part 1][8] and [part 2][7] introduce the concepts of initializing (sometimes referred to as creating, allocating, or declaring) and data types. Code.org offers a video introduction [part 1][19] and [part 2][20].

[Numeric variables][9] shows why there are multiple types of numeric variables.

`Strings` are another common data type, almost always represented by using quotes, either single or double, depending on the programming language. An important point is that in most languages

`x = 2` means x is an integer while
`y = "2"` means y is a string

2 and "2" might look the same to humans, but to computers they are different.

[Boolean Variables][10] are incredibly important to programming. Code.org's [video introduction][21] also introduces Boolean Expressions.

Later, we'll explore constructs like `if statments` and `loops` that use Boolean variables to determine which statement a program should execute next.

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