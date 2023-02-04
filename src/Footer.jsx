import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export function Footer() {
  return <Container maxWidth="lg" disableGutters>
    <Divider variant="fullWidth" />
    <Typography component="div" align="center" variant="caption">
      &copy; 2023. All Rights Reserved
    </Typography>
  </Container>;
}

export default Footer;
