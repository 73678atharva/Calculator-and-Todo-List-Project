import styles from './ButtonContainer.module.css'
const buttonName = ['C' , '1' , '2' ,'+', '3', '4', '-', '5', '6', '*',
    '7', '8', '/', '=', '9', '0','.'];
 
const ButtonContainer = ({onButtonClick})=>{
    return(
        <div className = {styles.buttonContainer}>
            {buttonName.map(buttonNames=> <button className = {`${styles.button} btn btn-primary`} onClick={onButtonClick}><p className={styles.letter}>{buttonNames}</p></button>
            )}
        </div>
    );
}
export default ButtonContainer;