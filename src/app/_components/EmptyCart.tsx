import React, { FC } from 'react';
import styles from '../_styles/page.module.css';
import { useTheme } from '@mui/material/styles';
import { labels } from '@/app/labels';
import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const EmptyCart: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.primary.light,
        }}
      >
        {labels.EMPTY_CART}
      </Typography>
      <Button
        aria-label="go to product gallery"
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.secondary.main,
          marginTop: '20px',
        }}
        onClick={() => {
          router.push('/');
        }}
      >
        {labels.CONTINUE_WITH_YOUR_SHOPPING}
      </Button>
    </>
  );
};

export default EmptyCart;
