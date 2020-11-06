
const TextBlock = {
    type: 'text',
    public: () => import('./public'),
    cms: () => import('./cms'),
    common: () => import('./common')
}

export default TextBlock