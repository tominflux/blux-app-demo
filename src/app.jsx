import React from 'react'
import Loading from './components/loading'
import DefaultPage from './pages/default'
import TextBlock from './blocks/text'
import runApp from 'blux-app'
import NotFound from './components/notFound'

const demoApp = {
    components: {
        header: () => <h1>Hello World</h1>,
        footer: () => null,
        loading: Loading,
        notFound: NotFound
    },
    pages: [
        DefaultPage
    ],
    blocks: [
        TextBlock
    ],
    isDev: true
}

runApp(demoApp, process.env.IS_CMS)
