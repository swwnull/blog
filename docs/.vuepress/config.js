module.exports = {
    title:'暗行夜使',
    description: '暗行夜使的学习记录',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    base:'/blog/',
    themeConfig: {
        lastUpdated: '最近更新时间',
        repo: 'swwnull/blog',
        repoLabel: '博客源码',
        editLinks: true,
        editLinkText: '编辑页面！',
        docsDir: 'docs',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'about', link: '/js/' },
            { text: 'External', link: '/css/' },
            {
                text: 'about',
                ariaLabel: 'me',
                items: [
                    { text: 'github', link: 'https://github.com/swwnull/blog' },
                    { text: 'blog', link: '' }
                ]
            }
        ],
        sidebar: {
            '/css/': [
                '',     /* /foo/ */
                'css1',  /* /foo/one.html */
                'css2'   /* /foo/two.html */
            ],

            '/html/': [
                '',      /* /bar/ */
                'html1', /* /bar/three.html */
                'html2'   /* /bar/four.html */
            ],

            // fallback
            '/js/': [
                '',        /* / */
                'js1', /* /contact.html */
                'js2'    /* /about.html */
            ]
        },
        displayAllHeaders: true,
        sidebarDepth: 2
    }
}