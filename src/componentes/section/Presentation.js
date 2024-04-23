import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';

import {useEffect, useState} from 'react';
function Presentation(){

    const [text,setText] = useState('');
    const toRotate = ['João Augusto', 'Desenvolvedor Fullstack', 'Estudante de Tecnologia'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        },delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText ){
         setIsDeleting(true);
         setDelta(period)
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return(
        <div id='Presentation'  className={styles.Presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>

            <p>Sou um estudante de tecnologia!, <br/> desenvolvedor de projetos Web, e criador de Designs para expor em sites, <br></br>e também mexendo com banco de dados. <br>
            </br><br></br> Gosto de solucuinar problemas quanto a tecnologia! <br></br> e inovar maneiras diferentes para estruturar uma solução para os problemas. <br></br> acompanhe aqui um pouco das minhas habilidades, projetos e contatos!. </p>
            <ButtonA link='https://github.com/JohnJA12'  text= 'Conecte-se comigo!'/>

        </div>
    )
}

export default  Presentation;
