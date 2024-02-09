'use client'
import styles from './_styles/page.module.css';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  return <div className={styles.main} style={{ backgroundColor: theme.palette.secondary.main }}>products</div>
}

export default Home
