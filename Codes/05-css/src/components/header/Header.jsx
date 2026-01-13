import React from 'react'
import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.hdr}>
			<h3>Welcome to Sheyrians</h3>
			<button className={styles.btn}>Sign Up</button>
		</div>
	)
}  

export default Header