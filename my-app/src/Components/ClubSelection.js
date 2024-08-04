import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ClubSelection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Driver" {...a11yProps(0)} sx={{ flexGrow: 1 }} />
          <Tab label="Woods" {...a11yProps(1)} sx={{ flexGrow: 1 }} />
          <Tab label="Hybrids" {...a11yProps(2)} sx={{ flexGrow: 1 }} />
          <Tab label="Irons" {...a11yProps(3)} sx={{ flexGrow: 1 }} />
          <Tab label="Wedges" {...a11yProps(4)} sx={{ flexGrow: 1 }} />
          <Tab label="Putter" {...a11yProps(5)} sx={{ flexGrow: 1 }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Explore Drivers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Explore Woods
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Explore Hybrids
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Explore Irons
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Explore Wedges
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Explore Putters
      </CustomTabPanel>
    </Box>
  );
}
