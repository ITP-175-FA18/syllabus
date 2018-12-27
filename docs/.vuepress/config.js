// .vuepress/config.js
module.exports = {
  base: '/course/',
  title: 'RCC ITP 175',
  description: 'Course content for RCC ITP 175',
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Slack', link: 'https://rccitp175.slack.com/' },
      { text: 'Github', link: 'https://github.com' },
      { text: 'Glitch', link: 'https://glitch.com' }
    ],
    sidebar: 'auto',
    markdown: {
        lineNumbers: true
    }
  },
  plugins: [ '@gastrogeek/vuepress-plugin-fontawesome' ]
}