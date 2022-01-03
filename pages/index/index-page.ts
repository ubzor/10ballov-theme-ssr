import { Vue, Options } from 'vue-property-decorator'

import { onBeforeRender } from './on-before-render'

@Options({})
export default class IndexPage extends Vue {}

export { onBeforeRender }
