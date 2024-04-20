import { FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
             <ul>
                <li><a href=' https://wa.me/24993258164' target='_blank'><FaWhatsapp size={30}/></a></li>
                <li><a href='https://github.com/JohnJA12' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin size={30}/></a></li>   
            </ul>
            <p>joao10profissionaltech@gmail.com</p>
            <p> João Augusto @2024 </p>
        </div>
    )
}

export default Footer;