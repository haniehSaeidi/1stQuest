import * as types from './mutation-types'

export const mutations = {
  [types.RESULT] (state, result) {
    state.result = result
    console.log(state.result,'result')
  }
}