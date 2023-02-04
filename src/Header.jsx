import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="fixed" color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography
          sx={{
            "sup>em": {
              fontStyle: "italic",
              fontWeight: "normal",
              fontSize: "80%",
            },
          }}
          variant="h6"
        >
          Shell
          <sup>
            <em>aced</em>
          </sup>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
