import { Vue, Options } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

@Options({})
export default class TestButton extends Vue {
    @State('test')
    private readonly test!: boolean

    @Mutation('toggleTest')
    private readonly toggleTest!: () => void

    onClick(): void {
        this.toggleTest()
    }
}
