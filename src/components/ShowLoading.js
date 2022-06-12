import classes from './ShowLoading.module.css'


export const ShowLoading = () => {
	return (
		<div className={classes['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div >
	)
}