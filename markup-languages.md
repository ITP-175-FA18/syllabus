# Markup Languages

## HyperText Markup Language - HTML

There is more than one markup language out there, but for the purpose of this course, we're going to learn HTML, HyperText Markup Language. HTML is the language used to describe things on a web page. It works very differently from the rest of the programming languages we'll learn about in this course and is commonly used alongside them.

While HTML doesn't have many of the concepts covered last week, like variables, `Javascript`, `Python`, or `Ruby` can be used to store variables that are displayed to users in a website or web application using `HTML`. That may sound overly complicated in theory, but it allows each language to be specialized in its purposed and used for what it is good at, rather than have to serve all purposes, all the time.

1. Login and click the orange `START` button on [Codecademy's Learn HTML][1] course. Complete the first 2 modules in this course:

* Introduction to HTML
* Tables

Introduction to HTML has 16 lessons which can be found by clicking the menu icon in the lower left hand corner of the codecademy screen.

In this module you'll learn about the basics of the HTML syntax and the most common "tags" used to describe content on a web page.

### Playing around with HTML

Head back to glitch.com and create a new `hello-webpage` project. Remember, it'll give your project a random name. You can delete the project created previously to play with terminal commands.

1. Click `Edit this project` and you'll be taken to the Glitch editor.
1. On the left, you'll see an index.html file, click it and it will open in the main editor pane.
1. Add some of the tags you learned about in the Codecademy course to gain practice. You'll notice that glitch offers some helpful features like:
    * Autocomplete: after typing an opening `<h1>` type `</` and glitch will fill in the `h1>` for you. Autocomplete can save you millions of keystrokes over your lifetime.
    * Auto-Debugging: type `<h1 my heading here</h1>` and glitch will give you a red dot on the left. Hover over the dot for information about the error on that line. This example has two errors, both of which are resolved by fixing the opening h1 tag to `<h1>`. Auto-debugging features like this can save you many, many hours. It's like spellcheck for your code.

**If you have trouble writing your HTML, click the share button in the upper left and copy the `Code` link into the `#q-and-a` Slack channel to ask for help.**

## Cascading Style Sheets - CSS

Cascading Style Sheets allow you to apply design styles to your HTML tags.

1. Head back to codecademy and click the orange `START` button on [Codecademy's Learn CSS][3]. Complete the first module in this course.

Introduction to CSS has 17 lessons which can be found by clicking the menu icon in the lower left hand corner of the codecademy screen.

Web Designers and Front-End Web Developers specialize in CSS, an intimate knowledge of the possibilities is not required for this course.

### Playing around with CSS

1. Head back to Glitch and open your hello-webpage project from earlier.
1. Unless you deleted it earlier, the index.html file contains the line `<div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>` 4 lines from the end of the file.

    Now you know that the `style` attribute there contains CSS.

1. There is also `<link rel="stylesheet" href="/style.css">` inside the `<head>` tag near the beginning of the file. This is creating a connection to the `style.css` file you see in the left pane.
1. Click the `style.css` file in the left pane to open it in the editor pane.
1. Go back and forth between the `index.html` and `style.css` files and add CSS styles for the HTML tags you added earlier.

    If you're looking for styles easy to see, I recommend either `background:red;` or `border:1px solid red;` and change the colors as you please.

## Markdown

You may remember Markdown from [Week 1's Welcome][8]. Markdown is another markup language designed to make it easier to focus on writing content than writing HTML tags and CSS styles. Go back and review [Markdown Cheat Sheet][9] now that you're more familiar with HTML.

## Extra Resources

[HTML Crash Course For Absolute Beginners - Youtube][2]
[Kahn Academy - Intro to HTML and CSS - Youtube][4]
[Mozilla Learn HTML][6]
[Mozilla Learn CSS][7]
[W3Schools Intro to HTML][5]


[//]: # (References)
[1]: https://www.codecademy.com/learn/learn-html
[2]: https://www.youtube.com/watch?v=UB1O30fR-EE
[3]: https://www.codecademy.com/learn/learn-css
[4]: https://www.youtube.com/watch?v=ItZN6o0ylao&list=PLfloRV9R6_kRQihyrQV9eVYt32KNGqXRo
[5]: https://www.w3schools.com/html/html_intro.asp
[6]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
[7]: https://developer.mozilla.org/en-US/docs/Learn/CSS
[8]: https://itp-175-fa18.github.io/syllabus/welcome#markdown
[9]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet