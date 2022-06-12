import { useDispatch } from "react-redux"
import { uiActions } from "../store/reducers/uiSlice"

export const UserProfile = () => {
	const dispatch = useDispatch()

	const onLogout = () => {
		dispatch(uiActions.showLoading())
		setTimeout(() => {
			dispatch(uiActions.showLoading())
			dispatch(uiActions.logout())
		}, 2000)
	}



	return (
		<div>
			<h2>Welcome to Home</h2>
			<button onClick={onLogout} >Logout</button>
		</div>
	)
}