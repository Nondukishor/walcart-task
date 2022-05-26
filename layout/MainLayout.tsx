import { CssBaseline, Container, Box } from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import React, { useContext } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import TopHeader from './Header';
import Footer from './Footer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { MainLayoutProps } from './interface/layout';
import { LayoutContext } from './LayoutContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const MainLayout = (props: MainLayoutProps) => {
  const ctx = useContext(LayoutContext);
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopHeader title={'Logo'} />
      <Drawer variant="permanent" open={ctx.open}>
        <DrawerHeader>
          <IconButton onClick={ctx.handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => router.push('/create-category')}
              sx={{
                minHeight: 48,
                justifyContent: ctx.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: ctx.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link href={'/create-category'}>
                    <a>Add Category</a>
                  </Link>
                }
                sx={{ opacity: ctx.open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => router.push('/update-category')}
              sx={{
                minHeight: 48,
                justifyContent: ctx.open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: ctx.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SystemUpdateAltIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link href={'/update-category'}>
                    <a>Update Category</a>
                  </Link>
                }
                sx={{ opacity: ctx.open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
