import { Vue, Options, Prop } from 'vue-property-decorator'

import { onBeforeRender } from './on-before-render'

@Options({})
export default class ErrorPage extends Vue {
    @Prop({ default: false })
    readonly is404!: boolean
}

export { onBeforeRender }
