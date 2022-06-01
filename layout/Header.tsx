import React, { useContext, useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ScrollElevation } from './ScrollElevation';
import { TopHeaderProps } from './interface/header';
import { styled } from '@mui/material/styles';
import { LayoutContext } from './LayoutContext';
import NestedDropdownMenu from '../components/Megamenu/NestedDropdown';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../apollo/queries/CATEGORY';
import { Skeleton } from '@mui/material';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => {
  const ctx = useContext(LayoutContext);
  return {
    backgroundColor: '#000000',
    border: '#e5e5e5',
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
  const [open, setOpen] = useState(true);
  const { data, loading } = useQuery(GET_CATEGORIES, {
    fetchPolicy: 'network-only',
    variables: {
      category: {
        filter: {
          name: 'root',
        },
        pagination: {
          limit: 100,
          offset: 0,
        },
      },
    },
  });

  const handleClose = () => setOpen(true);

  if (loading) return <Skeleton />;

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
            <NestedDropdownMenu />
          </Toolbar>
        </AppBar>
      </ScrollElevation>
      <Toolbar />
    </React.Fragment>
  );
};

export default TopHeader;
