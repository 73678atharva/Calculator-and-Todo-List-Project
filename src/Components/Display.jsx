import styles from './Display.module.css';
const Display = ({display})=>{
    return(
        <div className={styles.mainDisplay}>
            <input type="text" className={styles.displayContainer} value={display} readOnly/>
         </div>
    );
}
export default Display;