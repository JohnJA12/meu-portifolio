import styles from './Navbar.module.css'
import { FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href=' https://wa.me/24993258164' target='_blank'><FaWhatsapp size={30}/></a></li>
                <li><a href='https://github.com/JohnJA12' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin size={30}/></a></li>   
            </ul>
        </div>
    )
}
export default Navbar;