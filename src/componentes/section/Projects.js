import ButttonB from "../elements/ButtonB";
import Card from "../elements/Card";
import styles from './Projects.module.css'
import dnc from '../../image/projects/dnc.svg'
import controle from '../../image/projects/controle.svg'

function Projects (){
    return(
        <div id='Projects' className={styles.Projects}>
            <h1> Projetos</h1>
            <Card
            img={dnc}
            title='LP - DNC'
            tech= 'HTML, CSS, JS'
            description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
            repo='https://github.com/JohnJA12/projeto-landing-page'
            site='https://dnclpformacao.netlify.app/'
            />
            <Card
             img={controle}
             title='Controle de Produtos'
             tech= 'JS'
             description='Desenvolvimento de uma Landing Page para controlar produtos cadastrados'
             repo='https://github.com/JohnJA12/Controle-Produtos'
             site='https://controleprodu.netlify.app/'/>
           
            <ButttonB text='Acesse meu repositório' link='https://github.com/JohnJA12?tab=repositories'/>
            </div>
    )
}
 export default Projects;