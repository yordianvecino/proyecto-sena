import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import imagen from './img/Historia.png'

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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Inicio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <br />
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Visión" {...a11yProps(0)} />
          <Tab label="Misión" {...a11yProps(1)} />
          <Tab label="Objetivos" {...a11yProps(2)} />
          <Tab label="Datos Institución" {...a11yProps(3)} />
          <Tab label="trayectoria e historia" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={imagen}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Nuestra historia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fundada el 7 de febrero 1973, inicio como escuela de primaria y
                paulatinamente fue creciendo el número de estudiantes y grados
                hasta obtener lo grados completos de primaria y bachillerato, teniendo
                2 sedes donde la primera graduación de bachillerato fue en el 2004
                hasta la última que ha sido en el 2020.
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box>
    </div>
  )
}

export default Inicio;