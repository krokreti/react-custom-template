import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TabDadosAeronave from '../pages/Details/TabDescricaoAeronave/TabDadosAeronave';
import TabControlesIniciais from '../pages/Details/TabControlesIniciais/TabControlesIniciais';
import TabPatrimonio from '../pages/Details/TabPatrimonio/TabPatrimonio';
import TabManutencoesRealizadas from '../pages/Details/TabManutencoesRealizadas/TabManutencoesRealizadas';
import TabDiretivas from '../pages/Details/TabDiretivas/TabDiretivas';
import TabDisponibilidade from '../pages/Details/TabDisponibilidade/TabDisponibilidade';
import SecondComponent from '../pages/Details/TabPatrimonio/SecondComponent';
import ThirdComponent from '../pages/Details/TabThree/ThirdComponent';
import FourthComponent from '../pages/Details/TabFour/FourthComponent';
import TableRowsIcon from '@mui/icons-material/TableRows';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TuneIcon from '@mui/icons-material/Tune';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EquipamentoAeronave from '../models/EquipamentoAeronave';

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

const TabComponent: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
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
                    allowScrollButtonsMobile
                    scrollButtons="auto"
                >
                    <Tab label="Dados da Aeronave" icon={<TableRowsIcon />} iconPosition='start' {...a11yProps(0)} />
                    <Tab label="Patrimônio" icon={<AppsIcon />} iconPosition='start' {...a11yProps(1)} />
                    <Tab label="Controles Iniciais" icon={<SettingsIcon />} iconPosition='start' {...a11yProps(2)} />
                    <Tab label="Manutenções Realizadas" icon={<FormatListNumberedIcon />} iconPosition='start' {...a11yProps(3)} />
                    <Tab label="Diretivas" icon={<OfflineBoltIcon />} iconPosition='start' {...a11yProps(4)} />
                    <Tab label="Disponibilidade" icon={<EventAvailableIcon />} iconPosition='start' {...a11yProps(5)} />
                    <Tab label="Configuração Real" icon={<TuneIcon />} iconPosition='start' {...a11yProps(6)} />
                    <Tab label="Utilização" icon={<FlightTakeoffIcon />} iconPosition='start' {...a11yProps(7)} />
                    <Tab label="Ordem de Serviço" icon={<CoPresentIcon />} iconPosition='start' {...a11yProps(8)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <TabDadosAeronave aeronave={aeronave} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabPatrimonio aeronave={aeronave} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabControlesIniciais />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TabManutencoesRealizadas />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TabDiretivas />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <TabDisponibilidade />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <TabManutencoesRealizadas />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <TabManutencoesRealizadas />
            </TabPanel>
            <TabPanel value={value} index={8}>
                <TabManutencoesRealizadas />
            </TabPanel>
        </Box>
    );
}

export default TabComponent;