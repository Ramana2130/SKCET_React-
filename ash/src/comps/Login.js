// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// import { styled } from '@mui/material/styles';

// const defaultTheme = createTheme();

// const Root = styled('div')(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   '& > :not(style) ~ :not(style)': {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function Lp() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [helperText, setHelperText] = useState('');
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (username.trim() && password.trim()) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [username, password]);

//   const handleLogin = () => {
//     const user = users.find((user) => user.name === username && user.password === password);
//     if (user) {

      

//       setHelperText('Login Successful');
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
    

//     } 
//     else {
//       setHelperText('Incorrect username or password');
//     }
//   };
  
//   return (
//     <div className='total' style={{ color: 'black' }}>
//       <ThemeProvider theme={defaultTheme}>
//         <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '70vh'  , flexDirection:"column"}} component="main" className='Container'>
//           <CssBaseline />
//           <Box
//             sx={{
//               // marginTop: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Login
//             </Typography>
//             <Box component="form"  noValidate sx={{ mt: 1 }}>
//               <TextField
//                onChange={(e) => setUsername(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 autoComplete="name"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 onChange={(e) => setPassword(e.target.valudrawee)}
             
//                  name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
            
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Grid>

//               <Button 
//                  variant="contained"
//                  color="primary"
//                  disabled={isButtonDisabled}
//                  onClick={handleLogin}
                 
//                  sx={{ mt: 3, mb: 2 }}
                 
//                  >
//                 Sign In
//               </Button>
//                 </Grid>
//               <Typography>
//                   {helperText}
//                 </Typography>
//               <br/>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Typography>
//                     Don't have an account?{' '}
//                     <Link href="/sig" >
//                       SignUp
//                     </Link>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// }
import React, { createContext, useState, useContext, useEffect,useNavigate } from 'react';

// Create a context
const AuthContext = createContext();
// Create a context provider component
const AuthProvider = ({ children }) => {
  const navigate  = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // Enable or disable login button
  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  // Handle login
  const handleLogin = () => {
    const user = users.find((user) => user.name === username && user.password === password);
    if (user) {
      setHelperText('Login Successful');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setHelperText('Incorrect username or password');
    }
  };

  // Provide the context value
  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword, isButtonDisabled, helperText, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Use the context in your component
export default function Lp() {
  const { username, setUsername, password, setPassword, isButtonDisabled, helperText, handleLogin } = useContext(AuthContext);

}
