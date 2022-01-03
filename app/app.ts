import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue'

import store from '@/plugins/store'
import i18n from '@/plugins/i18n'
import { setPageContext } from '@/plugins/page-context'

import PageWrapper from '@/components/page-wrapper/page-wrapper.vue'

import type { Component, PageContext } from '@/typings/page-context'

export { createApp }

function createApp(pageContext: PageContext) {
    const { Page } = pageContext

    let rootComponent: Component
    const App = defineComponent({
        name: 'App',
        data: () => ({
            Page: markRaw(Page),
            pageProps: markRaw(pageContext.pageProps || {})
        }),
        created() {
            rootComponent = this
        },
        render() {
            return h(
                PageWrapper,
                {},
                {
                    default: () => {
                        return h(this.Page, this.pageProps)
                    }
                }
            )
        }
    })

    const app = createSSRApp(App)
    app.use(store)
    app.use(i18n)

    // We use `app.changePage()` to do Client Routing, see `_default.page.client.js`
    objectAssign(app, {
        changePage: (pageContext: PageContext) => {
            Object.assign(pageContextReactive, pageContext)
            rootComponent.Page = markRaw(pageContext.Page)
            rootComponent.pageProps = markRaw(pageContext.pageProps || {})
        }
    })

    // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `_default.page.client.js`).
    // We therefore use a reactive pageContext.
    const pageContextReactive = reactive(pageContext)

    // Make `pageContext` accessible from any Vue component
    setPageContext(app, pageContextReactive)

    return app
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj, ObjAddendum>(
    obj: Obj,
    objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
    Object.assign(obj, objAddendum)
}
