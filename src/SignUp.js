import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const baseUrl = process.env.REACT_APP_API_URL;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="https://material-ui.com/">
                A Mind Sherpa collaboration.
            </Link>{' '}
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({setUser}) {
    console.log(JSON.stringify(process.env))
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [signInPage, setSignInPage] = useState(true)

    const signUp = (e) => {
        e.preventDefault();
        const data = JSON.stringify({username, password});
        fetch(`${baseUrl}/auth/signup`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: data
            })
            .then(response => {
                if(response.ok){
                    return response.json()
                }else {
                    throw Error(`That did not compute`)
                }
            })
            .then(resData => {
                setUser(resData);
                localStorage.setItem('user', JSON.stringify(resData))
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const signIn = (e) => {
        e.preventDefault();
        const data = JSON.stringify({username, password});
        fetch(`${baseUrl}/auth/signin`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: data
            })
            .then(response => {
                if(response.ok){
                    return response.json()
                }else {
                    throw Error('Invalid credentials')
                }
            })
            .then(resData => {
                setUser(resData);
                localStorage.setItem('user', JSON.stringify(resData))
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>{JSON.stringify(signIn)}</div>
            {signInPage?
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={classes.form} onSubmit={signIn} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="User Name"
                                    name="email"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=> {
                                    setSignInPage(false)
                                }}>
                                   No account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                :
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={signUp} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=> setSignInPage(true)}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>}
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
