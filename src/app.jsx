import "regenerator-runtime/runtime"
import React from 'react'
import Loading from './components/loading'
import DefaultPage from './pages/default'
import NotFound from './components/notFound'
import TextBlock from './blocks/text'

const runApp = async () => {
    const demoApp = {
        components: {
            header: () => <h1>Hello World</h1>,
            footer: () => null,
            loading: Loading,
            notFound: NotFound,
        },
        pages: [
            DefaultPage
        ],
        blocks: [
            TextBlock
        ],
        cms: () => import('./cms'),
        isDev: true
    }

    window.React = React
    const runBluxApp = (await import('blux-app')).default
    
    runBluxApp(demoApp, process.env.IS_CMS)
}

runApp()
