
import { create } from 'zustand'

import createAuthSlice, { AuthSlice } from './create-auth-slice'

export type AppState = AuthSlice

const useStore = create<AppState>((set) => ({
  ...createAuthSlice(set),
}))

export default useStore
