import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import React from 'react';

import { education } from '../../data/education';
import { Container, ContainerItems } from './style';
export function Education() {
  return (
    <div>
      {education.map((obj) => (
        <Container key={obj.id}>
          <ContainerItems>
            <Timeline className="teste" position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto' }}
                  align="center"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography color={'var(--color-primary)'}>
                    <p>{obj.institution}</p>
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <img width={60} src={obj.img} alt="" />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '20px', px: 4 }}>
                  <Typography color={'var(--color-primary-variant)'}>
                    {obj.course}
                  </Typography>
                  <Typography>{obj.level}</Typography>
                  <Typography>{obj.status}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </ContainerItems>
        </Container>
      ))}
    </div>
  );
}
