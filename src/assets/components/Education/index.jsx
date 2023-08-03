import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { education } from "../../data/education";
import { Container, ContainerItems } from "./style";
export function Education() {
  return (
    <div>
      {education.map((obj) => (
        <Container>
          <ContainerItems>
            <Timeline className="teste" position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto" }}
                  align="center"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography color={"var(--color-primary)"}>
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
                <TimelineContent sx={{ py: "20px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    <h6>{obj.course}</h6>
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
