---
prev: ./setup.md
# next: ./cli-2.md
---
# CLI Languages

In this modules we'll introduce Command Line Interface (CLI) languages often referred to as shell or terminal programming.

## :books: Watch and Read

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/lnYKOnz9ln8?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

1. Login to codecademy using your github account and click the orange `START` button on [Codecademy's Learn the Command Line course][].
1. Complete the first 2 modules in this course:
   * Navigating the File System
   * Viewing and Changing the File System

Navigating the File System has 9 lessons which can be found by clicking the menu icon in the lower left hand corner of the codecademy screen.
![Codecademy Menu][]

In the [Navigation module][], you'll learn about the following commands:

* `pwd` outputs the name of the current working directory.
* `ls` lists all files and directories in the working directory.
* `cd` switches you into the directory you specify.
* `mkdir` creates a new directory in the working directory.
* `touch` creates a new file inside the working directory.

After completing these 9 lessons click `Next` to move to the next module. 

:::tip No upgrade necessary
Remember, you do **not** have to upgrade to codecademy pro.
:::

In the [Manipulation module][], you'll learn about:

* options that modify what `ls` and `cp` do
* how wildcards allow you to select groups of files or directories

### Play

Trying out CLI commands on your computer can be scary and potentially damaging to your computer. Use the Glitch terminal to play around with commands you learn without any risk to your computer.

Here's a video showing the steps below.

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/kEoIdD25N6Q?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

1. Login to [glitch.com][] using your github account and click the New Project button in the upper right
1. Select `hello-webpage` from the dropdown
1. Click `Logs` once your project has loaded and you see the Glitch editor

    ![Open the Glitch logs][]

1. Click `Console` and drag the top of the logs pane up to make it bigger. I like to have mine on one half of the screen while the instructions I'm following on are the other half as shown below.

    ![Glitch console side by side][]

1. Now you can play with any of the commands you learned on codecademy in the Glitch console. Your Glitch application is actually your own dedicated Linux server. Type `uname -a` in the console to see exactly what operating system you're on. You should see something similar to the output below.

    `Linux 9f5c7ccb2b3c 4.4.0-1074-aws #84-Ubuntu SMP Thu Dec 6 08:57:58 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux`

1. Type `compgen -c` into the Glitch console to see all the possible commands you can run on that machine.
1. All the commands covered in codecademy this week are in that list, including `ls`. Type `man ls` to open the manual for the `ls` command.

    ![Manual for ls][]

1. Hit the letter `h` on your keyboard to open the help for the manual. The manual and help are keyboard driven as are several other commands in the console. It is useful to know how to get around without getting frustrated.
1. The first section of the help is on moving around. Hold `j` to scroll down the document. Hold `k` to scroll up. 
1. Hit `f` to move forward one window. Imagine the manual as a book, hitting `f` is like flipping forward one page. Hit `b` to flip back one page.
1. Hit `q` to exit the help and get back to the manual. When you're finished reading the manual, hit `q` to exit the manual and go back to your regular console.

### Extra Resources

* [:tv: thenewboston playlist on Windows Command Prompt][]
* [:book: djangogirls.com Intro to Command Line][]
* [:book: ss64.com command line reference][]

<div class="asn chat">

## :speech_balloon: 01 Chat

**Due: 01/28/19 9 AM**

### Instructions

The purpose of this chat is to practice self-driven learning and collaboration skills, both of which are critical for sustained growth as careers in technical fields including cybersecurity change rapidly.

1. Open the Glitch console and follow the **Play** instructions above.
1. Select one of the commands listed in `compgen -c` that wasn't covered in the codecademy lesson and open the manual to learn what it does and how to use it.

    :::tip
    The manual isn't always the easiest thing to understand, especially for new programmers. Some Google searching can often help understand what the command does and how to use it.
    :::

1. Exit the manual for the command by hitting `q`.
1. Use the command in the Glitch console.
1. Take a screenshot that shows your use of the command and the output in the Glitch console.

    This post from Zapier covers [how to take screenshots on most platforms][].

1. Find a website or other resource that explains why or how the command is used to solve a problem.
1. Join the the [#sp19-01-chat Slack channel][] and share what you've learned and done.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 25% | Using a new command not covered in the codecademy lesson. |
| 25% | Share the screenshot showing how you used the command in glitch during step 3. |
| 25% | Share the URL of the resources you found earlier in step 5. |
| 25% | Chat with your fellow students. Engage them on what you find interesting about their examples, get clarity on something you don't understand, offer help with others ask questions about your example. |

You can always send me questions privately via email, txt, or Direct Message. But I encourage you to ask them in  `#q-and-a` or in the channel for that assignment (like `#sp19-01-chat`) so that you and your fellow students can help each other out. Learning and programming are not solo sports!

</div>
<div class="asn journal">

## :memo: 01 Journal

**Due: 01/28/19 9 AM**

The purpose of this journal is to review the concepts covered this week and reflect on how well you understand them.

### Instructions

1. Visit [my codecademy profile][] and click the Badges button in the middle of the page

    ![my codecademy badges][]

1. Copy the URL of your profile and paste it in a `Direct Message` (DM) to Michael Greene (profmikegreene)
1. Also in a DM, write two lists.
    1. One for the things you understand most confidently
    1. One for the things you are struggling with.

>The items in these lists can be vocabulary, assignment tasks, concepts, whatever sticks out in your mind. Try to find at least two items per list and feel free to make them as long as you like.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 20% | Direct message to `profmikegreene` containing the URL of your codecademy profile |
| 40% | Direct message to `profmikegreene` containing a list of things you are confident you understand |
| 40% | Direct message to `profmikegreene` containing a list of things you are struggling with  |

</div>

<div class="asn project">

## :atom_symbol: 01 Project

**Due: 01/28/19 9 AM**

The purpose of this project is to prove your understanding of the concepts in this lesson.

### Instructions

1. Click `Channels` in the Slack sidebar to view all channels
1. Find and join the [sp19-01-project slack channel][]
1. In that Slack channel, you will see a link that will take you to Github Classroom
1. Click the `Accept this assignment` button and Github will create a version of the project for you.
1. Once this step is complete, the page should say "Your assignment has been created here: https://github.com/RCC-ITP-175/sp19-01-". Click that link to move onto the next step.

    ::: tip
    You don't have to remember that link, you can always visit [github.com][] and you should now see a repository in the list on the left that starts with `RCC-ITP-175/sp19-01-` and ends with your Github username.
    :::

    ::: warning
    Reach out to the professor if you have issues getting to this stage. Do NOT Wait!!
    :::

1. In your repository, there is a `commands.sh` file. Click to open it.

    ![Open commands.sh][]

1. Click the pencil icon to edit the file.

    ![Edit commands.sh][]

1. There are 13 questions for you to answer by typing the commands necessary to complete the requirements.
1. Scroll down and you'll see a section called `Commit changes` to save your work. In the smaller textbox type, `update commands.sh` and select the Commit directly to the `master` branch option.

    :::tip
    On github, a commit is like hitting a "save and upload" button. You can commit changes as many times as you like.
    :::

1. When you are finished answering all the questions, `Commit changes` one last time.

### Grading Rubric

| pts | Explanation|
|-----|:--------|
| 11 | Completing the Github Classroom process and creating a sp19-01-project repository |
| 39 | Each of the 13 questions is worth 3 points. |

</div>

[//]: # (References)
[github.com]: https://github.com "Github homepage"
[codecademy.com]: https://www.codecademy.com/ "codecademy homepage"
[glitch.com]: https://glitch.com "Glitch homepage"
[freecodecamp.org]: https://www.freecodecamp.org "freeCodeCamp homepage"
[:tv: Harvard CS50 command line overview]: https://www.youtube.com/watch?v=lnYKOnz9ln8 "Harvard CS50 command line overview"
[Codecademy's Learn the Command Line course]: https://www.codecademy.com/learn/learn-the-command-line "Codecademy's Learn the Command Line course"
[Codecademy Menu]: ./assets/cc-cli-1.png "Codecademy Menu"
[Navigation module]: https://www.codecademy.com/courses/learn-the-command-line/lessons/navigation "codecademy Navigation module"
[Manipulation module]: https://www.codecademy.com/courses/learn-the-command-line/lessons/manipulation "codecademy Manipulation module"
[:tv: thenewboston playlist on Windows Command Prompt]: https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDV6SnbINlVUd0o2xT4JbMu "thenewboston playlist on Windows Command Prompt"
[:book: djangogirls.com Intro to Command Line]: https://tutorial.djangogirls.org/en/intro_to_command_line/ "djangogirls.com Intro to Command Line"
[how to take screenshots on most platforms]: https://zapier.com/blog/best-screen-capture-tool/ "How to take screenshots"
[:book: ss64.com command line reference]: https://ss64.com/ "ss64.com command line reference"
[my codecademy profile]: https://www.codecademy.com/profiles/me "My codecademy profile"
[my codecademy badges]: ./assets/cc-badges.png "My codecademy badges"
[Open the Glitch logs]: ./assets/glitch-logs.png "Open the Glitch logs"
[Glitch console side by side]: ./assets/glitch-console.png "Glitch console side by side with instruction"
[Manual for ls]: ./assets/glitch-man-1.png "Manual for ls command"
[glitch.com]: https://glitch.com "Glitch homepage"
[sp19-01-project slack channel]: https://rccitp175.slack.com/messages/CFJCKFCAE "sp19-01-project slack channel"
[Open commands.sh]: ./assets/01-project-1.png "Open commands.sh"
[Edit commands.sh]: ./assets/01-project-2.png "Edit commands.sh"
[#sp19-01-chat Slack channel]: https://rccitp175.slack.com/messages/CFJ9NRBFD "#sp19-01-chat Slack channel"
