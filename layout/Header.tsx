import React, { useContext } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ScrollElevation } from './ScrollElevation';
import { HeaderProps, TopHeaderProps } from './interface/header';
import { styled } from '@mui/material/styles';
import { LayoutContext } from './LayoutContext';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => {
  const ctx = useContext(LayoutContext);
  return {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: ctx.drawerWidth,
      width: `calc(100% - ${ctx.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
});

const TopHeader = (props: TopHeaderProps) => {
  const ctx = useContext(LayoutContext);
  return (
    <React.Fragment>
      <CssBaseline />
      <ScrollElevation {...props}>
        <AppBar position="fixed" open={ctx.open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ctx.handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(ctx.open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </ScrollElevation>
      <Toolbar />
    </React.Fragment>
  );
};

export default TopHeader;
