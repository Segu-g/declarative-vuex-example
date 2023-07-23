import { InjectionKey } from 'vue';
import { Store, createStore, useStore as defaultUseStore } from 'vuex';

import type { State as CountStoreState } from './countStore';
import { countModule } from './countStore';

export type State = { count: CountStoreState };
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: {
    count: countModule,
  },
});

export const useStore = () => defaultUseStore<State>(key);
