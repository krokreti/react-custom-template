import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import FirstComponent from '../pages/Details/TabOne/FirstComponent';
import SecondComponent from '../pages/Details/TabTwo/SecondComponent';
import ThirdComponent from '../pages/Details/TabThree/ThirdComponent';
import FourthComponent from '../pages/Details/TabFour/FourthComponent';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabComponent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    indicatorColor={'primary'}
                    variant="scrollable"
                    scrollButtons="auto">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Terceira Tab" {...a11yProps(2)} />
                    <Tab label="4° Tab Tab" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <FirstComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SecondComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ThirdComponent />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FourthComponent />
            </TabPanel>
        </Box>
    );
}

export default TabComponent;