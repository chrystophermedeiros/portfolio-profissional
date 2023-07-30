import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "./style";
import * as React from 'react';
import { Work } from "../Work";
import {Certificates} from "../Certificates";
import { Education } from "../Education";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Container >
     
      <Box 
        className="box"
      >
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor=""
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab  label="Trabalho" {...a11yProps(0)} />
          <Tab  label="Educação" {...a11yProps(1)} />
          <Tab  label="Certificados" {...a11yProps(2)} />
         
        </Tabs>
        <TabPanel  value={value} index={0}>
          <Work/>
        </TabPanel>
        <TabPanel  value={value} index={1}>
          <Education/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Certificates/>
        </TabPanel>
      </Box>
    </Container>
  );
}
