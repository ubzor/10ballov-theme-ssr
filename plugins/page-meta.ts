import type { PageContext } from '@/typings/page-context'

export { getPageMeta }

function getPageTitle(pageContext: PageContext): string {
    const title =
        // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
        (pageContext.pageExports.documentProps || {}).title ||
        // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
        (pageContext.documentProps || {}).title ||
        '10 Баллов'
    return title
}

function getPageKeywords(pageContext: PageContext): string {
    const keywords =
        (pageContext.pageExports.documentProps || {}).keywords ||
        (pageContext.documentProps || {}).keywords ||
        ''
    return keywords
}

function getPageDescription(pageContext: PageContext): string {
    const description =
        (pageContext.pageExports.documentProps || {}).description ||
        (pageContext.documentProps || {}).description ||
        ''
    return description
}

function getPageMeta(
    pageContext: PageContext
): Record<'title' | 'keywords' | 'description', string> {
    return {
        title: getPageTitle(pageContext),
        keywords: getPageKeywords(pageContext),
        description: getPageDescription(pageContext)
    }
}
