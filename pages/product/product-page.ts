import { Vue, Options, Prop } from 'vue-property-decorator'
import { navigate } from 'vite-plugin-ssr/client/router'

import { onBeforeRender } from './on-before-render'

@Options({})
export default class ProductPage extends Vue {
    @Prop({ default: false })
    readonly status!: boolean

    mounted(): void {
        // console.log(this.status)
    }

    goSomewhere() {
        navigate('/product/321/?a=b')
    }
}

export { onBeforeRender }
