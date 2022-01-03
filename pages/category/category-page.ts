import { Vue, Options, Prop } from 'vue-property-decorator'
// import { navigate } from 'vite-plugin-ssr/client/router'

import { onBeforeRender } from './on-before-render'

@Options({})
export default class ProductPage extends Vue {
    @Prop({ default: {} })
    readonly category!: Record<string, number | string>
}

export { onBeforeRender }
