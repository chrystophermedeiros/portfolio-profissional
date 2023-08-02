import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { education } from "../../data/education";
export function Education() {
  return (
    <div>
  {education.map((obj) =>(
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <Typography>
              <p  >{obj.institution}</p>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
             <img width={100} src={obj.img} alt="" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            
            <Typography variant="h6" component="span">
              <p>{obj.course}</p>
            </Typography>
            <Typography>{obj.level}</Typography>
            <Typography>{obj.status}</Typography>
          </TimelineContent>
        </TimelineItem>
       
    
       
       
      </Timeline>
    </div>
  ))}
      
    </div>
  );
}
