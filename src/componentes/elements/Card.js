import styes from './Card.module.css'
import ButttonB from './ButtonB'

function Card({img,title,tech, description, repo, site}){
    
    return(
        <div className={styes.card}>
            <a href= {site}>
                <img src={img} alt='ERROR'/>
            </a>

        
            <section>
                <h3>{title}</h3>
                <p><strong> Tecnologia: </strong> {tech}</p>
                <p> {description}</p>
                 <ButttonB text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
} 
export default Card
