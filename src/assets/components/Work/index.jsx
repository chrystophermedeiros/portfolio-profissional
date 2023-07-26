import {work} from "../../data/work"
import {Container, ContainerItems, Card} from './style'

export function Work() {
    return (
        <Container>
            
            <ContainerItems>
                 
                    {
                        work.map((obj) =>(
                            <Card>
                                <div>
                                    <img src={obj.img} alt="" />
                                    <p>{obj.institution}</p>
                                    <p>{obj.office}</p>
                                </div>
                                <div>
                                    <p>{obj.startdate}</p>
                                    <p>{obj.enddate}</p>
                                </div>
                                
                               
                                <div>
                                     <p>{obj.about}</p>
                                    <h2>Techs:</h2>
                                    {obj.techs.map((tech) => (
                                    
                                        <img src={tech.img} alt="" />
                                    ))}
                                </div>
                            </Card>
                        ))
                    }

       
            
            </ContainerItems>
            
        </Container>
    )
}