import styles from "./Header.module.css";

export const CampoTexto = () => {
	return(
		<div className={styles.field__search}>
			
			<input type="text" 
				placeholder="Buscar" 
			/>
					<i className="fa-solid fa-search"></i>
		</div>
	)
}