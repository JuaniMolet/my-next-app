import { Box } from '@mui/material';
import React from 'react';
import AppMenuDrawer from './AppMenuDrawer';

type AppMenuContainerProps = {
  children: any;
  loading?: boolean;
};

const AppMenuContainer: React.FC<AppMenuContainerProps> = ({ children, loading }) => {
  return (
    <Box display={'flex'} flexDirection={'row'} height={'100vh'} width={'100vw'} bgcolor={'lightblue'}>
      <AppMenuDrawer />
    </Box>
  );
};

export default AppMenuContainer;
