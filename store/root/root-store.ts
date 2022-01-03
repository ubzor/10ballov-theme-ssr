import state from './root-state'
import mutations from './root-mutations'
import actions from './root-actions'

import type { Module } from 'vuex'
import type { RootState } from '@/typings/store/root'

const store: Module<RootState, RootState> = {
    state,
    mutations,
    actions
}

export default store
