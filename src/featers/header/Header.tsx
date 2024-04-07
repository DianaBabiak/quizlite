import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const Header = ()=> {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" component="div" style={{margin: '0 auto'}}>
                      Create your own dictionary
                  </Typography>
              </Toolbar>
          </AppBar>
      </Box>
  )
}