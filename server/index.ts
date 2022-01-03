import express from 'express'
import { createPageRenderer } from 'vite-plugin-ssr'
import * as vite from 'vite'
import dotenv from 'dotenv'

import type { AsyncReturnType } from 'type-fest'
import type { PageContext } from '@/typings/page-context'

dotenv.config({ path: '../.env' })

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
    const app = express()

    let viteDevServer
    if (isProduction) {
        app.use(express.static(`${root}/dist/client`))
    } else {
        viteDevServer = await vite.createServer({
            root,
            server: { middlewareMode: 'ssr' }
        })
        app.use(viteDevServer.middlewares)
    }

    const renderPage = createPageRenderer({ viteDevServer, isProduction, root })
    app.get('*', async (req, res, next) => {
        const url = req.originalUrl
        const pageContextInit = {
            url
        }
        let pageContext: AsyncReturnType<typeof renderPage> & {
            documentProps?: PageContext['documentProps']
        } = await renderPage(pageContextInit)
        let { httpResponse } = pageContext
        if (!httpResponse) return next()

        if (pageContext.documentProps?.isNotFound) {
            pageContext = await renderPage({ url: '/doesNotExist' })
            httpResponse = pageContext.httpResponse
        }

        if (!httpResponse) return next()

        const { bodyNodeStream: stream, statusCode, contentType } = httpResponse
        res.status(statusCode).type(contentType)
        stream.pipe(res)
    })

    const port = process.env.VITE_DEV_SERVER_PORT
    app.listen(port)
    console.log(`Server running at http://localhost:${port}`)
}
