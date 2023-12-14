import React from 'react';

import { work } from '../../data/work';
import { Container, ContainerItems, Card } from './style';

export function Work() {
  return (
    <Container>
      <ContainerItems>
        {work.map((obj) => (
          <Card key={obj.id}>
            <header>
              <article className="conatinerLeft">
                <img src={obj.img} alt="" />
                <div className="left">
                  <p className="institution">{obj.institution}</p>
                  <p className="oficce">{obj.office}</p>
                </div>
              </article>
              <article>
                <p>
                  {obj.startdate} - {obj.enddate}
                </p>
              </article>
            </header>

            <article className="about">
              <p>{obj.about}</p>
              <h2>Techs:</h2>

              <div className="techs">
                {obj.techs.map((tech) => (
                  <div className="containerTechs" key={tech.id}>
                    <img src={tech.img} alt="" />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </article>
          </Card>
        ))}
      </ContainerItems>
    </Container>
  );
}
