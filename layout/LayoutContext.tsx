import React, { ReactNode, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface LayoutContextProps {
  children: ReactNode;
}

interface IFdrawerWidth {
  drawerWidth: number;
  setDrawerWidth: React.Dispatch<React.SetStateAction<number>>;
}
interface IFOpen {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFhandleFun {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

interface snackBarProps {
  message: string;
  open: boolean;
  severity: AlertColor;
}

interface IFContext extends IFdrawerWidth, IFOpen, IFhandleFun {
  setSnackbar: React.Dispatch<React.SetStateAction<snackBarProps>>;
}

export const LayoutContext = React.createContext<IFContext>({
  drawerWidth: 240,
  setDrawerWidth: () => {},
  open: false,
  setOpen: () => {},
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  setSnackbar: () => {},
});

const LayoutContextProvider = (props: LayoutContextProps) => {
  const [drawerWidth, setDrawerWidth] = useState<number>(240);
  const [open, setOpen] = useState<boolean>(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const [snackbar, setSnackbar] = useState<snackBarProps>({
    message: '',
    open: false,
    severity: 'success',
  });

  return (
    <LayoutContext.Provider
      value={{
        drawerWidth,
        setDrawerWidth,
        open,
        setOpen,
        handleDrawerOpen,
        handleDrawerClose,
        setSnackbar,
      }}
    >
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((pre) => ({ ...pre, open: false }))}
        >
          <Alert
            onClose={() => setSnackbar((pre) => ({ ...pre, open: false }))}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Stack>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
