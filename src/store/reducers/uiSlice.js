import { createSlice } from "@reduxjs/toolkit"


const initialState = {
	isLogeding: false,
	isLoading: false
}

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialState,
	reducers: {
		showLoading(state, action) {
			state.isLoading = !state.isLoading
		},
		login(state, action) {
			state.isLogeding = true
		},
		logout(state, action) {
			state.isLogeding = false
		}
	}
})

export const uiActions = uiSlice.actions
export default uiSlice