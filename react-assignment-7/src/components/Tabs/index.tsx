import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, SyntheticEvent, useState } from "react";
import { TabsPanelProps, TabPanelProps } from "./types";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabsPanel: FC<TabsPanelProps> = ({ labels }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs-panel">
          {labels.map((data, index) => {
            return <Tab label={data.label} {...a11yProps(index)}></Tab>;
          })}
        </Tabs>
      </Box>
      {labels.map((data, index) => {
        const { component } = data;
        const TabComponent = component;
        return (
          <TabPanel value={value} index={index}>
            <TabComponent />
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsPanel;
