import styes from './Card.module.css'
import { useState } from 'react'

import ButttonB from './ButtonB'


function Card({img,title,tech, description, repo, site}){

    const [info,setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }



    return(
        <div onMouseLeave={InfoOff} className={styes.card}>
            <a onMouseEnter={InfoOn} href= {site}>
                <img src={img} alt='ERROR'/>
            </a>

            {info == true &&(

            <section>
                <h3>{title}</h3>
                <p><strong> Tecnologia: </strong> {tech}</p>
                <p> {description}</p>
                 <ButttonB text='Acesse o repositório' link={repo}/>
            </section>
        )}
        </div>
    )
} 
export default Card
