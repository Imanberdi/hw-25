
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/reducers/uiSlice";
import classes from './LoginForm.module.css'

const LoginForm = () => {

	const dispatch = useDispatch()

	const [gmail, setGmail] = useState({
		gmail: '',
		gmailIsValid: true,
	});

	const [password, setPassword] = useState({
		password: '',
		passwordIsValid: true,
	});

	const gmailHandl = (e) => {
		setGmail({
			gmail: e.target.value,
			gmailIsValid: e.target.value.includes('@')
		})
	}

	const passwordHandl = (e) => {
		setPassword({
			password: e.target.value,
			passwordIsValid: e.target.value.trim().length > 5
		})
	}

	const formIsValid = gmail.gmail.includes('@') && password.password.trim().length > 5

	const userData = { gmail: gmail.gmail, password: password.password }



	const submitHandle = (e) => {
		e.preventDefault();
		localStorage.setItem('userData', JSON.stringify(userData))
		dispatch(uiActions.showLoading())
		setTimeout(() => {
			dispatch(uiActions.login())
			dispatch(uiActions.showLoading())
		}, 2000)

	}
	return (
		<>
			<div className={classes.container}>
				<div className={classes.title}> User Profile
					<form onSubmit={submitHandle}>
						<div className={classes['form-group']}>
							<input
								helperText={gmail.gmailIsValid ? "" : "must include @"}
								type='email'
								className='email'
								placeholder='Email'
								onChange={gmailHandl}
							/>
						</div>
						<div className={classes['form-group']}>
							<input
								type='password'
								className='password'
								placeholder='Password'
								onChange={passwordHandl}
							/>
						</div>
						<button disabled={!formIsValid} type='submit' className={classes['button']}>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginForm;