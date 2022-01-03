import { Vue, Options } from 'vue-property-decorator'

import LinkElement from '@/components/link-element/link-element.vue'
import TestButton from '@/components/test-button/test-button.vue'

@Options({
    components: {
        LinkElement,
        TestButton
    }
})
export default class SiteHeader extends Vue {}
