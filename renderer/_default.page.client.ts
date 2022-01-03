import { useClientRouter } from 'vite-plugin-ssr/client/router'

import { createApp } from '@/app/app'
import { getPageMeta } from '@/plugins/page-meta'

import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router'
import type { PageContext } from '@/typings/page-context'

let app: ReturnType<typeof createApp>
const { hydrationPromise } = useClientRouter({
    render(pageContext: PageContextBuiltInClient & PageContext) {
        if (!app) {
            app = createApp(pageContext)
            app.mount('#app')
        } else {
            app.changePage(pageContext)
        }

        const { title, keywords, description } = getPageMeta(pageContext)

        document.title = title
        document.head
            .querySelector('meta[name=keywords]')
            ?.setAttribute('content', keywords)
        document.head
            .querySelector('meta[name=description]')
            ?.setAttribute('content', description)
    },
    // Vue needs the first render to be a hydration
    ensureHydration: true,
    prefetchLinks: true,
    onTransitionStart,
    onTransitionEnd
})

hydrationPromise.then(() => {
    // console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
    // console.log('Page transition start')
    document.querySelector('.content')?.classList.add('page-transition')
}

function onTransitionEnd() {
    // console.log('Page transition end')
    document.querySelector('.content')?.classList.remove('page-transition')
}
