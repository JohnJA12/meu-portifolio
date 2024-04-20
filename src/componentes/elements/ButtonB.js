import styles from './ButtonB.module.css'
function ButttonB({text, link}){
    return(
        <div>
         <a href={link} target='_blank'>
            <button className={styles.btn}>{text}</button>
        </a> 
       </div>
    )
}
export default ButttonB;