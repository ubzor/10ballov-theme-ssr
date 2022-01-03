import { Vue, Options } from 'vue-property-decorator'
import { Action } from 'vuex-class'

import SiteHeader from '@/components/site-header/site-header.vue'

@Options({
    components: {
        SiteHeader
    }
})
export default class PageWrapper extends Vue {
    @Action('initializeFromLocalStorage')
    private readonly initializeFromLocalStorage!: () => void

    mounted(): void {
        this.initializeFromLocalStorage()
    }
}
