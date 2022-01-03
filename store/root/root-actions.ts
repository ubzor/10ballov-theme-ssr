import type { ActionTree } from 'vuex'
import type { RootState } from '@/typings/store/root'

const actions: ActionTree<RootState, RootState> = {
    initializeFromLocalStorage: ({ commit }) => {
        const test = window.localStorage.getItem('test')
        if (test) {
            commit('setTest', JSON.parse(test))
        }
    }
}

export default actions
