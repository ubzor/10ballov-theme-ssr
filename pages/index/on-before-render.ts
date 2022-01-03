import type { PageContextBuiltIn } from 'vite-plugin-ssr'

async function onBeforeRender(_pageContext: PageContextBuiltIn) {
    return {
        pageContext: {
            documentProps: {
                title: 'Homepage title',
                keywords: 'Homepage keywords',
                description: 'Homepage description'
            }
        }
    }
}

export { onBeforeRender }
