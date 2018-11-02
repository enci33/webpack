const state = {
    tabName: "1"
}

const mutations = {
    CHANGE_BAR (state, value) {
        state.tabName = value
    }
}

const actions = {
    someAsyncTask ({ commit }) {
        // do something async
        commit('CHANGE_BAR')
    }
}

export default {
    state,
    mutations,
    actions
}
