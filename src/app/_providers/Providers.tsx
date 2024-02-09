'use client'
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from '@/app/_store/store';
import { dark } from '../theme';

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
