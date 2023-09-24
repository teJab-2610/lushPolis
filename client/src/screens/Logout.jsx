import styles from "./syles.module.css";
import {logout} from "../auth/auth";
function Logout(){
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<h1>LushPolis</h1>
				<button className={styles.white_btn} onClick={() => logout()}>
					Logout
				</button>
			</nav>
		</div>
	);
}

export default Logout