/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */
import { create } from 'zustand'

import createAuthSlice, { AuthSlice } from './create-auth-slice'

export type AppState = AuthSlice

const useStore = create<AppState>((set) => ({
  ...createAuthSlice(set),
}))

export default useStore
