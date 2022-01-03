/* eslint-disable @typescript-eslint/no-explicit-any */

export type Component = any

// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
    Page: Component
    pageProps: Record<string, unknown>
    pageExports: {
        documentProps?: {
            title: string
            keywords: string
            description: string
            isNotFound?: boolean
        }
    }
    documentProps?: {
        title: string
        keywords: string
        description: string
        isNotFound?: boolean
    }
    isHydration?: boolean
}
