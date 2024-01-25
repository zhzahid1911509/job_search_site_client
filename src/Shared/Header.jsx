import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";


const Header = () => {
    return (
        <div>
          <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ backgroundColor: 'darkblue' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            TechForing
          </Typography>
        </Toolbar>
      </AppBar>
    </Box> 
        </div>
    );
};

export default Header;