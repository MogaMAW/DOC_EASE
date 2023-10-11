import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DocEase2 from '../DocEase2.png';
import { teal } from '@mui/material/colors';

// This is a copyright component
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '} */}
      {/* Add Home page link */}
      <Link color="inherit" href="https://mui.com/">
        {/* DOCEASE */}
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '30px',
            border: 'none',
            padding: '15px 30px',
            marginTop: '31px',
            cursor: 'pointer',
            // Creating a shadow effect on our card
            boxShadow: '0 0 23px 0 rgba(0, 0, 0, 0.2)',
            paddingTop: '50px',
            paddingBottom: '70px',
            
            
          }}
        >
        {/* Adding our logo on top of the Card, to show ownership */}
        <img src={DocEase2} alt="DocEase2" width="90" height="90"  />
          <Typography component="h1" variant="h5">
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SIGN IN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{textDecoration: 'none'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2"style={{textDecoration: 'none'}}>  
                  {"Create an account"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}