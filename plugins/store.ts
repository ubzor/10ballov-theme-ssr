import { createStore } from 'vuex'

import root from '@/store/root/root-store'

const store = createStore({
    ...root,

    modules: {}
})

export default store
