import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';

function Presentation(){


    
    return(
        <div id='Presentation'  className={styles.Presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, me chamo João</h1>

            <p>Sou um estudante de tecnologia!, <br/> desenvolvedor de projetos Web, e criador de Designs para expor em sites, <br></br>e também mexendo com banco de dados. <br>
            </br><br></br> Gosto de solucuinar problemas quanto a tecnologia! <br></br> e inovar maneiras diferentes para estruturar uma solução para os problemas. <br></br> acompanhe aqui um pouco das minhas habilidades, projetos e contatos!. </p>
            <ButtonA link='https://github.com/JohnJA12'  text= 'Conecte-se comigo!'/>

        </div>
    )
}

export default  Presentation;
