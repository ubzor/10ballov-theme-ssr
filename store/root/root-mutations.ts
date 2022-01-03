import { MutationTree } from 'vuex'

import { RootState } from '@/typings/store/root'

const mutations: MutationTree<RootState> = {
    toggleTest: (state) => {
        state.test = !state.test
        window.localStorage.setItem('test', JSON.stringify(state.test))
    },

    setTest: (state, value: boolean) => {
        state.test = value
        window.localStorage.setItem('test', JSON.stringify(state.test))
    }
}

export default mutations
