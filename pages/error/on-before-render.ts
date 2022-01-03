import type { PageContextBuiltIn } from 'vite-plugin-ssr'

async function onBeforeRender(
    pageContext: PageContextBuiltIn & { is404: boolean }
) {
    return {
        pageContext: {
            documentProps: {
                title: pageContext.is404
                    ? 'Page not found'
                    : 'Internal server error',
                keywords: '',
                description: ''
            }
        }
    }
}

export { onBeforeRender }
