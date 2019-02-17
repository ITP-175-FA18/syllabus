---
prev: ./cli-2.md
# next: ./js-1.md
---

# Intro to Git

In this modules we'll introduce the git version control software.

## :books: Watch and Read

### Git flow using the Github website

* :book: [Github's git handbook][]
* :book: [Understanding the Github flow][]

These three Rainbow Poem videos cover the standard git workflow. I recommend practice by following along and creating your own poem repo.

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/BCQHnlnPusY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/oPpnCh7InLY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="res-em"><iframe width="560" height="315" src="https://www.youtube.com/embed/_NrSWLQsDL4?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

**Key Terms**

* Version control
* Repository or repo
* Commit
* Commit Hash or SHA
* Push
* Branch
* Pull Request
* Merge
* Fork
* Clone

**Review**

* :tv: [Git & GitHub: GitHub Workflow][]
* :tv: [Git & GitHub: Working Locally][]
* :tv: [Git & GitHub: Git Status][]
* :tv: [Git & GiHub: Saved Changes][]
* :tv: [Git & GitHub: Git Pull and Git Push][]

### Git flow using the git CLI

1. Login to codecademy using your github account and complete the [Basic Git Workflow][] module

If you'd like to continue watching coding train videos that cover the git CLI, there are two that you may find useful.

* :tv: [Cloning a repo][]
* :tv: [git init and git add][]

### Practice using the git CLI on glitch.com

There are a few tweaks you have to make to use git on glitch.com, but in many ways it is similar to setting up git on a new computer.

Because every glitch project is already a git repository, you cannot easily do a `git init`. You can however, clone from a github repository instead of using one of glitch's templates (hello-webpage) as we've done in the past.

1. Login to [glitch.com][] and click New Project
1. Select the Clone from Github option and paste in the clone URL from the repo you created while following along with Rainbow Poem earlier.
   1. If you did not follow along with Rainbow Poem earlier, go and create a new github repo on [github.com][] now.

   :::danger Repo cannot be empty
   Glitch requires your git repository to have at least 1 file to clone correctly. Be sure to create a readme or other file before selecting the Clone from github option.
   :::

1. Create new files or edit existing files to make changes we want to push to github
1. Enter `git add FILENAME` to add all new and modified files to the git staging area

    :::tip
    You can use `git add .` to add all changes at once to the staging area, but be careful as this may add changes you aren't ready to commit.
    :::

1. Enter `git status` and verify that all your edits appear in the list
1. Enter `git commit -m "Edits on glitch"` and you will get an error, or a question rather. Git needs to know who you are.

    :::tip
    Even though git is installed on your glitch server, it hasn't been configured. This is a step every new computer must undergo before git can fully be used on that machine.

    On a normal computer, this is something you do once. Due to the nature of glitch, this is something you'll have to do each time you create a new project (which won't be required after this week, we'll use other methods instead).
    :::

1. Enter `git config user.email "YOUR GITHUB EMAIL ADDRESS"`
1. Enter `git config user.name "YOUR NAME"`
1. Now try enterring `git commit -m "Edits on glitch"` again. You no longer get an error and your commit is successfully staged.
1. Enter `git push origin master` and you will be asked for your github username and password.

    :::tip
    You may be thinking, didn't I just do this? Not exactly.

    In steps 7-8, the email and name you setup was for git itself. Git was asking, "who do I say edited this file if someone asks".

    Now, github.com is asking "you say you want to upload these files to a repo on github, I need you to login to github.com to verify you have permission to do that".
    :::

1. Enter your github username when asked, you will see what you type.
1. Enter your github password when asked. **You will not see what you type** when typing your password, this is common when a CLI asks you for a password.
1. Afterwards, if your username and password are correct, you'll see `Counting objects:` and glitch will successfully push your edits to github
1. Go to the repo on [github.com][] and verify your edits have been made.

## Extra Resources

* :book: [https://guides.github.com/]()
* :computer: [https://github.com/git-school/visualizing-git]()
* :book: [https://git-scm.com/]()
* :book: [http://git-scm.com/book]()
* :book: [http://gitref.org/]()
* :book: [https://help.github.com/articles/git-and-github-learning-resources/]()

<div class="asn chat">

## :speech_balloon: 03 Chat

**Due: 03/04/19 9 AM**

### Instructions

The purpose of this chat is to explore uses of Github in your field.

1. Use Google and [github's explore feature][] and find a repo that is related to your desired career field in some fashion.
1. After reviewing the repo, reflect on these questions.
   1. Why do you the the creators of the repo put it on Github?
   1. What other uses for Github can you imagine for your career field?
1. Join the the [#sp19-03-chat Slack channel][] and share the URL of your repo and your responses to the questions.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 20% | Share the URL of the repo you found earlier in step 1. |
| 80% | Share thoughtful responses to the 2 questions |
| +10% | Extra credit: Engage your fellow students on what you find interesting about their posts, get clarity on something you don't understand, offer help with others ask questions about your example. |

You can always send me questions privately via email, txt, or Direct Message. But I encourage you to ask them in  `#q-and-a` or in the channel for that assignment (like `#sp19-03-chat`) so that you and your fellow students can help each other out. Learning and programming are not solo sports!

</div>
<div class="asn journal">

## :memo: 03 Journal

**Due: 03/04/19 9 AM**

The purpose of this journal is to review the concepts covered this week and reflect on how well you understand them.

### Instructions

1. Visit [my codecademy profile][] and click the Badges button in the middle of the page and ensure you've completed the "Basic Git Workflow" Lesson.
1. `Direct Message` (DM) to Michael Greene (profmikegreene) with two lists.
    1. One for the things you understand most confidently.
    1. One for the things you are struggling with.

>The items in these lists can be vocabulary, assignment tasks, concepts, whatever sticks out in your mind. Try to find at least two items per list and feel free to make them as long as you like.

### Grading Rubric

| % | Explanation|
|-----|:--------|
| 40% | Having lessons complete badges for the Git lesson in your codecademy profile |
| 30% | Direct message to `profmikegreene` containing a list of things you are confident you understand |
| 30% | Direct message to `profmikegreene` containing a list of things you are struggling with |

</div>

<div class="asn project">

## :atom_symbol: 03 Project

**Due: 03/04/19 9 AM**

The purpose of this project is to prove your understanding of the concepts in this lesson.

### Instructions

1. Click `Channels` in the Slack sidebar to view all channels
1. Join the [sp19-03-project slack channel][]
1. In that Slack channel, you will see a link that will take you to Github Classroom
1. Click the `Accept this assignment` button and Github will create a version of the project for you.
1. Once this step is complete, the page should say "Your assignment has been created here: https://github.com/RCC-ITP-175/sp19-03-". Click this link and visit your repository.
1. Create a file called `terms.md` that defines the following git terms in your own words. **Review the content here and/or research the web until you're confident in your own definition of the terms.**

    * Version control
    * Repository or repo
    * Commit
    * Commit hash or SHA
    * Push
    * Branch
    * Pull Request
    * Merge
    * Fork

1. Create a new file `readme.md` if one doesn't already exist.
1. Make at least 3 commits that add and delete various text to `readme.md`
1. Create a new branch called `patch-1`
1. Edit and make at least 3 more commits readme.md on the `patch-1` branch
1. Create a new file called `patch-1.md` on the `patch-1` branch
1. Create a pull request to merge `patch-1` back to master
1. View the history of your repo visually by clicking the Insights tab and going to Network.

**Now, we'll cover the same concepts using the git CLI.** Refer to [Practice using the git CLI on glitch.com][] if you encounter issues completing the remaining steps.

1. Create a new Glitch project using the `Clone from git repo` option and clone your sp19-03-USERNAME repo
1. Open the Glitch console and configure git user.email and user.name
1. Enter `git checkout -b glitch` to create and checkout a new branch called glitch
1. Enter `cp terms.md newterms.md` to copy your terms to a new file
1. Enter `echo $API_SERVER_EXTERNAL >> history.txt` in the glitch console
1. Enter `history >> history.txt` in the glitch console
1. Use `git add` and `git commit` commands to add history.txt to the staging area and commit it to the glitch branch.
1. Enter `git push origin glitch` to push the glitch branch to github
1. Visit your repo on [github.com][] and click the green `Compare & pull request` button.
1. Create a pull request.
1. Merge the pull request. Be sure to click the `confirm merge` button.

All done!

### Grading Rubric

| pts | Explanation|
|-----|:--------|
| 5 | Create a terms.md that defines key terms |
| 5 | Make at least 3 commits using the github website |
| 5 | Create a patch-1 branch using the github website |
| 5 | Create a pull request using the github website |
| 5 | Merge your pull request using the github website |
| 5 | Clone your sp19-03-project repo on glitch.com |
| 5 | Create a glitch branch via glitch CLI |
| 5 | Add your history to history.txt to the glitch branch |
| 5 | Push your glitch branch to github |
| 5 | Merge your glitch branch to master on github |

</div>

[//]: # (References)
[github.com]: https://github.com "Github homepage"
[codecademy.com]: https://www.codecademy.com/ "codecademy homepage"
[glitch.com]: https://glitch.com "Glitch homepage"
[freecodecamp.org]: https://www.freecodecamp.org "freeCodeCamp homepage"
[my codecademy profile]: https://www.codecademy.com/profiles/me "My codecademy profile"
[sp19-03-project slack channel]: https://rccitp175.slack.com/messages/CG97YJG12 "sp19-03-project slack channel"
[#sp19-03-chat Slack channel]: https://rccitp175.slack.com/messages/CGAN0BV5L "#sp19-03-chat Slack channel"
[Cloning a repo]: https://youtu.be/yXT1ElMEkW8 "Cloning a git repo in the CLI"
[git init and git add]: https://youtu.be/9p2d-CuVlgc "Using git init and git add in the CLI"
[Basic Git Workflow]: https://www.codecademy.com/courses/learn-git/lessons/git-workflow/resume "Basic Git Workflow on codecademy.com"
[How to Backtrack in git]: https://www.codecademy.com/courses/learn-git/lessons/git-backtracking/resume "How to Backtrack in git on codecademy.com"
[Git Branching]: https://www.codecademy.com/courses/learn-git/lessons/git-branching/resume "Git Branching on codecademy.com"
[Git Teamwork]: https://www.codecademy.com/courses/learn-git/lessons/git-teamwork/resume "Git Teamwork on codecademy.com"
[github's explore feature]: https://github.com/explore "Explore Github"
[Github's git handbook]: https://guides.github.com/introduction/git-handbook/ "Github's git handbook"
[Understanding the Github flow]: https://guides.github.com/introduction/flow/ "Understanding the github flow"
[Git & GitHub: GitHub Workflow]: https://www.youtube.com/watch?v=47E-jcuQz5c&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=2&t=0s "Git & GitHub: GitHub Workflow"
[Git & GitHub: Working Locally]: https://www.youtube.com/watch?v=rBbbOouhI-s&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3&t=0s "Git & GitHub: Working Locally"
[Git & GitHub: Git Status]: https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=4&t=0s "Git & GitHub: Git Status"
[Git & GiHub: Saved Changes]: https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&t=0s "Git & GiHub: Saved Changes"
[Git & GitHub: Git Pull and Git Push]: https://www.youtube.com/watch?v=-uQHV9GOA0w&index=6&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&t=0s "Git & GitHub: Git Pull and Git Push"
[Practice using the git CLI on glitch.com]: ./git.html#practice-using-the-git-cli-on-glitch-com "Practice using the git CLI on glitch.com"