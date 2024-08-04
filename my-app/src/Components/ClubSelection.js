import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductTable from './ProductTable';

// Define data for each club category
const driverData = [
  { club: 'Callaway Big Bertha', hand: 'R', loft: 15, material: 'Steel', price: '39.99' },
  // Add more driver data here
];

const woodData = [
  { club: 'TaylorMade SIM', hand: 'L', loft: 18, material: 'Titanium', price: '49.99' },
  // Add more wood data here
];

const hybridData = [
  { club: 'Cobra F9', hand: 'R', loft: 21, material: 'Graphite', price: '59.99' },
  // Add more hybrid data here
];

const ironData = [
  { club: 'Ping G410', hand: 'R', loft: 30, material: 'Steel', price: '79.99' },
  // Add more iron data here
];

const wedgeData = [
  { club: 'Titleist Vokey SM8', hand: 'R', loft: 56, material: 'Steel', price: '89.99' },
  // Add more wedge data here
];

const putterData = [
  { club: 'Odyssey White Hot', hand: 'R', loft: 3, material: 'Aluminum', price: '99.99' },
  // Add more putter data here
];

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

  // Determine which data to pass to ProductTable based on selected tab
  const getTableData = () => {
    switch (value) {
      case 0:
        return driverData;
      case 1:
        return woodData;
      case 2:
        return hybridData;
      case 3:
        return ironData;
      case 4:
        return wedgeData;
      case 5:
        return putterData;
      default:
        return [];
    }
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
        <ProductTable rows={driverData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProductTable rows={woodData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProductTable rows={hybridData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ProductTable rows={ironData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ProductTable rows={wedgeData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ProductTable rows={putterData} />
      </CustomTabPanel>
    </Box>
  );
}
