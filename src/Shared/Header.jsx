import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => console.log('User logged out'))
    .catch(error => console.log(error.message))
  }
  
return (
  <div className="mb-20">
  <Box sx={{ flexWrap:1 }}>
    <AppBar position="fixed" style={{ backgroundColor: '#003399', width:'fit', margin:'auto' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        > 
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/home'>Job Portal</Link>
          
        </Typography>
        <Link to='/postJob'><div className="text-[#003399] font-bold bg-slate-200 rounded-md mx-2"><Button>Post a Job</Button></div></Link>
        <div>
        {
        user
    ? <div className='flex gap-2 items-center'>
        <img className='rounded-xl w-[40px]' src={user.photoURL} alt="" />
        <span>{user.displayName}</span>               
        <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </div>
    : <div></div>
    
  }
        </div>
        
      </Toolbar>
    </AppBar>
  </Box>
  </div>
  
);
};

export default Header;