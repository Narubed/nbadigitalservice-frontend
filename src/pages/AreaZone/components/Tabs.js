import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import {
  Grid,
  Container,
  Box,
  Typography,
  Badge,
  Card,
  TextField,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import MuiTab from '@mui/material/Tab';

import BKKCard from './BKKCard';
import SouthCard from './SouthCard';
import NortEastCard from './NortEastCard';
import EastCard from './EastCard';
import CenterCard from './CenterCard';
import NortCard from './NortCard';

// images
import LogoSouth from '../../../assets/images/NBAService/area_zone/LOGO/LogoSouth.png';
import LogoBKK from '../../../assets/images/NBAService/area_zone/LOGO/LogoBKK.png';
import LogoCenter from '../../../assets/images/NBAService/area_zone/LOGO/LogoCenter.png';
import LogoEast from '../../../assets/images/NBAService/area_zone/LOGO/LogoEast.png';
import LogoNortheast from '../../../assets/images/NBAService/area_zone/LOGO/LogoNortheast.png';
import LogoNorth from '../../../assets/images/NBAService/area_zone/LOGO/North.png';

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export default function FullWidthTabs() {
  const [value, setValue] = React.useState('BKK');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="account-settings tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="BKK"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoBKK} alt="BKK" width="38px" />
                <TabName>กรุงเทพมหานคร</TabName>
              </Box>
            }
          />
          <Tab
            value="SouthCard"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoSouth} alt="SouthCard" width="38px" />
                <TabName>ภาคใต้</TabName>
              </Box>
            }
          />
          <Tab
            value="Northeast"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoNortheast} alt="Northeast" width="38px" />
                <TabName>ภาคอีสาน</TabName>
              </Box>
            }
          />

          <Tab
            value="East"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoEast} alt="LogoEast" width="38px" />
                <TabName>ภาคตะวันออก</TabName>
              </Box>
            }
          />

          <Tab
            value="Center"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoCenter} alt="LogoCenter" width="38px" />
                <TabName>ภาคกลาง</TabName>
              </Box>
            }
          />
          <Tab
            value="Nort"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoNorth} alt="LogoNorth" width="38px" />
                <TabName>ภาคเหนือ</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 4 }} value="BKK">
          <BKKCard />
        </TabPanel>
        <TabPanel sx={{ p: 4 }} value="SouthCard">
          <SouthCard />
        </TabPanel>
        <TabPanel sx={{ p: 4 }} value="Northeast">
          <NortEastCard />
        </TabPanel>
        <TabPanel sx={{ p: 4 }} value="East">
          <EastCard />
        </TabPanel>
        <TabPanel sx={{ p: 4 }} value="Center">
          <CenterCard />
        </TabPanel>
        <TabPanel sx={{ p: 4 }} value="Nort">
          <NortCard />
        </TabPanel>
      </TabContext>
    </Card>
  );
}
