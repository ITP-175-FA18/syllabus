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
          { text: '00 Technology Setup', link: 'setup.md'},
          { text: '01 Linux CLI: File System, I/O', link: 'cli-1.md'},
          // { text: '02 Linux CLI: Editors, Environment, Scripting', link: 'cli-2.md'},
          // { text: '03 Git & Github', link: 'git.md'},
          // { text: '04 JavaScript: Variables, Data Types, Operators', link: 'js-1.md'},
          // { text: '05 JavaScript: Strings, Arrays', link: 'js-2.md'},
          // { text: '06 JavaScript: Functions, Comparison', link: 'js-3.md'},
          // { text: '07 JavaScript: Objects', link: 'js-4.md'},
          // { text: '08 JavaScript: Iteration', link: 'js-5.md'},

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