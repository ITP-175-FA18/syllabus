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
          { text: 'Technology Setup', link: '1-setup.md'},
          { text: 'CLI Languages', link: '2-cli-languages.md'},
          { text: 'Concepts 1', link: '3-programming-concepts-1.md'},
          { text: 'Markup Languages', link: '4-markup-languages.md'},
          { text: 'Concepts 2', link: '5-programming-concepts-2.md'},
          { text: 'Interpreted Languages', link: '6-interpreted-langugaes.md'},
        ]  },
      { text: 'Slack', link: 'https://rccitp175.slack.com/' },
      { text: 'Github', link: 'https://github.com' },
      { text: 'Glitch', link: 'https://glitch.com' }
    ],
    sidebar: 'auto',
    markdown: {
        lineNumbers: true
    }
  }
}