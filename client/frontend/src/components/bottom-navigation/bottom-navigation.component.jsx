import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const BottomNavigationComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.bottomNavigation}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Appointments"
        value="appointments"
        icon={<DateRangeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Clients"
        value="customers"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="More"
        value="more"
        icon={<MenuIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
