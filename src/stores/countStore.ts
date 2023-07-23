import { Module } from 'vuex';

import type { State as RootState } from '.';

export type State = {
  count: number;
};

export const countModule: Module<State, RootState> = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
};
