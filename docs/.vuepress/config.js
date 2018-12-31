// .vuepress/config.js
module.exports = {
  base: '/course/',
  title: 'RCC ITP 175',
  description: 'Course content for RCC ITP 175',
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Course Outline',
        items: [
          { text: 'Home', link: '/'},
          { text: 'Technology Setup', link: 'setup.md'},
          { text: 'CLI: File System, I/O', link: 'cli-1.md'},
          { text: 'CLI: Editors, Environment, Scripting', link: 'cli-2.md'},
          { text: 'Git & Github', link: 'git.md'},
          { text: 'JS: Variables, Data Types, Operators', link: 'js-1.md'},
          { text: 'JS: Strings, Arrays', link: 'js-2.md'},
          { text: 'JS: Functions, Comparison', link: 'js-3.md'},
          { text: 'JS: Objects', link: 'js-4.md'},
          { text: 'JS: Iteration', link: 'js-5.md'},

        ]  },
      { text: 'Course Tools',
        items:  [
        { text: 'freeCodeCamp', link: 'https://learn.freecodecamp.org' },
        { text: 'codecademy', link: 'https://www.codecademy.com' },
        { text: 'Slack', link: 'https://rccitp175.slack.com' },
        { text: 'Github', link: 'https://github.com' },
        { text: 'Glitch', link: 'https://glitch.com' }
        ] },
    ],
    sidebar: 'auto',
    markdown: {
        lineNumbers: true
    }
  }
}